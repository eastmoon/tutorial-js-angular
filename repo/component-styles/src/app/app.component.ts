import { Component, ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from './encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './encapsulation/shadow-dom-encapsulation.component';
import { BtnComponent } from './inheritance/btn';
import { InherBtnComponent } from './inheritance/ibtn';

@Component({
  selector: 'app-root',
  imports: [
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    BtnComponent,
    InherBtnComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'component-styles';
}
