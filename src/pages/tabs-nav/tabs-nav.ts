import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { OrderListPage } from "../order-list/order-list";
import { ProductListPage } from "../product-list/product-list";
import { HistoryPage } from "../history/history";
import { ShopPage } from "../shop/shop";
import { MorePage } from "../more/more";

/**
 * Generated class for the TabsNavPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabs-nav',
  templateUrl: 'tabs-nav.html'
})
@IonicPage()
export class TabsNavPage {

  orderListRoot = OrderListPage
  productListRoot = ProductListPage
  historyRoot = HistoryPage
  shopRoot = ShopPage
  moreRoot = MorePage


  constructor(public navCtrl: NavController) {}

}
