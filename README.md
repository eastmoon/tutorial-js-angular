# JavaScript Library Angular

## 執行

本專案使用的命令介面僅適用 Windows 環境且運行於 Docker 環境。

+ 進入 ng 管理模式
```
angular ng
```

此模式啟用 Angular 開發環境並且引入 ```/repo``` 目錄至工作目錄，以便使用 Angular CLI 建立專案

+ 進入專案開發模式
```
angular dev --repo=<repo-name>
```

此模式啟用 Angular 開發環境並且引入 ```/repo/<repo-name>``` 目錄至工作目錄，以便 ```npm build``` 等操作產出的內容可以匯出至 ```/cache``` 目錄

## 範例

本專案執行的範例：

+ [Angular CLI 建立與管理專案](./repo/readme.md)
+ Angular 專案特性
    - [基礎專案](./repo/base/README.md)，執行 ```angular dev --repo=base```
    - [服務專案](./repo/service/README.md)，執行 ```angular dev --repo=service```
    - [導覽專案](./repo/navigation/README.md)，執行 ```angular dev --repo=navigation```
    - [編譯設定](./repo/build/README.md)，執行 ```angular dev --repo=build```
    - [動態載入](./repo/build-lazy/README.md)，執行 ```angular dev --repo=build-lazy```
+ Angular 應用設計
    - [Directive](./repo/directives/README.md)，執行 ```angular dev --repo=directives```
    - Component
        + [Lifecycle](./repo/component-lifecycle/README.md)，執行 ```angular dev --repo=component-lifecycle```
        + [Input & Output](./repo/component-decorator-io/README.md)，執行 ```angular dev --repo=component-decorator-io```
        + [ViewChild](./repo/component-decorator-viewchild/README.md)，執行 ```angular dev --repo=component-decorator-viewchild```
        + [Dynamic Component Loader](./repo/component-dynamic-loader/README.md)，執行 ```angular dev --repo=component-dynamic-loader```
    - [Event](./repo/event/README.md)，執行 ```angular dev --repo=event```

## Angular 框架概念

Angular 專案的互動介面構成主要由的元件 ( Component ) 與指令 ( Directive ) 構成，其原理是基於 selector 來尋找對應處理的目標，用相依注入的概念來解釋，即是 Angular 將元件或指令注入 DOM 元素中。

這樣的設計概念，與物件導向的 React 框架相反，其差異之處在於：

**『React 是先存在類別，其後由物件構成 DOM；Angular 則是先存在 DOM，其後由元件注入 DOM 結構、樣式、行為』**

這樣的差異，在解讀程式或設想結構會有不同，雖然 Angular 遵守著物件導向、模組化設計專案，但對於 DOM 的所有元素是注入關係並非生成關係，因此，觸發元件的生命週期方是不存在使用 ```new``` 的方式，而是基於替換發生。

嚴格來說，Angular 的框架是奠基於 DOM 運作原理之上，以更加嚴謹與物件化的框架管理程式、樣式，也可以解釋是更加完善的 jQuery。

## 文獻

+ Introduction
    - [Angular 2 開發框架介紹](https://blog.miniasp.com/post/2016/07/26/Introduction-to-Angular-2)
    - [What is Angular?](https://angular.tw/guide/what-is-angular)
    - [Setting up the local environment and workspace](https://angular.io/guide/setup-local)
+ Startup
    - [Getting started with Angular](https://angular.tw/start)
        - project structure
            + [Workspace and project file structure](https://angular.tw/guide/file-structure)
            + [Angular Tutorial (Part 3) : Project Structure](https://helpmecoder.com/2019/05/12/angular-project-structure/)
            + [Best Practices & Guidelines for web applications using Angular](https://blogs.halodoc.io/angular-best-practices/)
        - [Concept](https://angular.tw/guide/architecture)
            + [Introduction to modules](https://angular.tw/guide/architecture-modules)
            + [Introduction to components and templates](https://angular.tw/guide/architecture-components)
                - [Angular components overview](https://angular.tw/guide/component-overview)
                    + [View encapsulation](https://angular.tw/guide/view-encapsulation)
                    + [Component interaction](https://angular.tw/guide/component-interaction)
                    + [Component styles](https://angular.tw/guide/component-styles)
                    + [Dynamic component loader](https://angular.tw/guide/dynamic-component-loader)
                    + [Angular elements overview](https://angular.tw/guide/elements)
                - [Understanding templates](https://angular.tw/guide/template-overview)
                    + [Template syntax](https://angular.tw/guide/template-syntax)
                    + [Displaying values with interpolation](https://angular.tw/guide/interpolation)
                    + [Template statements](https://angular.tw/guide/template-statements)
                    + [Understanding binding](https://angular.tw/guide/binding-overview)
                    + [Understanding Pipes](https://angular.tw/guide/pipes-overview)
                    + [Understanding template variables](https://angular.tw/guide/template-reference-variables)
        - which lifecycle with a page
            + [Lifecycle hooks](https://angular.tw/guide/lifecycle-hooks)
    - [Adding navigation](https://angular.tw/start/start-routing)
    - [Managing data](https://angular.tw/start/start-data)
    - [Deploying an application](https://angular.tw/start/start-deployment)
        + [Deployment](https://angular.tw/guide/deployment)
        + [Building and serving Angular apps](https://angular.tw/guide/build)
        + [Angular CLI builders](https://angular.io/guide/cli-builder)
+ Issue
    - [Angular on Docker hot reload not works](https://stackoverflow.com/questions/69101814)
    - [single-spa - github](https://github.com/single-spa/single-spa)，A javascript framework for front-end microservices
