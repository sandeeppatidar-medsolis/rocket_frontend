import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { UriConstants } from '../constants/uri.constants';


@Injectable()
export class RoleService {
  constructor(private http: CustomHttpService) {}

getAllRoleList(url: string) {
    return this.http.get(UriConstants.ROLE_API + UriConstants.GET_ALL + url);
  }

  saveRole(role: any) {
    return this.http.post(UriConstants.ROLE_API + UriConstants.CREATE, role);
  }

}
