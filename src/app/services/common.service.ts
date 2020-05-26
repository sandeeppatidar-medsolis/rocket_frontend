import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { UriConstants } from '../constants/uri.constants';


@Injectable()
export class CommonService {
  constructor(private http: CustomHttpService) {}

delete(url: string) {
    return this.http.delete(url);
  }
}
