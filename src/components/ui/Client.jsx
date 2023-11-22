import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Client = () => {
  const settings = {
    // dots: true,

    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 5000,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: "slider variable-width",
  };
  const images = [
    "almuhanadas.png",
    "aimn.jpg",
    "albarka.png",
    "alfatah.png",
    "alkaram.png",
    "alleif.png",
    "anthela.png",
    "arco.png",
    "banumukhtar.png",
    "berger.png",
    "buttcaterring.png",
    "binrasheed.png",
    "cakes.webp",
    "canon.svg",
    "changugRuba.png",
    "chawla.png",
    "delightENg.png",
    "doctor.png",
    // "dwp.png",
    "engi.jpeg",
    "haier.webp",
    "izhar.png",
    "maksons.jpeg",
    "mughal.png",
    "mughalEye.png",
    "nipon.png",
    "shafique.png",
    "shareef.jpeg",
    "sheikh.jpeg",
    "shmz.jpeg",
    "shuakat.jpg",
    "sigma.jpeg",
    "sphire.jpeg",
    "svaruba.png",
    "tlc.png",
    "tmgroups.png",
    "uniliver.svg",
    "wali.jpeg",
    "walifoods.png",
    "wawa.jpeg",
  ];
  return (
    <div>
      <Container>
        <h1 className="font-bold text-center text-bgLightGray font-playFair">
          Client
        </h1>
        <p className="font-bold text-center  xl:text-[45px] text-[35px] text-bgGray font-playFair">
          Trusted by world{"'"}s companies.
        </p>
        <div className="  my-10">
          <Slider {...settings}>
            {images.map((data, ind) => (
              <div className=" px-10 h-full my-auto " key={ind}>
                <Image
                  src={`/image/client/${data}`}
                  alt="logo"
                  className=" custom-img"
                  fill
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Client;
