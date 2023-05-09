import { Component, Input } from '@angular/core';
import { BoardcastAService } from '../boardcast-a.service';

@Component({
  selector: 'app-bcbtn',
  templateUrl: './bcbtn.component.html',
  styleUrls: ['./bcbtn.component.scss']
})
export class BcbtnComponent {
  @Input() msg: string = "test";

  constructor(
    public boardcast : BoardcastAService
  ) {}

  sendBoardcast() {
      this.boardcast.exec(this.msg);
  }
}
