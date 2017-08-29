import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrderModel } from "./order-list.model";
import { OrderServiceProvider } from "./order.service";
/**
 * Generated class for the OrderListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {
  orders: OrderModel = new OrderModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public orderServiceProvider: OrderServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderListPage');
    this.getOrder();
  }

  getOrder() {
    this.orderServiceProvider.getOrder().then((data) => {
      console.log(data);
      this.orders = data;
    }, (error) => {
      console.error(error);
    });
  }

  selectedOrder(item){
    console.log(item);
  }

}
