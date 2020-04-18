import { Component, OnInit } from '@angular/core';
declare var $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  menu: RouteInfo[]
}

export const ROUTES: RouteInfo[] = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    icon: 'design_app',
    menu: [
    ]
  },
  {
    path: 'admin',
    title: 'Administrator',
    icon: 'education_atom',
    menu: [
      { path: 'role', title: 'Role', icon: 'design_app', menu: [] },
      { path: 'branch', title: 'Branch', icon: 'design_app', menu: [] },
      { path: 'employee', title: 'Employee', icon: 'design_app', menu: [] }
    ]
  },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  activeTab: 1
  public username: string;
  public name: string;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.username = localStorage.getItem('username');
    this.name = localStorage.getItem('name');
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  };

  onChange(menu) {
    console.log(menu);
  }

}
