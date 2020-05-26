import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { Page } from '../../models/page';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { UriConstants } from '../../constants/uri.constants';
import { NotificationUtility } from '../../utilities/notification.utility';
declare var $:any;
@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [CommonService,NotificationUtility],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() keys: any;
  @Input() data: any;
  @Input() searchKeys: [{ name, placeHolder }];
  @Input() showFilter: boolean = false;
  public page = new Page();
  public url: string;
  @Output() onChangeEvent: EventEmitter<any> = new EventEmitter();
  @Output() onSendEmailButtonEvent: EventEmitter<any> = new EventEmitter();
  public search: string = '';
  public firstKey: String = '';
  public firstVar: String = '';
  @Input() processBtn: any = [];
  @Output() onChangeBtnEvent: EventEmitter<any> = new EventEmitter();
  public row:any;
  public deleteUrl:any;


  public customButton: any[] = [
    {
      name: 'edit',
      title: '<i class="fa fa-edit" title="Edit" class="custom-icon"></i>',
    },
    {
      name: 'delete',
      title: '<i class="fa fa-trash" title="Delete"></i>',
    },
  ];

  settings = {
    pager: {
      display: false,
    },
    actions: {
      position: 'right',
      custom: [],
      add: false,
      edit: false,
      delete: false
    },
    columns: {},
    hideSubHeader: true
  };

  public paginateOptions = {
    pageSizes: [{
      value: 10,
      display: '10',
    }, {
      value: 15,
      display: '15',
    },
    ],
  };
  searchForm: FormGroup = new FormGroup({});
  source: LocalDataSource = new LocalDataSource();

  constructor(private notificationUtility: NotificationUtility,private fb: FormBuilder, private router: Router, private commonService:CommonService) {
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['keys'] && changes['keys'].currentValue) {
      this.keys = changes['keys'].currentValue;
      this.settings.columns = this.keys;
    }
    if (changes['data'] && changes['data'].currentValue) {
      const data = changes['data'].currentValue;
      this.data = data.content;
      this.deleteUrl = data.deleteUrl;
      this.page.currentPage = data.number + 1;
      this.page.pageSize = data.size;
      this.page.totalItems = data.totalElements;
      this.page.numberOfPages = data.totalPages;
      this.source.load(this.data);
    }
  }

  ngOnInit() {
    const varlist = Object.getOwnPropertyNames(this.keys);
    this.firstKey = this.keys[varlist[0]].title;
    this.firstVar = varlist[0];
    if (this.showFilter) {
      this.searchKeys.forEach(ele => {
        this.searchForm.addControl(ele.name, this.fb.control(''));
      });
    }

    this.source.onChanged().subscribe((change) => {
      if (change.action !== 'load' && change.action !== 'refresh') {
        if (change.action === 'sort') {
          this.page.sort = (change.sort[0].direction != null && change.sort[0].direction !== '' ?
            change.sort[0].field + ',' + change.sort[0].direction : '');
        }
        if (change.action === 'filter') {
          this.page.advanceSearch = true;
          this.page.search = '';
          this.search = '';
          this.page.filter = '';
          change.filter.filters.map(
            (value, index) => this.page.filter = this.page.filter + '&' + value.field + '=' + value.search);
        }
        this.url = '?page=' + (this.page.currentPage - 1) + '&size=' + this.page.pageSize + '&sort=' + this.page.sort
          + '&search=' + this.page.search + this.page.filter + '&advanceSearch=' + this.page.advanceSearch;
        this.onChangeEvent.emit(this.url);
      }
      console.log(change.action);
    });
    this.settings.actions.custom = this.customButton;
  }

  onCustomEvent(event): void {
    this.row = event;
    if (event.action === 'delete') {
      $('#myModal').modal('show');
     }
    if (event.action === 'edit' || event.action === 'view') {
      this.onChangeEvent.emit(event);
    }
  }

  OnDeleteRecord(): void {
 
    let url;
    if(this.deleteUrl == UriConstants.ROLE_API)
    {
     url = this.deleteUrl + "/" + this.row.data.name;
    }
    this.commonService.delete(url).subscribe(
      (data: any) => {
        this.notificationUtility.notify("Role delete successfully", "success");
          this.onChangeEvent.emit(this.row);
      },
      error => {
        this.notificationUtility.notify(error.error.message, "danger");
      }
    )
    $('#myModal').modal('hide');
  }

  onSearch(query: string) {
    this.page.search = query;
    this.page.advanceSearch = false;
    console.log(this.source);
    this.url = '?page=' + (this.page.currentPage - 1) + '&size=' + this.page.pageSize + '&sort=' +
      this.page.sort + '&search=' + query + '&advanceSearch=' + this.page.advanceSearch;
    this.onChangeEvent.emit(this.url);
  }

  setPage(pageState: any) {
    this.page = pageState;
    this.url = '?page=' + (this.page.currentPage - 1) + '&size=' + this.page.pageSize + '&sort=' + this.page.sort
      + '&search=' + this.page.search + this.page.filter + '&advanceSearch=' + this.page.advanceSearch;
    this.onChangeEvent.emit(this.url);
  }

  searchByFilter() {
    this.url = '?page=' + (this.page.currentPage - 1) + '&size=' + this.page.pageSize + '&sort=' +
      this.page.sort;
    this.searchKeys.forEach(ele => {
      if (this.searchForm.controls[ele.name].value !== '')
        this.url = this.url + '&' + ele.name + '=' + this.searchForm.controls[ele.name].value;
    });
    this.onChangeEvent.emit(this.url);
  }

  onBtnHandler(element) {
    if (element.redirect) {
      this.router.navigate([element.path]);
    } else {
      this.onChangeBtnEvent.emit(element);
    }
  }

}

