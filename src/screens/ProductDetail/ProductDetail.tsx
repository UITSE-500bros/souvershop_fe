import React from "react";
import ImageSlider from "./ImageSlider";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ButtonGroup from "./ButtonGroup";

function ProductDetail() {
  const data = [
    "https://i.etsystatic.com/42383617/r/il/d2697c/5835188521/il_794xN.5835188521_hgfg.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
    "https://i.etsystatic.com/41691825/r/il/edd9a5/5317212043/il_794xN.5317212043_ff2b.jpg",
  ];

  const [ratingvValue, setRatingValue] = React.useState<number | null>(2);
  const [color, setColor] = React.useState<string>("");
  const [quantity, setQuantity] = React.useState<number>(1);

  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
  };

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
      <div className="mt-10 flex w-full flex-row items-center justify-center">
        <div className="h-[530px] w-[152px] object-cover">
          <ImageSlider imageURLS={data} />
        </div>

        <img
          className="ml-3 h-[530px] w-[444px] rounded-[20px]"
          src="https://picsum.photos/444/530"
        />

        {/* Product Info */}
        <div className="ml-10 flex h-[530px] w-[590px] flex-col gap-2">
          <div className="font-['Inter'] text-[40px] font-bold text-black">
            One Life Graphic T-shirt
          </div>
          <Rating
            name="controlled"
            value={ratingvValue}
            onChange={(event, newvalue) => {
              setRatingValue(newvalue);
            }}
          />

          {/* Price */}
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="font-['Inter'] text-[32px] font-bold text-black">
              $260
            </div>
            <div className="font-['Inter'] text-[32px] font-bold text-black/30 line-through">
              $300
            </div>
            <div className="inline-flex h-[31px] items-center justify-center gap-3 rounded-[62px] bg-[#ff3333]/10 px-3.5 py-1.5">
              <div className="font-['Inter'] text-base font-medium text-[#ff3333]">
                -40%
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="w-[590px] font-['Inter'] text-base font-normal leading-snug text-black/60">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </div>
          <hr />
          {/*Select color*/}
          <div className="font-['Inter'] text-base font-normal text-black/60">
            Select Colors
          </div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"red"}>Red</MenuItem>
              <MenuItem value={"blue"}>Blue</MenuItem>
              <MenuItem value={"green"}>Green</MenuItem>
            </Select>
          </FormControl>
          <hr />
          {/*Quantity*/}
          <div className="flex justify-center items-center mt-auto">
            <div className="flex h-[52px] w-[170px] flex-row items-center justify-between rounded-[62px] bg-[#efefef] px-5 py-4">
              <ButtonGroup value={quantity} />
            </div>
            <>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#ffff",
                  borderRadius: "20px",
                  width: "400px",
                  height: "52px",
                    marginLeft: "20px",
                
                }}
              >
                Add to cart
              </Button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
