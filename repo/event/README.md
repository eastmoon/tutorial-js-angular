# Event

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## 事件系統

+ [EventEmitter](https://angular.io/api/core/EventEmitter)
  - [What is the proper use of an EventEmitter?](https://stackoverflow.com/questions/36076700)
+ RxJS
  - [Subject](https://rxjs.dev/guide/subject)
  - [Observable](https://rxjs.dev/guide/observable)
+ 文獻
  - [Angular 中的事件發射器](https://www.delftstack.com/zh-tw/howto/angular/eventemitter-in-angular/)
  - [Component events with EventEmitter and @​Output in Angular](https://ultimatecourses.com/blog/component-events-event-emitter-output-angular-2)

在 Angular 的事件系統可分為兩個層面

+ 元件樹

使用 EventEmitter 讓元件在雙向結繫時可以反向回應事件給上級元件結繫的處理函數。

如範例 [Parent](./src/app/parent/parent.component.ts) 中在[樣板](./src/app/parent/parent.component.html) 宣告對 [Child](./src/app/child/child.component.ts) 的事件結繫並交由 ```getNotification``` 函數處理，而 Child 在自身動作發動後，藉由輸出變數的 EventEmitter 來傳遞訊息給結繫的處理函數。

+ 應用程式廣播

使用 Angular Service 與 RxJS Subject 來提供應用程式全域的廣播事件。

如[廣播範例](./src/app/bcdemo/bcdemo.component.ts)中，在其[樣板](./src/app/bcdemo/bcdemo.component.html) 宣告兩個[廣播按鈕](./src/app/bcbtn/bcbtn.component.ts)，當按鈕被點擊，對[廣播服務](./src/app/boardcast-a.service.ts)發送字串，而在範例的建構元中則對廣播服務註冊處理函數，透過 RxJS 機制讓發送字串可以交由處理函數。

註冊函數在設計時有兩點需要注意：

1. 註冊函數無法透過 Typescript 限制函數結構，因此若為非函數被註冊可能導致異常，此部分檢查應封裝於服務中
2. 註冊函數若不使用匿名函數封裝會無法與類別綁定，在未綁定情況會讓註冊函數內的 ```this``` 物件為 undefined 狀態

若將應用程式廣播運用在[動態元件繪製](../component-dynamic-loader/README.md)，則藉由事件將動態匯入函數分配至廣播放送端，元件繪製在接收端，如範例[選單](./src/app/lazy-menu/lazy-menu.component.ts)在觸發動作後對[廣播服務](./src/app/boardcast-b.service.ts)發送匯入函數給接收端處理，[面板](./src/app/lazy-panel/lazy-panel.component.ts)在收到廣播後執行匯入函數並將元件繪製到指定的 DOM 結構中。

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
