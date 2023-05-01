import { Directive, EmbeddedViewRef, ViewContainerRef, Input, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTemplateOutlet]'
})
export class TemplateOutletDirective implements OnInit {
  @Input() appTemplateOutletData: string = '1234';
  @Input() appTemplateOutlet: TemplateRef<string> | undefined;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.clear();
    if ( this.appTemplateOutlet !== undefined ) {
      const viewRef: EmbeddedViewRef<any> | undefined = this.viewContainerRef.createEmbeddedView(this.appTemplateOutlet);
      if ( viewRef !== undefined ){
        console.log(this.appTemplateOutletData);
        viewRef.context['data'] = this.appTemplateOutletData;
      }
    }
  }
}
