# Component styles

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

本篇基於下述文獻，對 Angular 元件的樣式模組化設定與整體樣式系統的規劃。

+ [Component styles](https://v17.angular.io/guide/component-styles)
    - [View encapsulation](https://v17.angular.io/guide/view-encapsulation)
    - [Styling components](https://angular.dev/guide/components/styling)

## 建立應用程式專案

+ 使用 NG 開發環境建立工作區
```
angular ng
```

+ 執行專案建立指令
```
ng new component-styles --skip-git --skip-install --style=scss --interactive=false
```
> 由於不需要建立路由，因此移除 ```--routing```

+ 使用 DEV 開發環境執行專案並啟動開發伺服器
```
angular dev --repo=component-styles
```

## View encapsulation

Angular 元件可設定其封裝 ( encapsulation ) 特性，藉由不同的方式設定在元件的樣式不會被其他元件的樣式干擾。

```js
@Component({
  encapsulation: ViewEncapsulation.None,
})
```

其特性可參考下表：

| Modes |	Details |
| :-: | :---: |
| ViewEncapsulation.ShadowDom	| Angular 使用瀏覽器預設的 Shadow DOM 將元件視圖封裝於 ShadowRoot 中，並將樣式添加至 DOM 中確保其正常運作 |
| ViewEncapsulation.Emulated	| Angular 藉由 CSS 選擇器對元件進行封裝，其主要是透過 Angualr 動態的[元素 ( Element )](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) 與[屬性 ( Attribute )](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) 編號，構成一個模擬 ( Emulated ) Shadow DOM 行為，詳細參考 Inspecting generated CSS 說明。 |
| ViewEncapsulation.None	| Angular 不會用任何封裝方式處理樣式，而會將元件內所有的樣式設定添加到全域中，使其應想擴及整個 HTML。 |

原則上，當一個元件設為 ViewEncapsulation.ShadowDom，Angular 會將 Global 中的 ViewEncapsulation.Emulated 和 ViewEncapsulation.None 元件樣式資訊添加到 DOM 中；反之，ViewEncapsulation.ShadowDom 中若有引用其他元件但設定為 ViewEncapsulation.Emulated 和 ViewEncapsulation.None，其樣式也會反向添加回 Global。

## Inspecting generated CSS

對於 ViewEncapsulation.Emulated 的模擬封裝，Angular 會在對該元件產生的一個唯一編號，並由此構成屬性編號，也因此在無論是 Global 或 Shadow 中，可以看到相同元件會有有相同屬性編號；而基於該編號會有兩種屬性：

+ ```_nghost-[ID]```：標示於元件的外框元素上。
+ ```_ngcontent-[ID]```：標示於元件內部的元素上。

因此，如果如下範例：

```js
@Component({
  styles: [
    'h2, .emulated-message { color: green; }'
  ],
  encapsulation: ViewEncapsulation.Emulated
})
```

會在 Global 中出現一個 ```<style>``` 並如下標示：

```css
h2[_ngcontent-ng-c2217290570],
.emulated-message[_ngcontent-ng-c2217290570] {
  color: green;
}
```

可以看到設定在元件的樣式，元素 ```h2``` 與類別 ```.emulated-message``` 被加上屬性 ```_ngcontent-ng-c2217290570```，亦即此兩個樣式設定，僅作用於屬性為 ```_nghost-ng-c2217290570``` 的元件。

## View encapsulation 中的偽類與偽元素

在 Angular 元件的封裝中，其樣式主要設定對應子元件的內容，這時會出現一個狀況，若要對元件本身設定樣式，則需要設置在全域的樣式中，例如範例中的 styles 或 app.component.scss。

```
app-emulated-encapsulation {display: block; max-width: 500px; padding: 5px; margin: 5px 0; border: solid 2px green;}
app-shadow-dom-encapsulation {display: block; max-width: 500px; padding: 5px; margin: 5px 0; border: solid 2px blue;}
```

然而，這樣的設計就違反了元件封裝的原則，對於元件的樣式應該與元件彙整一起，因此可以使用偽類別來達到此項設計。

+ [host](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host)：ShadowDOM 內的 ShadowRoot 元素，亦即元件本體
+ [host-context](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host-context)：類別函數，可以找到符合搜尋條件的 ShadowRoot 元素
+ [ng-deep](https://v17.angular.io/guide/component-styles#deprecated-deep--and-ng-deep)：Angular 提供的偽類別，可將其後的元素修正為不綁定 host 的狀態

#### host

利用 host 可以將前述的錯誤設計，修正如下：

```js
@Component({
  styles: [
    ':host {display: block; max-width: 500px; padding: 5px; margin: 5px 0; border: solid 2px green;}'
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
```

這使得本來宣告在外的 ```app-emulated-encapsulation``` 設定可以直接移除並達到相同效果。

#### host-context

利用 host-content 函數尋找符合條件的元素，在實務上要注意幾個要點。

+ ```host-content``` 不加任何條件等同 ```host```
    - 若元件設定為 ViewEncapsulation.Emulated，上述狀況會發生
    - 若元件設定為 ViewEncapsulation.ShadowDom，無法找到目標，範例修正為 ```host-content(body)``` 則上述狀況會發生
+ ```host-content(<compound-selector>)``` 增加類別與屬性條件，增加差異性設計
    - 範例使用類別 theme，當元件宣告為 ```<app-shadow-dom-encapsulation class="theme" />``` 則樣式會套用

依照範例觀察，若元件無樣式差異性設計，建議使用 ```host``` 來設定元件本身與內容的樣式，若要設定差異性，例如主題 ( theme ) 或屬性 ( part ) 存在就套用某個樣式。

```js
@Component({
  styles: [
    ':host-context([part]) h2 { font-style: italic; font-weight: lighter; }',
    ':host-context(.theme) h2 { font-style: italic; font-weight: bold; }'
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
```

如上範例設定，實務套用到下面宣告

```html
<app-shadow-dom-encapsulation part="demo" />
<app-shadow-dom-encapsulation class="theme" />
```

#### ng-deep

Angular 提供的 ```ng-deep``` 是一個用來將封裝屬性移除的偽類別，主要用於 ViewEncapsulation.Emulated 封裝模式。

```js
@Component({
  styles: [
    ':host h1 { font-style: italic; font-weight: bold; }',
    ':host ::ng-deep h2 { font-style: italic; font-weight: bold; }',
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
```

倘若宣告如上，則實際轉化的 style 如下：

```css
[_nghost-ng-c2217290570] h1[_ngcontent-ng-c2217290570] { font-style: italic; font-weight: bold; }
```
> ng-c2217290570 為 Angular 的隨機屬性編號

若加上 ```ng-deep``` 則實際轉化的 style 如下：

```css
[_nghost-ng-c2217290570] h2 { font-style: italic; font-weight: bold; }
```
> ng-c2217290570 為 Angular 的隨機屬性編號

這設定可以看出其差異，在於轉換的 ```h2``` 不再限定必需是此元件生成時有標記屬性編號的元素，而是任意元素，這表示指向的內容可能是元件生成後才經由其他方式添加的內容。

此設定對 ViewEncapsulation.ShadowDom 無效，主要是設定後的實務結果是當成標準 CSS 句型匯出，這反而會因為 ```::ng-deep``` 的偽類別無法辨識到正確的目標元素。

## CSS 常用偽元素

CSS **偽類別** 是提供樣式選擇器額外的關鍵字，用以描述指定元素其特定部分樣式修改，例如 ```p::first-line``` 指段落元素 ```<p>``` 的首行文字指定的樣式。

+ [after](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)：在目標元素後產生一個行元素並套用的樣式
+ [before](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before)：在目標元素前產生一個行元素並套用的樣式
+ [first-line](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line)：在一個區塊元素中第一行的樣式
+ [first-letter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter)：在一個區塊元素中第一行第一個字母的樣式
+ [marker](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::marker)：列表標記符號的樣式
+ [part](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)：在 ShadowDOM 中元素有 part 屬性的樣式
+ [placeholder](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::placeholder)：在 ```<input>``` 或 ```<textarea>``` 元素中預設內容的樣式
+ [selection](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection)：在文字被框選時，框選內容的樣式

其他可用偽元素參考 [Pseudo elements - MWD](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)

## CSS 常用偽類別

CSS **偽類別** 是提供樣式選擇器額外的關鍵字，用以描述指定元素當前的狀態，例如 ```a:hover``` 指某個連結元素 ```<a />``` 當前有滑鼠懸停在其區域內，則 CSS 樣式會被套用。

+ [root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)：HTML 根元素
+ [link](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:link)：元素尚未訪問過
+ [visited](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited)：元素已經訪問過
+ [hover](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover)：元素有滑鼠懸停
+ [active](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active)：元素被滑鼠點擊
+ [focus](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus)：元素被鍵盤鎖定
+ [checked](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked)：元素被選擇 ( 勾選、點選 )
+ [enabled](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:enabled)：元素的 ```disabled``` 屬性設為啟用
+ [disabled](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:disabled)：元素的 ```disabled``` 屬性設為禁用
+ [empty](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty)：元素沒有任何子元素

其他可用偽類別參考 [Pseudo classes - MWD](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

## 元件繼承

考量元件版本更新或依據修改樣式，應採用繼承類別，從而替換模板 ( Template )、樣式 ( Style )、行為 ( Method )。

+ [inheritance/btn](./src/app/inheritance/btn)：原型類別範本
+ [inheritance/btn](./src/app/inheritance/ibtn)：繼承類別範本

理論上，類別繼承應包括模板、樣式、行為，並依據開發需要修改必要內容；然而，Angular 若要完整繼承，則除需引入該元件的類別，還要取得元件的模板檔案、樣式檔案。

```
@Component({
  templateUrl: '../btn/index.html',
  styleUrls: ['../btn/index.scss', './index.scss']
})
export class InherBtnComponent extends BtnComponent {
  constructor() {
    super();
  }
}
```

如上所示，倘若無法取得原型類別的模板、樣式檔案，繼承類別也只能繼承行為。

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
