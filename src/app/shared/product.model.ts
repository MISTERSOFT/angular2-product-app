export class Product {
    _id: string;
    _rev: string;
    title: string;
    description: string;
    price: number;
    color: string;
    department: string;
    material: string;
    thumb: string;
    image: string;

    constructor(data?: any) {
        this._id          = data && data._id || '';
        this._rev         = data && data._rev || '';
        this.title        = data && data.title || '';
        this.description  = data && data.description || '';
        this.price        = data && data.price || 0;
        this.color        = data && data.color || '';
        this.department   = data && data.department || '';
        this.material     = data && data.material || '';
        this.thumb        = data && data.thumb || '';
        this.image        = data && data.image || '';
    }

    formatID() : string {
      return this._id.replace('products/', '');
    }
}
