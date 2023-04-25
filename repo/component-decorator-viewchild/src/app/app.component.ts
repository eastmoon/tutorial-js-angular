import { Component, ViewChild, ViewChildren, ViewContainerRef, ElementRef, TemplateRef, QueryList } from '@angular/core';
import { ColorSampleComponent } from './color-sample/color-sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-decorator-viewchild';
  public singles: string[] = [
      'Mouse In a Maze',
      'Private Life',
      'Suspended Animation'
    ];

  // 取得頁面中的 titleRef 樣板參考 ( Template reference ) 的元素參考 ( ElementRef )
  @ViewChild('titleRef') titleRef: ElementRef | undefined
  // 取得頁面中的 primaryColorSample 樣板參考 ( Template reference ) 的 ColorSampleComponent 元件
  @ViewChild('primaryColorSample') sampleComp: ColorSampleComponent | undefined ;
  // 取得頁面中的 primaryColorSample 樣板參考 ( Template reference ) 的元素參考 ( ElementRef )
  @ViewChild('primaryColorSample', {read: ElementRef}) sampleCompRef: ElementRef | undefined;
  // 取得頁面中的 singleName 樣板參考 ( Template reference ) 的所有元素參考 ( ElementRef )
  @ViewChildren("singleName") singlesRef: QueryList<ElementRef> | undefined;
  // 取得頁面中的 sayHelloTemplate 樣板參考 ( Template reference ) 的樣板參考 ( TemplateRef )
  @ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate:TemplateRef<any> | undefined;

  // 建構函數，取回目前元件視圖容器參考
  constructor(
    private vref:ViewContainerRef
  ) { }

  // ViewChild and ViewChildren have value after view init.
  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    // 顯示視圖如慶參考
    console.log(this.vref);
    // 顯示 titleRef 與實際 HTML 元素物件
    console.log(this.titleRef);
    console.log(this.titleRef?.nativeElement);
    // 顯示 sampleComp 元件與內部 color 變數
    console.log(this.sampleComp);
    console.log(this.sampleComp?.color);
    // 顯示 sampleCompRef 與實際 HTML 元素物件
    console.log(this.sampleCompRef);
    console.log(this.sampleCompRef?.nativeElement);
    // 顯示 singlesRef 與列表中所有元素的實際 HTML 元素物件
    console.log(this.singlesRef);
    console.log(this.singlesRef?.length);
    this.singlesRef?.forEach(element => {
      console.log(element.nativeElement);
    });
    // 顯示 sayHelloTemplate 與實際 HTML 元素物件
    // 並將 sayHelloTemplate 嵌入當前的元件試圖容器
    console.log(this.sayHelloTemplate);
    console.log(this.sayHelloTemplate?.elementRef.nativeElement);
    if ( this.sayHelloTemplate !== undefined ) {
       this.vref.createEmbeddedView(this.sayHelloTemplate);
    }
  }
}
