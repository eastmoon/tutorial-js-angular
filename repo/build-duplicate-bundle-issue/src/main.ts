import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import * as $ from 'jquery';

console.log($);

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
