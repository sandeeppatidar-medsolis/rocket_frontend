import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWebsiteComponent } from './mainwebsite/mainwebsite.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './auth.guard';
import { RoleListComponent } from './pages/role/role-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddRoleComponent } from './pages/role/add-role.component';
import { EmployeeListComponent } from './pages/employee/employee-list.component';
import { AddEmployeeComponent } from './pages/employee/add-employee.component';
import { BranchListComponent } from './pages/branch/branch-list.component';
import { AddBranchComponent } from './pages/branch/add-branch.component';




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
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'role',
                component: RoleListComponent
            },
           
            {
                path: 'role_add',
                component: AddRoleComponent
            },

            {
                path: 'employee',
                component: EmployeeListComponent
            },
           
            {
                path: 'employee_add',
                component: AddEmployeeComponent
            },

            {
                path: 'branch',
                component: BranchListComponent
            },
           
            {
                path: 'branch_add',
                component: AddBranchComponent
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
