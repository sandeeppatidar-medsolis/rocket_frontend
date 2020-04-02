import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';

@Component({
  selector: 'main-website',
  templateUrl: './mainwebsite.component.html',
  styleUrls: ['./mainwebsite.component.css']
})
export class MainWebsiteComponent { 

  constructor(private router:Router)
  {
  }
  login()
  {
    this.router.navigate(['/crm']);
  }
}
