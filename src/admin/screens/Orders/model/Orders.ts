export interface Product {
    product_id: string;
    quantity: number;
    product_total: number;
}

export interface OrderInterface {
    grn_id: string;
    created_at: string;
    update_at: string;
    total: number;
    creater_id: string;
    product_list: Product[];
    grn_status: boolean;
}