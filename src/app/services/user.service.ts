import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { UriConstants } from '../constants/uri.constants';


@Injectable()
export class UserService {
  getAllByCompanyId(url: string) {
      return this.http.get(UriConstants.USER_API + UriConstants.GET_ALL_COMPANY_ID + url);

  }

  constructor(private http: CustomHttpService) {

  }

  savePassword(obj) {
    return this.http.postLogins(UriConstants.USER_API + '/save_password', obj);
  }

  validatePasswordLink(username) {
    return this.http.getLogin(UriConstants.USER_API + '/validate_password_link?username=' + username);
  }

  login(user: any) {
    return this.http.postLogin(UriConstants.OAUTH + UriConstants.TOKEN, user);
  }

  forgot(email: string) {
    return this.http.getForgot(UriConstants.USER_API + UriConstants.FORGOT + '?username=' + email);
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  save(user: any) {
    return this.http.post(UriConstants.USER_API + UriConstants.CREATE, user);
  }

  getAll(url: string) {
    return this.http.get(UriConstants.USER_API + UriConstants.GET_ALL + url);
  }

  getAllRole() {
    return this.http.get(UriConstants.USER_API + UriConstants.ROLE + UriConstants.GET_ALL_ROLE_LIST);
  }

  getAllRoleList(url: string) {
    return this.http.get(UriConstants.USER_API + UriConstants.ROLE + UriConstants.GET_ALL + url);
  }

  saveRole(role: any) {
    return this.http.post(UriConstants.USER_API + UriConstants.CREATE, role);
  }

  get(id: string) {
    return this.http.get(UriConstants.USER_API + UriConstants.SLASH + id);
  }
}
