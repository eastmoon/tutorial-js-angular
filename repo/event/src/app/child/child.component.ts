import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  sendNotification() {
      this.notifyParent.emit('Some value to send to the parent');
  }
}
