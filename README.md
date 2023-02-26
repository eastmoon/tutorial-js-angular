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
+ [基礎專案](./repo/00-base)，執行 ```angular dev --repo=00-base```

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

## 項目

+ 編譯頁面
+ 引用 Plugin
+ 引用 Loader
+ 引用 ESLint
+ 框架使用
    - 元件設計
    - 樣式設計
    - 主題設計
+ 測試使用
    - Pure Javascript
    - Framework components
