import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
  providers:[RoleService]

})
export class RoleListComponent implements OnInit {
  public keys: any;
  public data: any;
  public url: string = AppConstants.URL;

  constructor(private roleService:RoleService) { }

 

  ngOnInit() {
    this.keys = {
      name: {
        title: 'Name',
        type: 'string',
        width: '250px',
      },
      displayName: {
        title: 'Display Name',
        type: 'string',
        width: '150px',
      },
      created_by: {
        title: 'Created By',
        type: 'string',
        width: '150px',
      },
      created_date: {
        title: 'Created At',
        type: 'date',
        width: '150px',
      },
      
    };
    this.getAllRole();
  }

  getAllRole()
  {
    this.roleService.getAllRoleList(this.url).subscribe(
      (data: any) =>
      {
        this.data = data.data.content; 
      },
      error => {
      }
    )
    
  }
}
