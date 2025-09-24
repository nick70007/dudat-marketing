import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dennyLogo from '../assets/images/partner/dennys.png';
import hurricaneLogo from '../assets/images/partner/hurricane.jpg';
import rremcLogo from '../assets/images/partner/rremc.png';
import wahooLogo from '../assets/images/partner/wahoo.png';
import woodlandsLogo from '../assets/images/partner/woodlands.png';
import zioskLogo from '../assets/images/partner/ziosk.png';

export function PartnerSlick() {
  const settings = {
    dots: true,
    infinite: true,
    loops: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-black mx-auto mt-10">
      <Slider {...settings}>
        <div><img src={dennyLogo} alt="Denny's" /></div>
        <div><img src={hurricaneLogo} alt="Hurricane" /></div>
        <div><img src={rremcLogo} alt="Rremc" /></div>
        <div><img src={wahooLogo} alt="Wahoo" /></div>
        <div><img src={woodlandsLogo} alt="Woodlands" /></div>
        <div><img src={zioskLogo} alt="Ziosk" /></div>
        <div><img src={dennyLogo} alt="Denny's" /></div>
        <div><img src={hurricaneLogo} alt="Hurricane" /></div>
        <div><img src={rremcLogo} alt="Rremc" /></div>
        <div><img src={wahooLogo} alt="Wahoo" /></div>
        <div><img src={woodlandsLogo} alt="Woodlands" /></div>
        <div><img src={zioskLogo} alt="Ziosk" /></div>
      </Slider>
    </div>
  );
}