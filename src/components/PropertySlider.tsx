"use client";

import Image from "next/image";
import Slider from "react-slick";
import { CustomArrowProps } from "react-slick";

interface PropertySliderProps {
  images: string[];
  title: string;
}

export default function PropertySlider({ images, title }: PropertySliderProps) {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Slider {...sliderSettings}>
        {images.map((imageFile, idx) => (
          <div key={idx} className="relative w-full h-[600px] overflow-hidden">
            <Image
              src={imageFile}
              alt={`Property image ${idx + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute z-10 top-[50%] left-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 cursor-pointer flex justify-center items-center`}
      style={{ transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      ⬅️
    </div>
  );
}

function NextArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute z-10 top-[50%] right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 cursor-pointer flex justify-center items-center`}
      style={{ transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      ➡️
    </div>
  );
}
