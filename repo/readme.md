# Angular command line interface

+ [CLI Overview and Command Reference](https://angular.tw/cli)
+ [Setting up the local environment and workspace](https://angular.tw/guide/setup-local)

Angular CLI 是一套 Angular 的專案管理工具，其專案結構如下：

```
workspace
    └ dist
    └ projects
        └ <project-name>
            └ src
    └ src
```

透過諸如 ```ng new```、```ng generate``` 可以構建各類工作區、專案、函式庫、元件，除可以完成上述結構外，也會動態修正 ```angular.json``` 等 Angular 編譯、測試所需的設定檔。

## Install

Angular CLI 可以透過 npm 安裝至 global 區域，便於開發環境全域皆可使用此命令；由於 Angular CLI 並不會安裝 Angular 框架編譯與測試套件，因此無需將此安裝至專案設定內，僅需安裝至編譯工具所在的開發環境即可。

+ Update global node.js
```
npm update -g
```

+ Install angular-cli in repository
```
npm install -g @angular/cli
```

+ Install schematics devkit
```
npm install -g @angular-devkit/schematics-cli
```

以上安裝指令已經設定於專案目錄 ```conf/docker/angular``` 的 Dockerfile，僅需使用 ```angular ng``` 指令啟動環境容器並進入即可使用。

## Angular CLI operation

安裝完 Angular 後，可以透過以下指令來檢查相關資訊

+ 檢查 ng 指令
```
ng --help
```

+ 檢查 ng 版本
```
ng version
```

## Angular Workspace

+ [Workspace and project file structure](https://angular.tw/guide/file-structure)
    - [Angular workspace configuration](https://angular.tw/guide/workspace-config)
    - [Workspace npm dependencies](https://angular.tw/guide/npm-packages)
    - [TypeScript configuration](https://angular.tw/guide/typescript-configuration)

Angular 專案結構是以工作區 ( Workspace ) 為基礎，在工作區中可包含一個至多個專案 ( Project ) 的檔案集合。

+ 建立工作區 ( Workspace )
```
ng new <workspace-name>
```
> <name> 指要建立的工作區名稱

+ 移除工作區 ( Workspace )
```
rm -rf <workspace-name>
```

建立工作區後，其工作區目錄中包括以下相關設定檔 ( Configuration )：

+ ```.editorconfig```，編譯器設定檔，此檔案基於 [EditorConfig](https://editorconfig.org/) 定義用來提供支援此設定的編輯器
+ ```.gitignore```，版本控制軟體 Git 的檔案、目錄忽略設定檔
+ ```README.md```，應用程式簡介文件
+ ```angular.json```，提供 Angular CLI 操作各專案 ( Project ) 的設定資訊，類似 C++ 的 CMake 或 C# 的 csproj
+ ```package.json```，提供 node.js 的 npm 工具管理工作區內套件相依
+ ```package-lock.json```，npm 安裝相依套件後的詳細資訊，若有此檔案，預設情況將會依此檔案安裝套件版本
+ ```tsconfig.json```，提供 TypeScript 轉譯程式的設定資訊

基於建立指令不同，共有以下幾種主要專案可建立；基於以下範例建立的專案會採用 ```.gitignore``` 忽略上傳。

### 應用專案

應用專案是最基礎的 Angular 專案，在建立工作區的同時建立應用程式目錄，以 [Monorepo](https://vocus.cc/article/62eeb11bfd89780001dd8b7f) 架構概念管理與設計專案。

+ 建立專案
```
ng new demo-workspace --skip-git --skip-install --routing --style=scss --interactive=false
```

專案建立中的後續選項是用來避免產生冗餘資訊、指定必需模塊所規劃，依據建立過程需要亦可參考 ```ng new``` 指令說明來選擇。

+ 初始與編譯專案
```
cd demo-workspace
npm install
npm run build
```

+ 啟用測試伺服器
```
cd demo-workspace
npm run start -- --host 0.0.0.0
```

### 多重專案

多重專案是在工作區中規劃多個專案，以此產生多個分頁與模組，以區分模塊與程式碼，利於後續進行動態載入的設計。

+ 建立專案
```
ng new demo-multiple --skip-git --skip-install --routing --style=scss --interactive=false
cd demo-multiple
ng generate application app-01 --routing --skip-install --routing --style=scss --interactive=false
ng generate application app-02 --routing --skip-install --routing --style=scss --interactive=false
```

若建立工作區時無需在根建立應用專案，則可將指令改為 ```ng new demo-multiple --no-create-application --skip-git --skip-install --routing --style=scss --interactive=false```

+ 初始與編譯專案
```
cd demo-multiple
npm install
npm run build
npm run build app-01
npm run build app-02
```

+ 啟用測試伺服器
```
cd demo-workspace
npm run start -- --host 0.0.0.0
npm run start app-01 -- --host 0.0.0.0
npm run start app-02 -- --host 0.0.0.0
```

### 函式庫專案

+ [Overview of Angular libraries](https://angular.tw/guide/libraries)
    - [Usage of Angular libraries published to npm](https://angular.tw/guide/using-libraries)
    - [Creating libraries](https://angular.tw/guide/creating-libraries)

函式庫專案是建立供 Angular 引用的第三方函式庫，引用的方式會基於 npm 或 yarn。

+ 建立專案
```
ng new demo-libraries --no-create-application --skip-git --skip-install --routing --style=scss --interactive=false
ng generate library lib01 --skip-install --interactive=false
```

+ 初始與編譯專案
```
cd demo-libraries
npm install
npm run build lib01
```

+ 發佈
```
cd demo-libraries
cd dist/lib01
npm publish
```
> It will need to be logged in to https://registry.npmjs.org/

## Angular schematics

+ [Schematic](https://angular.tw/guide/schematics)
    - [@schematics/angular](https://www.npmjs.com/package/@schematics/angular)
    - [如何使用 Angular Schematics 自動產生程式碼](https://jimmylin212.github.io/post/0015_angular_schematics_intro/)
    - [Schematics — An Introduction](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2)

**A schematic is a template-based code generator that supports complex logic.**

Angular CLI 提供了建立專案、函式庫、類別、元件等操作，而這些操作能產生相應的程式碼，而這過程便是透過 Schematics ( 原理圖、概要圖 )，也正如文獻第一句所述，Schematics 是以樣板為基礎的程式碼產生器；透過 npm 工具載入 Angular CLI 後，便可基於 CLI 產生所需要的程式碼基礎檔案。

+ 指令
    - ```ng add```
    - ```ng generate <schematic>```
    - ```ng update```
    - ```schematics blank <schematics-name>```
