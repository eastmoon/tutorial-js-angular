import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-sample',
  templateUrl: './color-sample.component.html',
  styleUrls: ['./color-sample.component.scss']
})
export class ColorSampleComponent {
  @Input() color: string = "red";

  async ngOnInit() {
    console.log("[Anuglar Call] ngOnInit exec");
    console.log(this.color);
  }
}
