import { Injectable } from '@angular/core';

@Injectable()
export class URLService {

  constructor() { }

  formatURL(productId : string) : string {
    return productId.replace('/', '/edit/');
  }
}
