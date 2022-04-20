import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {
  colors = ['#f5a4c5','black','rgba(235,183,183)'];

  constructor(elem: ElementRef) {
    this.changeColor(elem);
 }
 changeColor(elem: ElementRef) {
  setInterval(() => {
   elem.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }, 3000);
}
} 
