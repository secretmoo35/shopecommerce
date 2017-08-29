import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MoreModel } from "./more.model";
/*
  Generated class for the MoreServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MoreServiceProvider {

  constructor(public http: Http) {
    console.log('Hello MoreServiceProvider Provider');
  }

  getMore(): Promise<MoreModel> {
    return this.http.get('./assets/json/dashboard.json')
      .toPromise()
      .then(response => response.json() as MoreModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
