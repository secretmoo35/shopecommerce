export class OrderModel {
    items: Array<ItemModel>;
}

export class ItemModel {
    docno: string;
    product: ProductModel = new ProductModel();
    address: AddressModel = new AddressModel();
    shipping: shipping = new shipping();
    created: Date;
    qty: number;
    amount: number;
}

export class ProductModel {
    name: string;
    image: string;
    unitprice: number;
}

export class AddressModel {
    firstname: string;
    lastname: string;
    address: string;
    district: string;
    subdistrict: string;
    province: string;
    postcode: string;
    country: string;
}

export class shipping {
    name: string;
    detail: string;
    days: string;
    unitprice: number;
}