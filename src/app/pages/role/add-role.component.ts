import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';
import { NotificationUtility } from '../../utilities/notification.utility';
import { BreadCrumbConstants } from '../../constants/breadcrumb.constant';

@Component({
  selector: 'ngx-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
  providers: [RoleService,NotificationUtility],
})
export class AddRoleComponent implements OnInit {

  public sub: any;
  public roleId: string;
  public role = new Role();
  private breadcrumbList: any[];

  constructor(private router: Router, private notificationUtility: NotificationUtility,private roleService:RoleService) {
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

  cancel(): void {
    this.router.navigate(['crm/role']);
  }


  onSubmit() {
    console.log(this.role);
      this.roleService.saveRole({ 'map': this.role }).subscribe(
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


