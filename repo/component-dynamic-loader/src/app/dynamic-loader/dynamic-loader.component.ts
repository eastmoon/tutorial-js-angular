import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentAComponent } from '../component-a/component-a.component';
import { ComponentBComponent } from '../component-b/component-b.component';
import { ComponentCComponent } from '../component-c/component-c.component';

@Component({
  selector: 'app-dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.scss']
})
export class DynamicLoaderComponent {
  // 宣告動態繪製元件所需變數與元件列表
  interval1: number|undefined;
  currentItemIndex: number = -1;
  items = [ComponentAComponent, ComponentBComponent, ComponentCComponent];
  // 取得頁面中的 appDynamicComponentHost 樣板參考 ( Template reference ) 的視圖容器參考 ( ViewContainerRef )
  @ViewChild('appDynamicComponentHost', { read: ViewContainerRef }) dynamicComponentLoader:ViewContainerRef | undefined;
  // Declare lifecycle hook
  ngOnInit(): void {
    // 啟動定時器，以此觸發切換動態繪製
    this.interval1 = setInterval(() => {
      this.currentItemIndex = (this.currentItemIndex + 1) % this.items.length;
      this.setDynamicComponent();
    }, 3000);
  }
  // 對視圖容器參考設定要建立的元件
  setDynamicComponent() {
    if ( this.dynamicComponentLoader !== undefined ) {
      this.dynamicComponentLoader.clear();
      this.dynamicComponentLoader.createComponent(this.items[this.currentItemIndex]);
    }
  }
}
