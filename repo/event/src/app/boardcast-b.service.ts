import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardcastBService {

  subject = new Subject<string>();

  constructor() { }

  reg(func: any) {
    this.subject.subscribe({
      next: func
    });
  }

  exec(lazyFunc: any) {
    this.subject.next(lazyFunc);
  }
}
