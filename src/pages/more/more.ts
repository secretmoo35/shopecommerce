import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MoreModel } from "./more.model";
import { MoreServiceProvider } from "./more.service";
/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})

export class MorePage {

  datas: MoreModel = new MoreModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public moreServiceProvider: MoreServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
    this.getData();
  }
  getData() {
    this.moreServiceProvider.getMore().then((data) => {
      this.datas = data;
    }, (error) => {
      console.error(error);
    });
  }

}
