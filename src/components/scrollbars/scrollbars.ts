import { Component, ViewChild, Input } from '@angular/core';
import { Slides, LoadingController } from "ionic-angular";

/**
 * Generated class for the ScrollbarsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'scrollbars',
  templateUrl: 'scrollbars.html'
})
export class ScrollbarsComponent {
  @Input() items: Array<any>;
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any;
  selectPage: boolean = false;

  constructor(public loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create();
    loading.present();
    setTimeout(() => {
      this.tabs = '0';
      loading.dismiss();
    }, 1000);
  }
  getPage(length) {
    let repeat = [];
    for (var i = 0; i < length; i++) {
      repeat.push(i);
    }
    return repeat;
  }
  // function page slide
  selectTab(index) { // selected page on ion-segment 
    this.pageSlider.slideTo(index);
    this.selectPage = true;
  }
  changeWillSlide($event) { // change slide page on slideview
    this.tabs = $event._snapIndex.toString();
    this.scrollbars();
  }
  scrollbars() { //animation slide delay && auto fucus ion-segment 
    let element = document.getElementById("scrollable");
    let scrollLeft = this.tabs * 100;
    let scrollInterval = setInterval(() => {
      if (element.scrollLeft < scrollLeft) {
        element.scrollLeft += 1;
        scrollLeft = this.tabs * 100;
      } else {
        element.scrollLeft -= 1;
        scrollLeft = this.tabs * 100;
      }
      let checked = scrollLeft - element.scrollLeft;
      if (checked > 0) {
        if (checked <= 100 || this.selectPage) {
          this.selectPage = false;
          // console.log('clear');
          clearInterval(scrollInterval);
        }
      } else if (this.tabs === "0" && checked === 0) {
        // console.log('clear');
        clearInterval(scrollInterval);
      } else {
        checked++;
      }
    }, 1);
  }
  // function end page slide

  selectedItem(e) {
    console.log(e);
  }

  touchstart(e) {
    this.pageSlider.lockSwipes(true);
    // console.log('touchstart', e);
  }

  touchend(e) {
    this.pageSlider.lockSwipes(false);
    // console.log('touchend', e);
  }
}
