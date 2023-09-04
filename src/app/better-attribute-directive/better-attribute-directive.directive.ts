import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterAttributeDirective]',
})
export class BetterAttributeDirectiveDirective {
  @Input() userInputFontSize: string;
  constructor(private UIelement: ElementRef, private renderer: Renderer2) {}
  @HostBinding('style.fontSize') fontSize 

  //Renderer is a better way of accessing the DOM
  ngOnInit() {
    this.fontSize = '24px'
    // this.renderer.setStyle(
    //   this.UIelement.nativeElement,
    //   'background-color',
    //   'black'
    // );
    // this.renderer.setStyle(this.UIelement.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    // this.renderer.setStyle(
    //   this.UIelement.nativeElement,
    //   'background-color',
    //   'red'
    // );
    this.fontSize = this.userInputFontSize;
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.UIelement.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.fontSize = '14px';
  }
}
