import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainWebsiteComponent } from './mainwebsite/mainwebsite.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { CustomHttpService } from './services/custom-http.service';
import { RoleListComponent } from './pages/role/role-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './common/table/table.component';
import { NgxPaginateModule } from 'ngx-paginate';
import { AddRoleComponent } from './pages/role/add-role.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';

const APP_PROVIDERS = [
  { provide: AuthGuard, useClass: AuthGuard },
  { provide: CustomHttpService, useClass: CustomHttpService },
  { provide: LocationStrategy, useClass: HashLocationStrategy }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    Ng2SmartTableModule,
    NgxPaginateModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MainWebsiteComponent,
    RoleListComponent,
    DashboardComponent,
    TableComponent,
    AddRoleComponent,
    BreadcrumbComponent
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
