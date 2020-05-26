import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';
import { NotificationUtility } from '../../utilities/notification.utility';
import { BreadCrumbConstants } from '../../constants/breadcrumb.constant';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormUtility } from '../../utilities/form.utility';


@Component({
  selector: 'ngx-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
  providers: [RoleService, NotificationUtility],
})
export class AddRoleComponent implements OnInit {

  public sub: any;
  public roleId: string;
  public role = new Role();
  public breadcrumbList: any[];
  public formInput: any ={};

  constructor(private router: Router, private notificationUtility: NotificationUtility, private roleService: RoleService,
    public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formInput = FormUtility.getForm('roleAdd');
        this.breadcrumbList = [
      {
        title: BreadCrumbConstants.ROLE,
        active: false,
        routerLink: "/crm/role"
      },
      {
        title: BreadCrumbConstants.ADD + " " + BreadCrumbConstants.ROLE,
        active: true,
        routerLink: ""
      }
    ];
  }

  onChangeEvent(obj: any) {
     this.roleService.saveRole({ 'map': obj }).subscribe(
      (data: any) => {
        this.notificationUtility.notify("Role created successfully", "success");
        this.router.navigate(['crm/role']);
      },
      error => {
        this.notificationUtility.notify(error.error.message, "danger");
      },
    );
  }

}


