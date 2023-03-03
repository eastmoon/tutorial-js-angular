# 服務

+ [Display a selection list](https://angular.io/tutorial/tour-of-heroes/toh-pt2)
+ [Add services](https://angular.io/tutorial/tour-of-heroes/toh-pt4)

**Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.**

任何用戶端網頁不應該再用戶介面提取資料，而是透過服務管理取得的資料，並以此確保可以透過替換虛假資料 ( fake data ) 來進行驗證。

本專案基於[應用程式基礎](../base/README.md)設計後續功能。

## 建立 mock 資料

本專案並未真實對任何後端伺服器取得資料，因此改用虛假資料作為資料來源。

在此建立一個 ```mock-heroes.ts``` 檔案於 ```./app/``` 目錄下，並匯出適當的資料矩陣。

## 清單呈現

透過前述建立的虛假資料直接指向變數 ```Heros```，讓元件保有主要資料矩陣，並讓顯示 DOM 能正確的依據資料結構顯示，其設定共分兩個步驟。

+ ```heroes.component.ts``` 匯入虛假資料
```
import { Hero } from '../hero';
import { HEROES } from './mock-heroes';

export class HeroesComponent {
  heroes: Heros = HEROES;
}
```

+ ```heroes.component.html``` 呈現矩陣內容
```
<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <button [class.selected]="hero === selectedHero" type="button" (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span>
      <span class="name">{{hero.name}}</span>
    </button>
  </li>
</ul>
```

這裡需要注意對元素 ```<li>``` 使用的 [ngFor](https://angular.tw/api/common/NgFor)，這是一個來自 [CommonModule](https://angular.tw/api/common/CommonModule) 的 [Structural Directives](https://angular.tw/guide/structural-directives) 藉由這些用於 HTML 樣板的指令來動態控制 HTML 元素的反覆生成或條件產生。

## 建立服務

若依照設計原則避免元件直接提取虛假資料，則需將虛假資料封裝於服務之中。

+ 使用 Angular CLI 建立服務
```
ng generate service hero
```
> 使用 generate 必需在工作區 ( Workspace ) 目錄下

## 註冊服務

透過 Angular CLI 產生服務後，初始的服務樣本有一個基礎模板，在這基礎模板中有個裝飾屬性 ```@Injectable```，透過這屬性所執行的便是 [Dependency Injection](https://angular.tw/guide/dependency-injection) 的第一步驟。

+ 可注入 ( Injectable ) 裝飾
```
@Injectable({
  providedIn: 'root'
})
```

相依注入的設計是透過框架來保存可注入物件，當此物件宣告注入的目標元件後，當目標元件生成便時，框架便會將此物件作為參數匯入；透過這樣的結構讓框架管理相依，亦可透過這方式依據情況替換要注入的實際內容。

+ 設定註冊物件的使用範圍 ```providedIn```

此項設定是指宣告可注入的物件可試用的範圍，依據 [@Injectable](https://angular.io/api/core/Injectable) 的文獻，有三個參數可使用，但考量 ```any``` 以廢棄，實際僅有兩個參數 ```root```、```platform``` 可使用，其分別是指物件僅適用當前應用程式，或可以適用多個應用程式的平台，後者概念應是指多重專案的結構，若存在單一服務可以適用多個專案時使用。

## 服務相依注入元件

若 [Dependency Injection](https://angular.tw/guide/dependency-injection) 第一步是將要可注入的物件註冊至框架，則第二步就是類別宣告需要框架協助引入服務。

```
constructor(private heroService: HeroService) {}
```

藉由在類別的建構函數 ( constructor ) 宣告要匯入的物件，當此類別經由框架生成物件時，便可利用相依注入讓框架內註冊的物件內容指派給生成物件。

## 元件生命週期

在框架生成物件後，便可呈現內容於介面，然而若服務不執行資料取得，實際僅會傳回空資料；而在框架協助生成元件並繪製內容，這過程中會有數個生命週期會觸發執行的函數，於何時提取資料便可利用此函數來觸發。

+ [Lifecycle hooks](https://angular.tw/guide/lifecycle-hooks)

本專案範例使用元件初始時執行取得。

```
ngOnInit(): void {
  this.getHeroes();
}
```

要注意，生命週期函數分為僅指行一次 ( ngOnInit, ngAfterContentInit, ngAfterViewInit ) 和會重複執行的，依據不同用途會對元件執行資料管理、顯示動畫會有影響。

![img](https://i.stack.imgur.com/eUnEd.png)

## 非同步服務

+ [RxJS](https://rxjs.dev/)
+ [Get data from a server](https://angular.io/tutorial/tour-of-heroes/toh-pt6)

實務上，服務不會直接回傳虛假資料，而是透過網路呼叫後端伺服器的 WebAPI 回傳資料，但礙於範例顯示所需，僅以虛假資料替代；但回傳仍應基於 RxJS 的非同步物件 ```Observable``` 為基礎來設計。

```
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
```

因此，在執行服務函數後，以 ```subscribe``` 函數傳入當 ```Observable``` 完成工作後的回呼函數 ( Callback function )。

## 訊息元件

建立一個觀測，資料取得、修改個階段的訊息檢視物件，以此利用服務做記錄資料的快取操作。

+ 使用 Angular CLI 建立訊息 ( message ) 元件
```
ng generate component messages
```

+ 使用 Angular CLI 建立訊息 ( message ) 服務
```
ng generate service message
```

## 訊息共享

服務最容易給人的運用方式便是提取後端服務的設計，但依據 PrueMVC 互動式架構設計概念，互動架構的 Model 除了用遠端代理 ( Remote Proxy ) 來存取非應用程式的資料來源，也會用資料代理 ( Data Proxy ) 來彙整應用程式所需的資料源，這類資料源可能部分來自遠端代理、部分來自動態生成、部分來自用戶操作，在經過其內部的演算來整理成應用程式所需。

因此，可以看到訊息服務注入到不同的元件、服務來做到訊息共享

+ ```hero.service.ts``` 注入至此服務，用於記錄 ```getHeroes``` 函數執行。
+ ```heroes.component.ts``` 注入至此元件，用於記錄 ```onSelect``` 函數執行的內容。
+ ```messages.component.ts``` 注入至此元件，用於給模板提取服務內容加以呈現至介面。

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
