import { Component } from '@angular/core';

declare function loadScripts(filename: string, callback: () => void): void;
declare function doAction(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'build-and-split-code';

  // Declare lifecycle hooks method
  async ngOnInit() {
    console.log("[Anuglar Call] ngOnInit exec");
    console.log("[Anuglar Call] Loading external script");
    loadScripts("external-module.js", () => {
        console.log("[Anuglar Call] Loading external script complete and call doAction");
        doAction();
    });
    loadScripts("error-external-module.js", () => {
        console.log("[Anuglar Call] It will not show, because this external-module was not exist");
    });
  }
}
