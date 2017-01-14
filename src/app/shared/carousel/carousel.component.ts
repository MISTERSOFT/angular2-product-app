import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: 'carousel.component.html'
})
export class CarouselComponent implements OnInit {

  @Input() slides: Array<Object>;

  constructor() { }

  ngOnInit() { }

}
