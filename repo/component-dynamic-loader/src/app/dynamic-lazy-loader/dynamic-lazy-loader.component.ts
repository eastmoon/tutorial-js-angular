import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-lazy-loader',
  templateUrl: './dynamic-lazy-loader.component.html',
  styleUrls: ['./dynamic-lazy-loader.component.scss']
})
export class DynamicLazyLoaderComponent {
    // 宣告動態匯入繪製元件所需變數與匯入函數列表
    interval2: number|undefined;
    currentLazyItemIndex: number = -1;
    lazyItems = [
      () => {import(`../component-lazy-a/component-lazy-a.component`).then(({ComponentLazyAComponent}) => {this.setDynamicLazyComponent(ComponentLazyAComponent)})},
      () => {import(`../component-lazy-b/component-lazy-b.component`).then(({ComponentLazyBComponent}) => {this.setDynamicLazyComponent(ComponentLazyBComponent)})},
      () => {import(`../component-lazy-c/component-lazy-c.component`).then(({ComponentLazyCComponent}) => {this.setDynamicLazyComponent(ComponentLazyCComponent)})},
    ]
    // 取得頁面中的 appDynamicLazyComponentHost 樣板參考 ( Template reference ) 的視圖容器參考 ( ViewContainerRef )
    @ViewChild('appDynamicLazyComponentHost', { read: ViewContainerRef }) dynamicLazyComponentLoader:ViewContainerRef | undefined;
    // Declare lifecycle hook
    ngOnInit(): void {
      // 啟動定時器，以此觸發切換動態匯入函數，並於匯入後繪製元件
      this.interval2 = setInterval(() => {
        this.currentLazyItemIndex = (this.currentLazyItemIndex + 1) % this.lazyItems.length;
        this.lazyItems[this.currentLazyItemIndex]();
      }, 2000);
    }
    // 對視圖容器參考設定要建立的元件
    setDynamicLazyComponent(component: any) {
      if ( this.dynamicLazyComponentLoader !== undefined ) {
        this.dynamicLazyComponentLoader.clear();
        this.dynamicLazyComponentLoader.createComponent(component);
      }
    }
}
