import { Product } from './../shared/product.model';

export class ResponseApi {
  public success: boolean;
  public result: Product[];

  constructor(data: any) {
    this.success = data.success;
    this.result = data.result;
  }
}
