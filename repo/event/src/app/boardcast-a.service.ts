import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardcastAService {

  subject = new Subject<string>();

  constructor() {
    this.subject.subscribe({
      next: (msg) => {
        console.log(`log: ${msg}`);
      }
    });
  }

  reg(func: any) {
    this.subject.subscribe({
      next: func
    });
  }

  exec(msg: string) {
    this.subject.next(msg);
  }
}
