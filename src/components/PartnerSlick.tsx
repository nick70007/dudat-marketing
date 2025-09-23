import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function PartnerSlick() {
  const settings = {
    dots: true,
    infinite: true,
    loops: true,
    speed: 500,
    slidesToShow: 6, // default for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // <=1280px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // <=1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // <=768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // <=480px
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-black mx-auto mt-10">
      <Slider {...settings}>
        <div><img src="/assets/images/partner/dennys.png" alt="slide1" /></div>
        <div><img src="/assets/images/partner/hurricane.jpg" alt="slide2" /></div>
        <div><img src="/assets/images/partner/rremc.png" alt="slide3" /></div>
        <div><img src="/assets/images/partner/wahoo.png" alt="slide4" /></div>
        <div><img src="/assets/images/partner/woodlands.png" alt="slide5" /></div>
        <div><img src="/assets/images/partner/ziosk.png" alt="slide6" /></div>
        <div><img src="/assets/images/partner/dennys.png" alt="slide1" /></div>
        <div><img src="/assets/images/partner/hurricane.jpg" alt="slide2" /></div>
        <div><img src="/assets/images/partner/rremc.png" alt="slide3" /></div>
        <div><img src="/assets/images/partner/wahoo.png" alt="slide4" /></div>
        <div><img src="/assets/images/partner/woodlands.png" alt="slide5" /></div>
        <div><img src="/assets/images/partner/ziosk.png" alt="slide6" /></div>
      </Slider>
    </div>
  );
}