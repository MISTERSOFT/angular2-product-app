export class Product {
    id: string;
    rev: string;
    title: string;
    description: string;
    price: number;
    color: string;
    department: string;
    material: string;
    thumb: string;
    image: string;

    constructor(
        _id: string,
        _rev: string,
        _title: string,
        _description: string,
        _price: number,
        _color: string,
        _department: string,
        _material: string,
        _thumb: string,
        _image: string
    ) {
        this.id = _id;
        this.rev = _rev;
        this.title = _title;
        this.description = _description;
        this.price = _price;
        this.color = _color;
        this.department = _department;
        this.material = _material;
        this.thumb = _thumb;
        this.image = _image;
    }
}
