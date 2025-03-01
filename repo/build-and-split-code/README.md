# Build And Split Code

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

+ [Code Splitting](https://webpack.js.org/guides/code-splitting/)
    - [Styles and scripts configuration](https://angular.dev/reference/configs/workspace-config#styles-and-scripts-configuration)

對於網際網路頁面而言，何時載入資源是極其重要的議題，倘若設計錯誤的載入規劃，除了無端載入無用的程式碼、更會增加無端的編譯耗能；因此，**『依據需求分批載入需要的程式碼』** 是整個動態載入機制的核心，而這議題的設計則需考量程式碼如何編譯、如何整理與撰寫，亦即使用的前端框架如何實踐程式碼分割 ( Code Splitting )。

對於程式碼分割可以往三個方向考量

+ 程式碼包 ( Code Bundle ) 機制：主要基於框架 ( Webpack、Angular ) 提供的編譯機制，指定程式進入點或需彙整的目標檔，從而打包出不同的包。
+ 動態載入元件：參考 [build-lazy](../build-lazy) 項目，主要使用 ES6 的 dynamic import 函數 ```import()```，讓編譯系統分離程式與自動載入。
+ 基於 Web Compoennt 的微前端框架：參考 [research-microfontend](https://github.com/eastmoon/research-microfrontend) 項目，主要利用微前端的概念，基於 WebComponent 技術從而達到程式碼的分離、彙整、運用機制。

## 建立應用程式專案

+ 使用 NG 開發環境建立工作區
```
angular ng
```

+ 執行專案建立指令
```
ng new build-and-split-code --skip-git --skip-install --style=scss --interactive=false
```
> 由於不需要建立路由，因此移除 ```--routing```

+ 使用 DEV 開發環境執行專案並啟動開發伺服器
```
angular dev --repo=build-and-split-code
```

+ 使用編譯指令產出內容
```
angular build --repo=build-and-split-code
```
##

在 Angular 的設定檔 [angular.json](./angular.json) 中，可以透過定義 scripts 與 styles 兩個矩陣來定義需樣額外進行編譯彙整的檔案。

```
{
    "projects": {
        "project-name" : {
            "architect": {
                "build": {
                    "options" : {
                      "styles": [],
                      "scripts": []
                    }
                }
            }
        }
    }
}
```

其設定所在位置如上所示 ( 依據不同版本的 Angular 位置應該會有所不同 )，由於該項設定跟隨 ```project-name``` ，因此在多專案的結構中可以各自規劃額外彙整的腳本。

原則上，如果矩陣內只填寫檔案位置，所有填入的檔案會統一匯出到預設檔案，樣式到 ```styles.css```、程式碼到 ```scripts.js``` 中，若要分離則應設定如下：

```
"styles": [
  "src/styles.scss",
  {
    "input": "src/styles-inject.scss",
    "inject": true,
    "bundleName": "inject-module"
  },
  {
    "input": "src/styles-external.scss",
    "inject": false,
    "bundleName": "external-module"
  }
]
```

+ ```input```：要彙整的檔案，此項設定必須為字串，因此若要統一彙整多來源可多行設定會由目標檔案匯入 ```@import``` 多個來源檔
+ ```inject```：是否注入到 index.html 中；若為 false 則會匯出但不添加 hash 且不會注入到 index.html 中，需要額外撰寫載入腳本
+ ```bundleName```：彙整內容的輸出檔名，若有多個設定為相同匯出檔案，會依據順序整理到該檔案中

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
