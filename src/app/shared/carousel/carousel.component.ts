import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'carousel',
  templateUrl: 'carousel.component.html'
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() slides: Array<any>;
  @ViewChild('slider') carousel : ElementRef;

  constructor(private router: Router) { }

  ngOnInit() { }

  goToProduct(id: string) {
    this.router.navigateByUrl('/'+ id);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $(this.carousel.nativeElement).slider();
    }, 300);
  }

}
