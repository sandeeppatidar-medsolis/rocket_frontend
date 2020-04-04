import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule, AppRoutes } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainWebsiteComponent } from './mainwebsite/mainwebsite.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { CustomHttpService } from './services/custom-http.service';
import { RoleListComponent } from './role/role-list.component';

const APP_PROVIDERS = [
  { provide: AuthGuard, useClass: AuthGuard },
  { provide: CustomHttpService, useClass: CustomHttpService},
  // { provide: LoginService, useClass: LoginService },
  // { provide: SecurityUtility, useClass: SecurityUtility },
  // { provide: MessageService, useClass: MessageService },
  // { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
  // { provide: SimpleTimer, useClass: SimpleTimer },
  // { provide: SessionUtility, useClass: SessionUtility },
  {provide: LocationStrategy, useClass: HashLocationStrategy}
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
    RouterModule.forRoot(AppRoutes),
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MainWebsiteComponent,
    RoleListComponent
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
