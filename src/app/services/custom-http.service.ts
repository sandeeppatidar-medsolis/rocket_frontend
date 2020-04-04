import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppUtility } from '../utilities/app.utility';
import { Token } from '../models/token';
import { AppConstants } from '../constants/app.constants';

@Injectable()
export class CustomHttpService {
  postLogins(endPoint: string, object: any) {
    const url = environment.API_BASE_URL + endPoint;
    return this.http.post(url, object, this.getOptions());
  }
  private token: Token;
  constructor(private http: HttpClient, private router: Router) {
    this.token = JSON.parse(localStorage.getItem(AppConstants.TOKEN));
  }

  get(endPoint: string) {
    const url = environment.API_BASE_URL + endPoint;
    return this.http.get(url, this.getOptions());
  }

  delete(endPoint: string) {
    const url = environment.API_BASE_URL + endPoint;
    return this.http.delete(url, this.getOptions());
  }

  post(endPoint: string, object: any) {
    const url = environment.API_BASE_URL + endPoint;
    return this.http.post(url, object, this.getOptions());
  }

  put(endPoint: string, object: any) {
    const url = environment.API_BASE_URL + endPoint;
    return this.http.put(url, object, this.getOptions());
  }

  postLogin(endPoint: string, object: any) {
    const url = environment.API_BASE_URL + endPoint;
    return this.http.post(url, this.getLoginParam(object), this.getOptionsLogin());
  }

  getLogin(endPoint: string) {
    const url = environment.API_BASE_URL + endPoint;
    return this.http.get(url, this.getOptionsLogin());
  }

  getForgot(endPoint: string) {
    const url = environment.API_BASE_URL + endPoint;
    return this.http.get(url, this.getOptions());
  }

  postMultiPart(endPoint: string, object: any) {
    const formData: any = new FormData();
    formData.append('file', object);
    const url = environment.API_BASE_URL + endPoint;
    return this.http.post(url, formData, this.getOptionsFormMultipart());
  }

  getOptions() {
    this.token = JSON.parse(localStorage.getItem(AppConstants.TOKEN));
    const accessToken = (this.token === undefined && this.token === null) ? '' : this.token.access_token;
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
      }),
    };
  }

  getOptionsLogin() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'authorization': 'Basic ZGV2Z2xhbi1jbGllbnQ6ZHVy',
      }),
    };
  }

  getLoginParam(obj: any) {
    return new HttpParams({
      fromObject: {
        username: obj.username,
        password: obj.password,
        grant_type: obj.grantType,
        type: 'DEVICE',
      },
    });
  }
  getOptionsFormMultipart() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token.access_token,
      }),
    };
  }

  public getUser(): Token {
    const token = JSON.parse(localStorage.getItem(AppConstants.TOKEN));
    if (token !== undefined && token != null) {
      this.token = token;
    } else {
      this.token = new Token();
    }
    return (AppUtility.isEmptyObject(this.token) ||
      AppUtility.isEmptyString(this.token.access_token)) ? new Token() : token;
  }

  public isLoggedIn(): boolean {
    this.token = this.getUser();
    if (this.token.access_token !== undefined) {
      return (AppUtility.isEmptyObject(this.token) || AppUtility.isEmptyString(this.token.access_token)) ?
        false : true;
    } else {
      return false;
    }
  }
  public isAdmin(): boolean {
    const systemUser = JSON.parse(localStorage.getItem('systemUser'));
    if (systemUser !== undefined) {
      return systemUser.admin;
    }
    return false;
  }

}
