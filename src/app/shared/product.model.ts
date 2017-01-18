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

    constructor(data: any) {
        this._id = data._id;
        this._rev = data._rev;
        this.title = data.title;
        this.description = data.description;
        this.price = data.price;
        this.color = data.color;
        this.department = data.department;
        this.material = data.material;
        this.thumb = data.thumb;
        this.image = data.image;
    }

    formatID() : string {
      return this._id.replace('/products/', '');
    }
}
