import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicAttributeDirective } from './basic-attribute-directive/basic-attribute.directive';
import { BetterAttributeDirectiveDirective } from './better-attribute-directive/better-attribute-directive.directive';

@NgModule({
  declarations: [AppComponent, BasicAttributeDirective, BetterAttributeDirectiveDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
