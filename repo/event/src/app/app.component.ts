import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { BcdemoComponent } from './bcdemo/bcdemo.component';
import { LazyPanelComponent } from './lazy-panel/lazy-panel.component';
import { LazyMenuComponent } from './lazy-menu/lazy-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'event';
}
