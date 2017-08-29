import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsNavPage } from './tabs-nav';
import { OrderListPage } from '../order-list/order-list';

@NgModule({
  declarations: [
    TabsNavPage,
    OrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsNavPage),
  ]
})
export class TabsNavPageModule {}
