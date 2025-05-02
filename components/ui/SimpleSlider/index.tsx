"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SimpleSliderProps = {
  children: React.ReactNode;
};

export default function SimpleSlider({ children }: SimpleSliderProps) {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <Slider {...sliderSettings}>{children}</Slider>;
}
