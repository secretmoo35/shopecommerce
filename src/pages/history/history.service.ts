import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HistoryModel } from "./history.model";
/*
  Generated class for the HistoryServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HistoryServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HistoryServiceProvider Provider');
  }

  getHistory(): Promise<HistoryModel> {
    return this.http.get('./assets/json/history.json')
      .toPromise()
      .then(response => response.json() as HistoryModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
