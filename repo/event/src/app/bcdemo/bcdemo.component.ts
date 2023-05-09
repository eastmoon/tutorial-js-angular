import { Component } from '@angular/core';
import { BcbtnComponent } from '../bcbtn/bcbtn.component';
import { BoardcastAService } from '../boardcast-a.service';

@Component({
  selector: 'app-bcdemo',
  templateUrl: './bcdemo.component.html',
  styleUrls: ['./bcdemo.component.scss']
})
export class BcdemoComponent {
  bcmsg = "Wait for boardcast message";

  constructor(
    public boardcast : BoardcastAService
  ) {
    boardcast.reg((msg:string) => this.processBoardcast(msg));
  }

  processBoardcast(msg: string) {
    console.log(`appcomponent: ${msg}`)
    console.log(this);
    this.bcmsg = msg
  }
}
