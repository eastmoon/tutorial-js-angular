import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-lifecycle';

  // Declare Constructor
  constructor() {
    console.log("[Anuglar Call] AppComponent constructor exec");
  }

  // Declare lifecycle hooks method
  async ngOnChanges() {
    console.log("[Anuglar Call] ngOnChanges exec");
  }
  async ngOnInit() {
    console.log("[Anuglar Call] ngOnInit exec");
  }
  async ngDoCheck() {
    console.log("[Anuglar Call] ngDoCheck exec");
  }
  async ngAfterContentChecked() {
    console.log("[Anuglar Call] ngAfterContentChecked exec");
  }
  async ngAfterViewChecked() {
    console.log("[Anuglar Call] ngAfterViewChecked exec");
  }
  async ngAfterContentInit() {
    console.log("[Anuglar Call] ngAfterContentInit exec");
  }
  async ngAfterViewInit() {
    console.log("[Anuglar Call] ngAfterViewInit exec");
  }
  async ngOnDestroy() {
    console.log("[Anuglar Call] ngOnDestroy exec");
  }
}
