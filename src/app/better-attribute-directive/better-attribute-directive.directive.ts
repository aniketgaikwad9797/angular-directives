import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterAttributeDirective]',
})
export class BetterAttributeDirectiveDirective {
  constructor(private UIelement: ElementRef, private renderer: Renderer2) {}

  //Renderer is a better way of accessing the DOM
  ngOnInit() {
    this.renderer.setStyle(
      this.UIelement.nativeElement,
      'background-color',
      'black'
    );
    this.renderer.setStyle(this.UIelement.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.renderer.setStyle(
      this.UIelement.nativeElement,
      'background-color',
      'red'
    );
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.renderer.setStyle(
      this.UIelement.nativeElement,
      'background-color',
      'transparent'
    );
    this.renderer.setStyle(this.UIelement.nativeElement, 'color', 'black');
  }
}
