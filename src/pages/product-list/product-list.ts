import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductListModel } from "./product-list.model";
import { ProductServiceProvider } from "./product.service";

/**
 * Generated class for the ProductListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  products: ProductListModel = new ProductListModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public productServiceProvider: ProductServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
    this.getProduct();
  }

  getProduct() {
    this.productServiceProvider.getProduct().then((data) => {
      console.log(data);
      this.products = data;
    }, (error) => {
      console.error(error);
    });
  }

  selectedItem(item){
    console.log(item);
  }

}
