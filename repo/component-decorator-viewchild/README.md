# ComponentDecoratorViewchild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## 建立開發工作區

+ 使用 NG 開發環境建立工作區
```
angular ng
```

+ 執行專案建立指令
```
ng new component-decorator-viewchild --skip-git --skip-install --style=scss --interactive=false
```
> 由於不需要建立路由，因此移除 ```--routing```

+ 使用 DEV 開發環境執行專案並啟動開發伺服器
```
angular dev --repo=component-decorator-viewchild
```

Angular CLI 運用於建立應用程式，而開發伺服器則是檢視修正內容的即時呈現，兩者會是需要同時啟動的服務；即使不使用 Docker 啟動開發容器，執行其他開發工具也會同時啟動多個命令視窗來檢閱。

## ViewChild 裝飾

+ [Angular @ViewChild: In-Depth Explanation (All Features Covered)](https://blog.angular-university.io/angular-viewchild/)
    - [ViewChild - @angular/core](https://angular.io/api/core/ViewChild#usage-notes)
    - [ViewChildren - @angular/core](https://angular.io/api/core/ViewChildren)
    - [TemplateRef - @angular/core](https://angular.io/api/core/TemplateRef)
    - [ElementRef - @angular/core](https://angular.io/api/core/ElementRef)
    - [ViewContainerRef - @angular/core](https://angular.io/api/core/ViewContainerRef)
+ 文獻
    - [Angular ViewChild 與 ViewChildren 介紹](https://ithelp.ithome.com.tw/articles/10276814)
    - [Working With the Angular ViewChildren Directive](https://www.htmlgoodies.com/javascript/angular-viewchildren-directive/)
    - [Component - ViewChild](https://worldline.github.io/angular-training/components/#viewchild)
    - [How To Use ViewChild in Angular to Access a Child Component, Directive, or DOM Element](https://www.digitalocean.com/community/tutorials/angular-viewchild-access-component)
    - [Understanding ViewChildren, ContentChildren, and QueryList in Angular](https://netbasal.com/896b0c689f6e)

Angular 元件構成共分三個部分，HTML、CSS、JS，分別對應 ```*.component.html```、```*.component.scss```、```*.component.ts```，原則上框架藉由控制 JS 部分，配合 CSS 從而完善 HTML 內容；然而，在實務中除了指定的在 HTML 的內容外，會有諸多互動、動態都是藉由事件觸發 JS 行為後反饋至畫面，而這反饋簡單可是透過雙向結繫的數據變更，但更可能是替換部分視圖區域的內容。

因此，藉由 Angular 的 ViewChild、ViewChildren 就是取回對當前元件視圖中 HTML 元素的存取參考，這其中包括：

+ ElementRef：用於操控當前 HTML 元素的參考
+ TemplateRef：用於取得當前 HTML 中 ```ng-template``` 元素的內容，此元素中的內容並不會顯示於畫面，而是作為內容樣板供 Angular 運用
+ ViewContainerRef：用於操控當前元件的視圖參考，從元件的建構指定注入，可用於操控元件視圖整體

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
