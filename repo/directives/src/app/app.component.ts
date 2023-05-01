import { Component } from '@angular/core';
import { HighlightDirective } from './directives/highlight.directive';
import { TemplateOutletDirective } from './directives/template-outlet.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives';
  color: string = "black";
}
