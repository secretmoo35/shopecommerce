import { Component, Input, Output } from '@angular/core';

/**
 * Generated class for the HistoryListViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'history-list-view',
  templateUrl: 'history-list-view.html'
})
export class HistoryListViewComponent {
  @Input() items: Array<any>;
  text: string;

  constructor() {
  }

}
