import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // Declare variable
  @Input() defaultColor: string = 'lightgray';
  @Input() appHighlight: string = '';

  // Constructor
  constructor(private el: ElementRef) { }

  // Event mdthoe
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'darkgray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('darkgray');
  }

  // Declare function
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
