import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-btn',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class BtnComponent {
  @Input() msg: string = "test";

  constructor() {}

  sendBoardcast() {
      console.log(this.msg);
  }
}
