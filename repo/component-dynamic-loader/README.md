# ComponentDynamicLoader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## 建立開發工作區

+ 使用 NG 開發環境建立工作區
```
angular ng
```

+ 執行專案建立指令
```
ng new component-dynamic-loader --skip-git --skip-install --style=scss --interactive=false
```
> 由於不需要建立路由，因此移除 ```--routing```

+ 使用 DEV 開發環境執行專案並啟動開發伺服器
```
angular dev --repo=component-dynamic-loader
```

Angular CLI 運用於建立應用程式，而開發伺服器則是檢視修正內容的即時呈現，兩者會是需要同時啟動的服務；即使不使用 Docker 啟動開發容器，執行其他開發工具也會同時啟動多個命令視窗來檢閱。

## 動態元件繪製

+ [動態元件載入器](https://angular.tw/guide/dynamic-component-loader)

基於對 Angular 框架的解析，其元件對於 DOM 結構的動態產生，應是基於樣板中宣告式的元素對應依賴元件列表，在確認元素存在時，框架將元件、命令等可注入類別繪製於目標元素所在位置；這過程與物件導向的概念其差異在於，類別 ( Class ) 與物件 ( Object ) 的運用方式不同，因此，在 Angular 可以宣告類別，但產生物件實體卻需透過框架執行，這其中共有以三種方式來讓元件生成 DOM ：

+ 宣告式，在樣板中宣告元件對應的 selector 名稱，例如 ```<app-root></app-root>```
+ 指令式，在樣板中透過結構指令 ( Structural Directives ) 產生，例如 ```ngComponentOutlet```
+ 函數生成式，透過 ViewContainerRef 的函數將指定的類別繪製於容器指向的參考區域，例如 ```createEmbeddedView```、```createComponent```

在透過上述方式產生 DOM 實體後與 ViewChild 配合，對在介面上已經存在的物件是可取回其操作參考變數。

這樣的設計方式與物件導向的互動系統其差異在於，經由 ```new``` 句型將類別轉換成物件，其後再依據物件填補畫面，但 Angular 的框架運作是反過來，需先產生畫面，才能取回對應的物件實體；若從物件導向觀念來解釋 Angular 的物件存取有些冗餘步驟，可就 DOM 文件結構來說並非問題，此部分也由於 Angular 可取回的並非僅有元件實體，也包括 DOM 文件與元素，這樣的兼容設計也造就 Angular 的結構保留著 Pure JavaScript 對 DOM 的文件處理觀念，因此，用純粹物件導向概念來看待 Angular 框架會有所不適。

對於前述的動態元件載入器，共有兩個範本：

+ [動態元件載入器](./src/app/dynamic-loader/dynamic-loader.component.ts)
此為標準範例，基於 Structural Directives 的 ```ngComponentOutlet``` 與 ViewContainerRef 的 ```createComponent``` 皆嘗試設計，並梳理其差異。

+ [動態匯入元件載入器](./src/app/dynamic-loader/dynamic-loader.component.ts)
基於 ViewContainerRef 的 ```createComponent``` 設計，並增加元件需執行才匯入分離的程式。

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
