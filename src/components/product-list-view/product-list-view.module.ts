import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProductListViewComponent } from './product-list-view';

@NgModule({
  declarations: [
    ProductListViewComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ProductListViewComponent
  ]
})
export class ProductListViewComponentModule {}
