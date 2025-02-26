import { Component, ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from './no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation.component';

@Component({
  standalone: true,
  selector: 'app-shadow-dom-encapsulation',
  template: `
    <h2>ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: [
    ':host {display: block; max-width: 500px; padding: 5px; margin: 5px 0; border: solid 2px blue;}',
    ':host-context(.theme) h2 { font-style: italic; font-weight: bold; }',
    ':host-context([part]) h2 { font-style: italic; font-weight: lighter; }',
    'h2, .shadow-message { color: blue; }'
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [NoEncapsulationComponent, EmulatedEncapsulationComponent],
})
export class ShadowDomEncapsulationComponent {}
