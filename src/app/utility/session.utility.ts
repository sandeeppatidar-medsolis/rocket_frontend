// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { SimpleTimer } from 'ng2-simple-timer';
// import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';


// /* Custom Services */
// import { LoginService } from '../services/login.service';

// /* Models */
// import { User } from '../models/user';

// @Injectable()
// export class SessionUtility {

//     private user: User;

//     private isRefreshToken = false;

//     constructor(private loginService: LoginService, private simpleTimer: SimpleTimer, private idle: Idle, private router: Router) {
//         this.router.routeReuseStrategy.shouldReuseRoute = function () {
//             return false;
//         }
//         if (this.loginService.isLoggedIn()) {
//             this.user = this.loginService.getUser();
//             this.isRefreshToken = true;
//             this.startIdleTimout();
//             this.startRefreshTokenTimer();
//         } else {
//             let uri: string = window.location.href;
//             if (uri != null && uri.indexOf("#") != -1) {
//                 let routing: string = uri.substring(uri.indexOf("#"));
//                 if (routing != null &&
//                     routing != "" &&
//                     routing.length > 0 &&
//                     routing != "/" &&
//                     routing != "#/" &&
//                     !routing.includes("login") &&
//                     !routing.includes("forget/password") &&
//                     !routing.includes("password/")) {
//                     this.logout();
//                 }
//             }
//         }
//     }

//     public startSession(): void {
//         if (this.loginService.isLoggedIn()) {
//             this.user = this.loginService.getUser();
//             this.isRefreshToken = false;
//             this.startIdleTimout();
//             this.startRefreshTokenTimer();
//         } else {
//             this.logout();
//         }
//     }

//     public expiredSession(): void {
//         this.isRefreshToken = false;
//         this.loginService.logout();
//         this.stopIdleTimeout();
//         this.stopRefreshTokenTimer();
//     }

//     private startIdleTimout(): void {
//         console.log('Set idle timeout...');

//         this.idle.setIdle(840);

//         this.idle.setTimeout(60);

//         this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

//         this.idle.onTimeout.subscribe(() => {

//             console.log('idle timeout...');

//             this.logout();
//             this.router.navigate(['/login'], { queryParams: { error: 'IDLE_TIMEOUT' } });

//         });

//         this.idle.watch();
//     }

//     private stopIdleTimeout(): void {
//         this.idle.stop();
//         this.idle.ngOnDestroy();
//     }

//     private startRefreshTokenTimer(): void {
//         this.simpleTimer.newTimer('refreshTokenTimer', 2700);
//         this.simpleTimer.subscribe('refreshTokenTimer', () => this.getRefreshToken());
//     }

//     private stopRefreshTokenTimer(): void {
//         let jobs: Array<string> = this.simpleTimer.getSubscription();
//         if (jobs != null && jobs.length > 0) {
//             for (let i = 0; i < jobs.length; i++) {
//                 this.simpleTimer.unsubscribe(jobs[i]);
//             }
//         }
//         if (this.simpleTimer.delTimer('refreshTokenTimer')) {
//             this.simpleTimer.unsubscribe('refreshTokenTimer');
//         }
//     }

//     private getRefreshToken(): void {
//         if (!this.isRefreshToken) {
//             this.isRefreshToken = true;
//             return;
//         }
//         console.log('Get refresh token...');
//         this.loginService.refreshToken().subscribe(data => {
//             let response = JSON.parse(JSON.parse(JSON.stringify(data))._body);
//             let user = this.loginService.getUser();
//             user.token = response.access_token;
//             user.refreshToken = response.refresh_token;
//             this.loginService.setUser(user);
//         }, error => {
//             this.logout();
//         }
//         );
//     }

//     private logout(): void {
//         this.expiredSession();
//         this.router.navigate(['/login'], { queryParams: { error: "EXPIRED_SESSION" } });
//     }
// }