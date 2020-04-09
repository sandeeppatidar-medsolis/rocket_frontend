import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';

@Component({
  selector: 'role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  public keys: any;
  public data: any;
  public url: string = AppConstants.URL;

  constructor() { }

 

  ngOnInit() {
    this.keys = {
      name: {
        title: 'Name',
        type: 'string',
        width: '250px',
      },
      id: {
        title: 'Phone',
        type: 'number',
        width: '150px',
      },
      username: {
        title: 'Email',
        type: 'string',
        width: '150px',
      },
      email: {
        title: 'Role',
        type: 'string',
        width: '150px',
      },
    };
  this.data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },

    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
  }

}
