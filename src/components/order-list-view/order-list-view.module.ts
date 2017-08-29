import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { OrderListViewComponent } from './order-list-view';

@NgModule({
  declarations: [
    OrderListViewComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    OrderListViewComponent
  ]
})
export class OrderListViewComponentModule {}
