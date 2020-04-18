import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';
import { NotificationUtility } from '../../utilities/notification.utility';
import { BreadCrumbConstants } from '../../constants/breadcrumb.constant';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormUtility } from '../../utilities/form.utility';


@Component({
  selector: 'ngx-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss'],
  providers: [RoleService, NotificationUtility],
})
export class AddBranchComponent implements OnInit {

  public sub: any;
  public roleId: string;
  public role = new Role();
  public breadcrumbList: any[];
  public formInput: any ={};

  constructor(private router: Router, private notificationUtility: NotificationUtility, private roleService: RoleService,
    public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formInput = FormUtility.getForm('branchAdd');
        this.breadcrumbList = [
      {
        title: BreadCrumbConstants.BRANCH,
        active: false,
        routerLink: "/crm/employee"
      },
      {
        title: BreadCrumbConstants.ADD + " " + BreadCrumbConstants.BRANCH,
        active: true,
        routerLink: ""
      }
    ];
  }



  onSubmit() {
    // this.roleService.saveRole({ 'map': this.role }).subscribe(
    //   (data: any) => {
    //     this.notificationUtility.notify("Role created successfully", "success");
    //     this.router.navigate(['crm/role']);
    //   },
    //   error => {
    //     this.notificationUtility.notify(error.error.message, "danger");
    //   },
    // );
  }

  onChangeEvent(obj: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(obj))
  }

}


