import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ProductListModel } from "./product-list.model";
/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProductServiceProvider Provider');
  }

  getProduct(): Promise<ProductListModel> {
    return this.http.get('./assets/json/product.json')
      .toPromise()
      .then(response => response.json() as ProductListModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
