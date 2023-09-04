import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[basicAttributeDirective]',
})
export class BasicAttributeDirective {
  constructor(private UIelement: ElementRef) {}

  //This however is not a good practive to change stlyling by accessing the native elements.
  ngOnInit() {
    this.UIelement.nativeElement.style.backgroundColor = 'violet';
  }
}
