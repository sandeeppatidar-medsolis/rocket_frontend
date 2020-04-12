import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'breadcrumb-layout',
  templateUrl: './breadcrumb.component.html',
  styleUrls:['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
constructor(private router:Router)
{

}
  @Input() private breadcrumbList: any;
  ngOnInit() {
    window.scrollTo(0, 0);
  }

}