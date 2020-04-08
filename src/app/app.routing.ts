import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWebsiteComponent } from './mainwebsite/mainwebsite.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './auth.guard';
import { RoleListComponent } from './pages/role/role-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';




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
            {
                path: 'dashboard',
                component: DashboardComponent
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
