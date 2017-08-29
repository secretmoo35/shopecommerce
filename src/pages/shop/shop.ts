import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShopModel } from "./shop.model";
import { ShopServiceProvider } from "./shop.service";
/**
 * Generated class for the ShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  shop: ShopModel = new ShopModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public shopServiceProvider: ShopServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
    this.getShop();
  }

  getShop() {
    this.shopServiceProvider.getHistory().then((data) => {
      console.log(data);
      this.shop = data;
    }, (error) => {
      console.error(error);
    });
  }

}
