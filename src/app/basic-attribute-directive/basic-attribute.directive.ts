import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[basicAttributeDirective]',
})
export class BasicAttributeDirective {
  constructor(private UIelement: ElementRef) {}

  ngOnInit() {
    this.UIelement.nativeElement.style.backgroundColor = 'violet';
  }
}
