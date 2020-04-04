import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWebsiteComponent } from './mainwebsite/mainwebsite.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './auth.guard';
import { RoleListComponent } from './role/role-list.component';




export const AppRoutes: Routes = [


    {
        path: 'home',
        component: MainWebsiteComponent,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'crm',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],

        children: [
            {
                path: 'role',
                component: RoleListComponent
            },
        ]
    }


]

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
