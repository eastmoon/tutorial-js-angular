import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-no-encapsulation',
  template: `
    <h2>None</h2>
    <div class="none-message">No encapsulation</div>
  `,
  styles: [
    'app-no-encapsulation {display: block; max-width: 500px; padding: 5px; margin: 5px 0; border: solid 2px red;}',
    'h2, .none-message { color: red; }'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent {}
