import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TemplateOutletDirective } from './directives/template-outlet.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TemplateOutletDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
