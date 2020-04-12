import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';
import { RoleService } from '../../services/role.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { BreadCrumbConstants } from '../../constants/breadcrumb.constant';

@Component({
  selector: 'role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
  providers: [RoleService]

})
export class RoleListComponent implements OnInit {
  public keys: any;
  public data: any;
  public url: string = AppConstants.URL;
  private breadcrumbList: any[];
  private processBtn = [
    {
      title: 'Add',
      class: 'info',
      redirect: true,
      path: '/crm/role_add'
    }, {
      title: 'Export',
      class: 'danger',
      redirect: false,
    },
  ];

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit() {
    this.keys = {
      name: {
        title: 'Name',
        type: 'string', width: '250px',
      },
      displayName: {
        title: 'Display Name',
        type: 'string', width: '250px',
      },
      createdBy: {
        title: 'Created By',
        type: 'string', width: '250px',
      },
      createdDate: {
        title: 'Created At',
        type: 'date', width: '250px',
        valuePrepareFunction: (date) => {
          return new DatePipe('en-US').transform(date, AppConstants.DATE_FORMATE);
        },
      },

    };
    this.breadcrumbList = [
      {
        title: BreadCrumbConstants.ROLE,
        active: false,
        routerLink: "/crm/role"
      },
      {
        title: BreadCrumbConstants.ROLE + " " + BreadCrumbConstants.LIST,
        active: true,
        routerLink: ""
      }
    ];

    this.getAllRole(this.url);
  }

  getAllRole(url: string) {
    this.roleService.getAllRoleList(url).subscribe(
      (data: any) => {
        this.data = data.data;
      },
      error => {
      }
    )
  }

  onChangeEvent(event: any): void {
    if (event.action !== null && event.action !== undefined) {
      if (event.action === 'edit') {
        this.router.navigate(['/crm/edit-role', event.data.id]);
      }
    } else {
      this.getAllRole(event);
    }
  }

  onChangeBtnEvent(event: any): void {
    alert(event.title);
  }

}
