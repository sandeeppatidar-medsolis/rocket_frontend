import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableUtility } from '../../utilities/table.utility';
import { AppConstants } from '../../constants/app.constants';
import { BreadCrumbConstants } from '../../constants/breadcrumb.constant';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [RoleService]

})
export class EmployeeListComponent implements OnInit {
  public keys: any;
  public data: any;
  public url: string = AppConstants.URL;
  private breadcrumbList: any[];
  private processBtn = [
    {
      title: 'Add',
      class: 'info',
      redirect: true,
      path: '/crm/employee_add'
    }, {
      title: 'Export',
      class: 'danger',
      redirect: false,
    },
  ];

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit() {
    this.keys = TableUtility.getColumn('employeeList');
    this.breadcrumbList = [
      {
        title: BreadCrumbConstants.EMPLOYEE + " " + BreadCrumbConstants.LIST,
        active: true,
        routerLink: ""
      }
    ];

    this.getAllEmployee(this.url);
  }

  getAllEmployee(url: string) {
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
      this.getAllEmployee(event);
    }
  }

  onChangeBtnEvent(event: any): void {
    alert(event.title);
  }

}
