import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWebsiteComponent } from './mainwebsite/mainwebsite.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';



export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: MainWebsiteComponent
    },
    // {
    //     path: '**', 
    //     component: NotFoundComponent
    // },


    {
        path: 'crm',
        component: AdminLayoutComponent,
        // canActivate: [AuthGuard],

        children: [
            
      
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
