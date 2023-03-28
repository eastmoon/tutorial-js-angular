# 動態載入

+ [Welcome to the Ivy League: Lazy Loading Components in Angular v9](https://netbasal.com/welcome-to-the-ivy-league-lazy-loading-components-in-angular-v9-e76f0ee2854a)
+ [Lazy-loading NgModules](https://angular.io/guide/lazy-loading-ngmodules)
    - [Speed Up Your Angular Application with Code Splitting](https://www.telerik.com/blogs/speed-up-angular-application-code-splitting)
    - [Route-level code splitting in Angular](https://web.dev/route-level-code-splitting-in-angular/)
    - [Bundling and Code Splitting in Angular](https://www.pluralsight.com/guides/bundling-and-code-splitting-in-angular)
    - [Code-splitting in Angular or how to share components between lazy modules](https://indepth.dev/posts/1267/code-splitting-in-angular-or-how-to-share-components-between-lazy-modules-2)
    - [Manually Lazy Load Modules And Components In Angular](https://mokkapps.de/blog/manually-lazy-load-modules-and-components-in-angular/)
    - [Common Chunk and Lazy Loading in Angular](https://juristr.com/blog/2021/02/common-chunk-lazy-loading-angular-cli/)
    - [Dynamically import module in Angular](https://dev.to/railsstudent/dynamically-import-module-in-angular-29n6)
    - [Dynamic import NgModule | Angular 13](https://medium.com/@teslenkooleg2017/e7183c6743c6)

## 建立應用程式專案

+ 使用 NG 開發環境建立工作區
```
angular ng
```

+ 執行專案建立指令
```
ng new build-lazy --skip-git --skip-install--style=scss --interactive=false
```
> 由於不需要建立路由，因此移除 ```--routing```

+ 使用 DEV 開發環境執行專案並啟動開發伺服器
```
angular dev --repo=build-lazy
```

+ 使用編譯指令產出內容
```
angular build --repo=build-lazy
```

## 議題

+ 使用 import() 最小單元可以到 component ?
  - 可以
  - 但需建立 NgModules 框住 Component 確保物件可正常使用 Angular 框架
  - 在 Angular v15 可以設定 standalone component 並指定需要 import 的模組來與 Angular 框架掛勾

+ 使用 import() 掛入第三方 ?
  - 無法
  - 動態載入是 JS 框架基於 import 運作原則延伸的運用，因此，其動態載入的前提是編譯階段可明確搜尋到的載入目標

+ 使用 insert script element 掛入第三方
  - 指定 .js 檔
      + [How to Load External JS Scripts Dynamically in AngularJS ?](https://www.geeksforgeeks.org/how-to-load-external-js-scripts-dynamically-in-angularjs/)
      + [Adding, Loading, and Using JavaScript in Angular](https://medium.com/@Codeible/adding-loading-and-using-javascript-in-angular-3281ea4b056b)

+ 使用 loadChildren 建構動態載入路由
    - 可以
    - 參考文獻中關於延遲載入 ( lazy loading ) 的規範

利用 namedChunks 控制動態載入？
https://juristr.com/blog/2021/02/common-chunk-lazy-loading-angular-cli/

Dynamic imports solve all the problems, right?
https://blog.mgechev.com/2019/05/11/dynamic-imports-javascript/

RouterModule.forRoot(ROUTES) vs RouterModule.forChild(ROUTES)
https://stackoverflow.com/questions/40498081

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
