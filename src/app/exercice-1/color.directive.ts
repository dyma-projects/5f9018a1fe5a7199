import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @HostBinding('style.color') color = 'grey';

  @Input('appColor') myColors;

  constructor() {
  }

  @HostListener('window:keyup', ['$event']) windowClick($event) {
    switch ($event.key) {
      case 'ArrowUp' : {
        this.color = this.myColors.haut;
        break;
      }
      case 'ArrowRight' : {
        this.color = this.myColors.droite;
        break;
      }
      case 'ArrowLeft' : {
        this.color = this.myColors.gauche;
        break;
      }
      case 'ArrowDown' : {
        this.color = this.myColors.bas;
        break;
      }
    }
  }

  ngOnInit() {

  }
}
