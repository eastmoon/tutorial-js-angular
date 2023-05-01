# Directives

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## 建立開發工作區

+ 使用 NG 開發環境建立工作區
```
angular ng
```

+ 執行專案建立指令
```
ng new directives --skip-git --skip-install --style=scss --interactive=false
```
> 由於不需要建立路由，因此移除 ```--routing```

+ 使用 DEV 開發環境執行專案並啟動開發伺服器
```
angular dev --repo=directives
```

Angular CLI 運用於建立應用程式，而開發伺服器則是檢視修正內容的即時呈現，兩者會是需要同時啟動的服務；即使不使用 Docker 啟動開發容器，執行其他開發工具也會同時啟動多個命令視窗來檢閱。

## 指令 ( directive )

+ [Built-in directives](https://angular.io/guide/built-in-directives)
  - [Attribute directives](https://angular.io/guide/attribute-directives)
  - [Structural directives](https://angular.io/guide/structural-directives)
+ 文獻
  - [Attribute Directives](https://ithelp.ithome.com.tw/articles/10195201)
  - [使用attribute directive擴充元件屬性](https://fullstackladder.dev/blog/2017/02/14/angular-tutorial-15-directive-intro/)
  - [自己的樣板語法自己做 (Structural Directives)](https://fullstackladder.dev/blog/2018/10/31/mastering-angular-16-custom-structural-directives/)
  - [Getting Started with Custom Structural Directives in Angular](https://www.thisdot.co/blog/getting-started-with-custom-structural-directives-in-angular)

在 Angular Directive 共分為三個型態：

+ Components
元件，其用途是將 HTML 元素 ( Element )，以元件所管理的 HTML 替代其內容、CSS 增添其樣式、JS 管理其動作。

+ Attribute Directives
屬性指令，其用途是對 HTML 元素指定的屬性，以屬性指令的內容來對元素的樣式、行為進行調整；例如 Angular 預設的 [NgClass](https://angular.io/guide/built-in-directives#ngClass)、[NgStyle](https://angular.io/guide/built-in-directives#ngstyle)、[NgModel](https://angular.io/guide/built-in-directives#ngModel)

+ Structural Directives
結構指令，其用途是對 HTML 元素指定的屬性，以結構指令的邏輯調整元素或元素所包含的 DOM 狀態；例如 Angular 預設的 [NgIf](https://angular.io/guide/built-in-directives#ngIf)、[NgFor](https://angular.io/guide/built-in-directives#ngFor)、[NgSwitch](https://angular.io/guide/built-in-directives#ngSwitch)、[NgContainer](https://angular.io/guide/built-in-directives#hosting-a-directive-without-a-dom-element)

基本上 Strcutural Directives 本身結構與 Attribute Directive 相同，其最大差異是可以使用 [```*``` 語法糖](https://angular.io/guide/structural-directives#structural-directive-syntax-reference)，結由這語法糖，可以再輸入的變數中增加邏輯式來填寫資料，從而改變 Directive 中各輸入變數獲得的資料。

此外，```*``` 語法糖的變數名縮減特性，讓 ```ngFor``` 的結構中，```of``` 變數等於實際宣告 ```@Input ngForOf``` 變數，相關特性可以參考範例文件。

此外，依據不同 Angular 版本，Directive 對變數獲得有順序性，在不同範本的做法並不相同，依據現今範本則需宣告 ```onInit``` 才可確保所有變數獲得後才正式執行初始函數。

## 範例

+ Attribute Directives：NgClass、NgStyle、NgModel
+ Custom Attribute Directives：[highlight directive](./src/app/directives/highlight.directive.ts)
+ Structural Directives：NgIf、NgFor、NgSwitch、NgContainer
+ Custom Structural Directives：[template outlet directive](./src/app/directives/template-outlet.directive.ts)

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
