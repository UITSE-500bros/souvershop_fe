import React from "react";
import { Skeleton } from "@mui/material";

type ImageSliderProps = {
  imageURLS: string[] | undefined;
};

function ImageSlider({ imageURLS }: ImageSliderProps) {
  return (
    <div className="flex h-full w-full flex-col overflow-y-scroll">
      {imageURLS === undefined
        ? Array.from(new Array(3)).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width="100%"
              height="calc(100%/3)"
              className="my-3"
            />
          ))
        : imageURLS.map((url, index) => (
            <img
              key={index}
              src={url}
              alt="product"
              className="my-3 h-[calc(100%/3)] w-full object-cover"
            />
          ))}
    </div>
  );
}

export default ImageSlider;
