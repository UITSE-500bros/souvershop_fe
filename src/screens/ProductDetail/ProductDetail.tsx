import React from "react";
import ImageSlider from "./ImageSlider";


function ProductDetail() {
 const data =[
    "https://i.etsystatic.com/42383617/r/il/d2697c/5835188521/il_794xN.5835188521_hgfg.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",

 ]
   

 
  return (
    <div className="flex flex-col px-[100px]">
      <div className="routebar inline-flex items-center gap-3">
        <p>Trang chủ</p>
        <p>/</p>
        <p>Shop</p>
        <p>/</p>
        <p>Thời trang nam</p>
        <p>/</p>
        <p>Áo phông</p>
      </div>

      {/* Product Detail */}
      <div className="flex w-full flex-row items-center justify-center">
        <div className="w-[152px] h-[530px] object-cover m-0">
            <ImageSlider imageURLS={data}/>
        </div>
        
        
      </div>
    </div>
  );
}

export default ProductDetail;
