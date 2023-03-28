import { Component } from '@angular/core';

declare function loadScripts(filename: string): void;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    // Dynamic import external module ( 3-party javascript library )
    constructor() {
        loadScripts("external-module.js");
    }
}
