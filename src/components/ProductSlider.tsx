import { Product } from "@/models/Product";
import { Button } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

interface ProductSliderProps {
  data: Product[];
  text: string;
  navigate: (path: string) => void;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ data, text,navigate }) => {

  return (
    <div>
      {/* new products */}
      <div className="mt-[42px] flex h-[600px] w-full flex-shrink-0 flex-col items-center justify-center">
        <div className="text-center text-5xl font-bold text-black">{text}</div>
        <div className="flex w-full flex-row justify-center gap-x-5">
          {data.map((item) => (
            <div key={item.product_id} className="h-[452px] w-[300px]">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
        <Button
          onClick={() => navigate("/category")}
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
