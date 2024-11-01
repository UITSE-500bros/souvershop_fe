import React from "react";

type ImageSliderProps = {
  imageURLS: string[];
};

function ImageSlider({ imageURLS }: ImageSliderProps) {
  return (
    <div className="flex h-full  w-full flex-col overflow-y-scroll ">
      {imageURLS.map((url, index) => (
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
