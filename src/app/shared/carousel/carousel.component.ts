import {
  Component,
  OnInit,
  AfterViewInit,
  Input } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'carousel',
  templateUrl: 'carousel.component.html'
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() slides: Array<any>;

  constructor(private router: Router) { }

  ngOnInit() { }

  goToProduct(id: string) {
    this.router.navigateByUrl('/products/' + id);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      //$('.slider').slider();
    }, 300);
  }

  t() {

  }

}
