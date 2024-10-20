import React from "react";
import ProductCard, { ProductCardProps } from "./ProductCard";
import { Button } from "@mui/material";

interface ProductSliderProps {
  data: ProductCardProps[];
  text: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ data, text }) => {
  return (
    <div>
      {/* new products */}
      <div className="mt-[42px] flex h-[600px] flex-shrink-0 w-full flex-col items-center justify-center">
        <div className="text-center text-5xl font-bold text-black">{text}</div>
        <div className="flex w-full flex-row justify-center gap-x-5">
          {data.map((item) => (
            <div key={item.name} className="h-[452px] w-[300px]">
              <ProductCard
                name={item.name}
                rating={item.rating}
                price={item.price}
                imageUrl={item.imageUrl}
                discountPrice={item.discountPrice}
                isFavorite={item.isFavorite}
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
