import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BoardcastBService } from '../boardcast-b.service';

@Component({
  selector: 'app-lazy-panel',
  templateUrl: './lazy-panel.component.html',
  styleUrls: ['./lazy-panel.component.scss']
})
export class LazyPanelComponent {
  // 取得頁面中的 appDynamicLazyComponentHost 樣板參考 ( Template reference ) 的視圖容器參考 ( ViewContainerRef )
  @ViewChild('appDynamicLazyComponentHost', { read: ViewContainerRef }) dynamicLazyComponentLoader:ViewContainerRef | undefined;
  //
  constructor(
    public boardcast : BoardcastBService
  ) {
    boardcast.reg((func: any) => this.processBoardcast(func));
  }
  //
  processBoardcast(func: any) {
    if ( func !== "undefined" && typeof func === "function" ) {
      func((component: any) => this.setDynamicLazyComponent(component));
    }
  }
  // 對視圖容器參考設定要建立的元件
  setDynamicLazyComponent(component: any) {
    if ( this.dynamicLazyComponentLoader !== undefined ) {
      this.dynamicLazyComponentLoader.clear();
      this.dynamicLazyComponentLoader.createComponent(component);
    }
  }
}
