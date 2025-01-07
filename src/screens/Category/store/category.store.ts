import { create } from "zustand";
import { Product } from "../../../models/Product";
import { getAllProducts } from "../service/Category.service";
type ProductStore = {
    product_list: Product[];
    setProductList: () => void

};

const useProductStore = create<ProductStore>((set) => ({
    product_list: [],
    setProductList: () => {
        // Fetch all products
        const fetchProducts = async () => {
            try {
                const res = await getAllProducts();
                console.log(res);
                set(() => ({
                    product_list: res,
                }));
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };
        fetchProducts();

    }
}));
export default useProductStore;