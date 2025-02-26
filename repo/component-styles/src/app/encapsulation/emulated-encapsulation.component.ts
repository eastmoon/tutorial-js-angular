import { Component, ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from './no-encapsulation.component';

@Component({
  standalone: true,
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: [
    ':host {display: block; max-width: 500px; padding: 5px; margin: 5px 0; border: solid 2px green;}',
    ':host h2 { font-style: italic; font-weight: bold; }',
    ':host ::ng-deep h1 { font-style: italic; font-weight: bold; }',
    ':host-context div { font-style: italic; }',
    'h2, .emulated-message { color: green; }'
  ],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [NoEncapsulationComponent],
})
export class EmulatedEncapsulationComponent {}
