export class MoreModel {
    categories: Array<ItemModel>;
}

export class ItemModel {
    banner_image: string;
    banner_title: string;
    lastvisit: Array<ProductModel>;
    popularproducts: Array<ProductModel>;
    popularshops: Array<ShopModel>;
}

export class ProductModel {
    name: string;
    image: string;
    unitunitprice: number;
}

export class ShopModel {
    name: string;
    image: string;
}