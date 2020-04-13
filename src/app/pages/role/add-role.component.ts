import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';
import { NotificationUtility } from '../../utilities/notification.utility';
import { BreadCrumbConstants } from '../../constants/breadcrumb.constant';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  public formInput: any = {
    cancel: '',
    save: '',
    element: [
      {
        type: 'input',
        subType: 'text',
        name: 'name',
        id: 'name',
        required: false,
        label: 'Full Name',
        placeholder: 'Enter full name',
        value: '',
      },
      {
        type: 'input',
        subType: 'email',
        name: 'email',
        id: 'email',
        required: true,
        label: 'Eamil Id',
        placeholder: 'Enter email',
        value: '',
        validation: [Validators.required, Validators.email]
      },
      {
        type: 'input',
        subType: 'number',
        name: 'mobileNumber',
        id: 'mobileNumber',
        required: true,
        label: 'Mobile Number',
        placeholder: 'Enter mobile number',
        value: '',
        validation: [Validators.required]
      },
      {
        type: 'select',
        name: 'country',
        id: 'country',
        required: true,
        label: 'Country',
        placeholder: 'Select Country',
        option: [],
        value: '',
        validation: [Validators.required]
      },
      {
        type: 'datepicker',
        name: 'dob',
        id: 'dob',
        required: true,
        label: 'Date of Birth',
        placeholder: 'Select DOB',
        value: '',
        validation: [Validators.required]
      },
      {
        type: 'radio',
        name: 'gender',
        id: 'gender',
        required: true,
        label: 'Gender',
        placeholder: '',
        value: '',
        validation: [Validators.required]
      },
      {
        type: 'checkbox',
        name: 'accept',
        id: 'accept',
        required: true,
        label: 'Accept terms and Condition',
        placeholder: '',
        value: '',
        validation: [Validators.required]
      },
      {
        type: 'textarea',
        name: 'address',
        id: 'address',
        required: true,
        label: 'Address',
        placeholder: 'Enter address',
        rows: 2,
        value: '',
        validation: [Validators.required]
      }
    ]
  }

  constructor(private router: Router, private notificationUtility: NotificationUtility, private roleService: RoleService,
    public formBuilder: FormBuilder) {
  }

  ngOnInit() {
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


