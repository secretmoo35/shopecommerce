import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ProductListViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'product-list-view',
  templateUrl: 'product-list-view.html'
})
export class ProductListViewComponent {
  @Input() items: Array<any>;
  @Output() item: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('load data');
  }

  filtterItems(text) {
    console.log(text);
  }

  selectItem(item) {
    this.item.emit(item);
  }

}
