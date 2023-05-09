import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { BcbtnComponent } from './bcbtn/bcbtn.component';
import { BcdemoComponent } from './bcdemo/bcdemo.component';
import { LazyPanelComponent } from './lazy-panel/lazy-panel.component';
import { LazyMenuComponent } from './lazy-menu/lazy-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    BcbtnComponent,
    BcdemoComponent,
    LazyPanelComponent,
    LazyMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
