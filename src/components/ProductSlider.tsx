import React from "react";
import ProductCard, { ProductCardProps } from "./ProductCard";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "@/models/Product";

interface ProductSliderProps {
  data: Product[];
  text: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ data, text }) => {
  return (
    <div>
      {/* new products */}
      <div className="mt-[42px] flex h-[600px] w-full flex-shrink-0 flex-col items-center justify-center">
        <div className="text-center text-5xl font-bold text-black">{text}</div>
        <div className="flex w-full flex-row justify-center gap-x-5">
          {data.map((item) => (
            <div key={item.product_id} className="h-[452px] w-[300px]">
              <ProductCard
                product_id={item.product_id}
                percentage_sale={item.percentage_sale}
                product_image={item.product_image}
                product_name={item.product_name}
                product_selling_price={item.product_selling_price}
                product_quantity={item.product_quantity}
                product_import_price={0}
                product_describe={""}
                is_favourited={false}
                is_sale={false}
                average_rating={null}
                create_at={""}
                update_at={""}
                category_id={0}
              />
            </div>
          ))}
        </div>
        <Button
          variant="contained"
          sx={{
            width: 210,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            px: 7,
            backgroundColor: "#dbad34",
            borderRadius: "60px",
            overflow: "hidden",
            fontWeight: 500,
            fontSize: 20,
            color: "black",
            textTransform: "none",
            marginTop: "30px",
          }}
        >
          Xem thêm
        </Button>
      </div>
    </div>
  );
};

export default ProductSlider;
