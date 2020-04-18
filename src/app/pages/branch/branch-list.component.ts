import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableUtility } from '../../utilities/table.utility';
import { AppConstants } from '../../constants/app.constants';
import { BreadCrumbConstants } from '../../constants/breadcrumb.constant';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css'],
  providers: [RoleService]

})
export class BranchListComponent implements OnInit {
  public keys: any;
  public data: any;
  public url: string = AppConstants.URL;
  private breadcrumbList: any[];
  private processBtn = [
    {
      title: 'Add',
      class: 'info',
      redirect: true,
      path: '/crm/branch_add'
    }, {
      title: 'Export',
      class: 'danger',
      redirect: false,
    },
  ];

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit() {
    this.keys = TableUtility.getColumn('branchList');
    this.breadcrumbList = [
      {
        title: BreadCrumbConstants.BRANCH + " " + BreadCrumbConstants.LIST,
        active: true,
        routerLink: ""
      }
    ];

    this.getAllBranch(this.url);
  }

  getAllBranch(url: string) {
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
      this.getAllBranch(event);
    }
  }

  onChangeBtnEvent(event: any): void {
    alert(event.title);
  }

}
