# Navigation application

+ [Adding navigation](https://angular.tw/start/start-routing)
+ [Add navigation with routing](https://angular.io/tutorial/tour-of-heroes/toh-pt5)
    - [Angular Navigation](https://ionicframework.com/docs/angular/navigation)
    - [Angular Router: A Complete Guide](https://blog.angular-university.io/angular-2-router-nested-routes-and-nested-auxiliary-routes-build-a-menu-navigation-system/)

**『Open URL allows direct access to any page on a web site. Back and Forward provide a bidirectional backtracking capability. The History menu allows random access to pages visited during the current session, and Bookmark or Favorites enables users to save the location of specific pages for future reference. Web browsers also go beyond the Back button to support a “bread crumbs” feature by color-coding hypertext links. By default, unvisited hypertext links are one color and visited hypertext links are another. This feature helps users see where they have and haven’t been and can help them to retrace their steps through a web site.』**
> From [Browser Navigation Features](https://www.oreilly.com/library/view/information-architecture-for/0596000359/ch07s03.html)

當使用者透過瀏覽器閱覽網站時，其最主要的操作便是導覽 ( Navigation )，透過網址開啟網頁、歷史記錄追蹤前後頁、記錄喜好頁面等行為，看似對瀏覽器操作，實則每個網址都對應到一個頁面；傳統的 [Multi-Page Apps ( MPA )](https://blog.bitsrc.io/587030b0f37b) 則每給網址對應一個獨立且不相關的網頁，但此種設計在導覽都需要等待瀏覽器重新載入頁面並讓瀏覽的情境出現空白的頁面讓用戶體感中斷，而這也促成 [Single-page application ( SPA )](https://en.wikipedia.org/wiki/Single-page_application) 的設計概念，也是現今主要前端 ( Frontend ) 框架都依循的設計概念；對於 [Single-page application vs. multiple-page application](https://medium.com/@NeotericEU/2591588efe58) 有何區別可以參考此篇文獻。

![Single-page application vs. multiple-page application](https://miro.medium.com/v2/resize:fit:4800/1*TgDJlZWCvSYz7486niWz3w.gif)
> From [When to use Multi-Page Apps?](https://blog.bitsrc.io/587030b0f37b)

然而，若 SPA 要優化 MPA 的導覽缺陷，就必須把交由瀏覽器處理的導覽過程轉移至框架中，並以網址來控制當前頁面應該呈現何專案 ( Project ) 或元件 ( Component )，而這其中就要利用名為路由 ( Router ) 的模組來協助瀏覽設計完成。

本專案基於[服務應用程式](../service/README.md)設計後續功能。

## 建立路由 ( Router ) 模組

建立導覽所需的路由模組共有兩個方式：

+ 建立工作區時建立
```
ng new <workspace-name> --routing
```

+ 透過生成器產生路由模塊
```
ng generate module app-routing --flat --module=app
```

第一種方式是在規劃工作區時便指定產生路由模組，第二種方式是倘若工作區已經完成，可以使用此方式產生路由模組並放置在 ```/app``` 目錄下方。

## 路由設定

構成路由可以參考 [Router API](https://angular.io/api/router) 文件，其中關乎設定共有三個主要類別

+ [RouterModule](https://angular.tw/api/router/RouterModule)，提供對路由設定的模組
    - [Routes](https://angular.io/api/router/Routes)，路由 ( [Route](https://angular.io/api/router/Route) ) 內容矩陣
    - [RouterOutlet](https://angular.tw/api/router/RouterOutlet)，提供 ```router-outlet``` Directives，宣告於樣板中，讓 Router 動態繪製路由元件的顯示區

在使用 RooterModule 以產生專案所需的路由模塊 ( AppRoutingModule ) 時，是使用 NgModule 來匯入並匯出自 RooterModule 產生的內容，但對於產生路由模組共有兩個指令：

+ ```forRoot()``` 方法會建立一個 NgModule，其中包含所有指令、給定的路由以及 Router 服務本身。
+ ```forChild()``` 方法會建立一個 NgModule，其中包含所有指令和給定的路由，但不包括 Router 服務。

依據文獻所述，```forRoot``` 是用於初始化應用程式的部分，以此確保應用程式只多擁有一個 Router 服務，若使用註冊或延遲載入的子模組則透過 ```forChild```，對於動態載入與程式碼分隔留待後續討論。

## 建立儀表板並預設路由

路由設計本身考量是多個網址，對此設計另外一個儀表板模組來呈現部分的資料。

```
ng generate component dashboard
```

在完成儀表板元件後，對 ```Routes``` 矩陣設定一個預設路由路徑，使用戶在以根網址開啟頁面時自動路由轉導至儀表板頁面。

```
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
```

## 導覽頁籤

在完成複數頁面後，就可以設計導覽選項以此來切換頁面，在此使用 [<nav>](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/nav) 與 [RouterLink](https://angular.tw/api/router/RouterLink) 來做出路由選項。

```
<nav>
  <a routerLink="/dashboard">Dashboard</a>
  <a routerLink="/heroes">Heroes</a>
</nav>
```

使用 ```routerLink```  Directives 讓超連結 ```<a>``` 在執行時觸發路由模組運作，已完成導覽動作。

## 導覽細節

此時，設計第三個頁面，用於呈現資訊細節與修改內容，但此頁面不存在於導覽頁籤中，使用其他頁面內的選項來發動 ```routerLink```。

```
ng generate component hero-detail
```

對於發動 ```routerLink``` 方式共有兩種：

+ Dashboard 利用 routerLink 轉場

這種方式是透過樣板設計，在元件生成畫面時同時指定應該導覽的路由內容。

+ Heroes 利用 navigate 函數轉場
    - [Calling the Angular router in TypeScript](https://stackoverflow.com/questions/41987143)
        + [Router.navigate()](https://angular.io/api/router/Router#navigate)，提供導覽與操作的 NgModule，在此使用 ```navigate()``` 方法
        + [ActivatedRoute](https://angular.tw/api/router/ActivatedRoute)，提供目前導覽的資訊
        + [NavigationExtras](https://angular.io/api/router/NavigationExtras)，提供修改導覽方式的選項參數，範例使用來指定要導覽的根網址資訊

這種方式是透過 Script 執行 ```router.navigate()``` 來進行觸發導覽，這樣設計優點是確保導覽發生前可預先做處理，不論用於執行判斷、動畫呈現、資料處理皆可。

## 取得路由參數

由於呈現資訊細節的第三頁面不存在於導覽頁籤上，若要回到頁籤的內容通常可以用頁籤，但同時也可以透過[瀏覽器歷史記錄](https://en.wikipedia.org/wiki/Web_browsing_history)來回到上個網址。

+ [@angular/common - Location](https://angular.io/api/common/Location)，提供對瀏覽器網址的操作。

## 回前頁

# Angular operation document

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

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
