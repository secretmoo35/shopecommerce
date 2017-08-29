import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HistoryListViewComponent } from './history-list-view';

@NgModule({
  declarations: [
    HistoryListViewComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    HistoryListViewComponent
  ]
})
export class HistoryListViewComponentModule {}
