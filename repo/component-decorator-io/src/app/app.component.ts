import { Component } from '@angular/core';
import {CounterComponent} from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-decorator-io';
  number1: number = 10;
  number2: number = 20;
  number3: number = 30;

  constructor() {}

  onCountChanged(value: number) {
    this.number3 = value;
  }
}
