import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AppConstants } from '../constants/app.constants';
import { NotificationUtility } from '../utilities/notification.utility';
import { User } from '../models/user';
declare var $: any;
@Component({
  selector: 'main-website',
  templateUrl: './mainwebsite.component.html',
  styleUrls: ['./mainwebsite.component.css'],
  providers: [UserService, NotificationUtility],
})
export class MainWebsiteComponent implements OnInit {
  public error: string = '';
  loginForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  ngOnInit() {
    $('.spinner').hide();
  }
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private notificationUtility: NotificationUtility) {
  }
  login() {
    this.validateAllFormFields(this.loginForm);
    if (this.loginForm.valid) {
      const object = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
        grantType: AppConstants.PASSWORD,
      };
      this.userService.login(object).subscribe(
        (data: any) => {
          localStorage.setItem('role', data.roles[0]);
          localStorage.setItem('token', JSON.stringify(data));
          localStorage.setItem('username', data.username);
          localStorage.setItem('name', data.name);

          $('#modalLoginForm').modal('hide');

          this.router.navigate(['/crm/dashboard']);
          this.notificationUtility.notify("Welcome " + data.name, "success");
        },
        error => {
          this.error = error.error.error_description;
        },
      );
    }

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onChangeField(event: any): void {
    if (this.loginForm.value.username || this.loginForm.value.password) {
      this.error = '';
    }
  }
}
