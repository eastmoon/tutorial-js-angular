# 編譯設定

+ [Build target](https://angular.tw/guide/workspace-config#build-configs)
    - [How Angular applications start](https://www.dsebastien.net/2021-03-28-angular-application-bootstrap/)
    - [Code Sharing Introduction](https://v6.docs.nativescript.org/angular/code-sharing/intro)
    - [Angular recommendations and good practices](https://medium.com/nerd-for-tech/angular-recommendations-and-good-practices-d4b732965cad)

## 建立應用程式專案

+ 使用 NG 開發環境建立工作區
```
angular ng
```

+ 執行專案建立指令
```
ng new build --skip-git --skip-install--style=scss --interactive=false
```
> 由於不需要建立路由，因此移除 ```--routing```

+ 使用 DEV 開發環境執行專案並啟動開發伺服器
```
angular dev --repo=build
```

+ 使用編譯指令產出內容
```
angular build --repo=build
```

## 編譯設定

Angular 編譯設定是定義於 ```angular.json``` 檔案，依據其結構規劃如下：

```
projects
  └ <project name>
    └　architect
      └　<action>
```

在其中 ```project name``` 主要是指此工作區中的專案名稱，若沒有指定則會是預設工作區的名稱，此外若建立多重專案在工作區，則會有多個 ```project name``` 可以選擇。

而 ```action```，參考[建構目標](https://angular.tw/guide/workspace-config#configuring-builder-targets)一文，可以發現有諸多功能使用，但主要會用於開發的是 ```serve```、```build```、```lint```、```test```，而本此主要講述 ```build``` 的設定內容，這其中主要包括四個主要設定：

+ builder：指定建構此專案的編譯工具，一般無須異動，由建置專案的 Angular CLI 定義。
+ options：編譯此專案的預設選項
+ configurations：依據指定環境對應的編譯選項
+ defaultConfiguration：預設使用的環境

在執行編譯時，其程序是選擇 ```defaultConfiguration``` 指定的 ```configurations```，將設定在 ```configurations``` 加上 ```options``` 的編譯選項，最後交給 ```builder``` 指定的編譯工具執行專案編譯；在這其中規劃專案路徑、整合項目包括以下設定：

+ outputPath：編譯輸出目錄
+ index：專案編譯進入點對應的 HTML 檔
+ main：專案編譯進入點對應的 JavaScript 檔
+ assets：專案內靜態資源的目錄位置集合
+ styles：專案內共用樣式目錄位置集合
+ stylePreprocessorOptions：專案內樣式採用 ```@import``` 的相對路徑目錄集合
+ scripts：專案外部程式碼目錄位置集合
+ budgets：單一合併檔案的大小與限制設定
+ fileReplacements：靜態目錄、檔案替換規則

至於 ```configurations``` 設定可以參考 [Angular recommendations and good practices](https://medium.com/nerd-for-tech/angular-recommendations-and-good-practices-d4b732965cad) 一文中提到的設定策略，對開發與產品環境的壓縮、彙整做出不同設定來增加開發效率與產品安全性。

原則上，Angular 的編譯程序是從 ```main``` 配合 ```index``` 作為進入點開始解析，最後編譯完成後匯出至 ```outputPath``` 目錄下，這其中，相關的靜態資料會從 ```assets```、樣式資料 ```styles```、外部程式碼 ```scripts``` 會從以上指定目錄集合中彙整至對應的檔案與目錄下；其中 ```budgets``` 設定是指對於程式碼切割方案，若合併後的檔案大於此處設定，會發出僅告或錯誤。

在設定樣式資料 ```styles```、外部程式碼 ```scripts``` 時，可以透過 ```bundleName``` 和 ```inject``` 來樣式或程式碼重新封裝的檔名和是否注入至 HTML 內，若 ```inject: false``` 則該封裝檔不會出現在輸出的 HTML 中，但依然會依據 ```bundleName``` 產生封裝檔且不會加上驗證碼。

## 絕對目錄設定

在 Angular 的專案中，若要找尋特定模組、資源，都採用如下範例的相對目錄。

```
import { AppComponent } from './app.component';
```

相對目錄若僅用於同目錄內的專案並無問題，但使用在多層級的結構中，其相對位置的寫法會如下範例。

```
import { Hero } from '../../services/hero';
```

若在多重專案的工作區內，又基於模塊考量區分專案、模組、元件、共通模組、共通元件、共通服務、共通資源等資料結構，那層級複雜度會導致大量的相對位置導致程式維護難度上升；因此，若要調整為絕對路徑，就需要設定絕對路徑以確保編譯可以讀取相對應的檔案。

+ TypeScript 路徑解析設定在 tsconfig 中的 [paths](https://www.typescriptlang.org/tsconfig#paths)
```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "paths": {
      "#app/*": ["src/app/*"],
      "#assets/*": ["src/assets/*"],
      "#services/*": ["src/services/*"]
    }
  }
}
```
> 注意，依據 TypeScript 文獻，extends 無法使用多重繼承，僅能單一繼承，因此若要區分設定，請依序使用 extends 來接受正錯的 tsconfig

+ CSS 路徑解析設定在 angular.json
```
{
  "stylePreprocessorOptions": {
    "includePaths": [
      "src/style-paths"
    ]
  }
}
```
> 不同於 TypeScript 是建立目錄的別名，Style 是設定搜尋目錄，因此可以讓 ```@import 'variables';``` 等於 ```@import '../style-paths/variables';```

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
