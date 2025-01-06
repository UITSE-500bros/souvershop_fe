export interface Product {
  product_id: string;
  product_name: string;
  product_selling_price: number;
  product_import_price: number;
  product_quantity: number;
  product_image: string[];
  product_describe: string;
  is_favourited: boolean;
  is_sale: boolean;
  percentage_sale: number;
  average_rating: number | null;
  create_at: string;
  update_at: string;
  category_id: string;
}


