import { Component, Input } from '@angular/core';
import { BtnComponent } from '../btn';

@Component({
  standalone: true,
  selector: 'app-ibtn',
  templateUrl: '../btn/index.html',
  styleUrls: ['../btn/index.scss', './index.scss']
})
export class InherBtnComponent extends BtnComponent {
  constructor() {
    super();
  }
}
