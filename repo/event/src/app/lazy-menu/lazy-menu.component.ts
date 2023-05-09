import { Component } from '@angular/core';
import { BoardcastBService } from '../boardcast-b.service';

@Component({
  selector: 'app-lazy-menu',
  templateUrl: './lazy-menu.component.html',
  styleUrls: ['./lazy-menu.component.scss']
})
export class LazyMenuComponent {
  constructor(
    public boardcast : BoardcastBService
  ) {}

  showContentA() {
      this.boardcast.exec(
        (callback: any) => {
          import(`../lazy-content-a/lazy-content-a.component`).then(
            ( {LazyContentAComponent} ) => { if ( callback !== "undefined" && typeof callback === "function" ) callback(LazyContentAComponent) }
          )
        }
      );
  }

  showContentB() {
      this.boardcast.exec(
        (callback: any) => {
          import(`../lazy-content-b/lazy-content-b.component`).then(
            ( {LazyContentBComponent} ) => { if ( callback !== "undefined" && typeof callback === "function" ) callback(LazyContentBComponent) }
          )
        }
      );
  }
}
