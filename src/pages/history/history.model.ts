export class HistoryModel {
    receive: Array<ItemModel>;
    unpaid: Array<ItemModel>;
    receiveamount: number;
    notreceiveamount: number;
}

export class ItemModel {
    docno: string;
    product: ProductModel = new ProductModel();
    qty: number;
    amount: number;
    status: string;
    date: Date;
}

export class ProductModel {
    name: string;
    image: string;
    unitprice: number;
}