

type ReceiptItem={
    product_id:string;
    quantity:number;
    product_total:number;
}


export interface Receipt  {
    productList: ReceiptItem[]
    amount: number

}