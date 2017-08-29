import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the OrderListViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'order-list-view',
  templateUrl: 'order-list-view.html'
})
export class OrderListViewComponent {
  @Input() items: Array<any>;
  @Output() order: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  selectItem(item) {
    this.order.emit(item);
  }

}
