import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HistoryModel } from "./history.model";
import { HistoryServiceProvider } from "./history.service";
/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  history: HistoryModel = new HistoryModel();
  historyTab: string = "receive";
  constructor(public navCtrl: NavController, public navParams: NavParams, public historyServiceProvider: HistoryServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.getHistory();
  }

  getHistory() {
    this.historyServiceProvider.getHistory().then((data) => {
      console.log(data);
      this.history = data
    }, (error) => {
      console.error(error);
    });
  }

}
