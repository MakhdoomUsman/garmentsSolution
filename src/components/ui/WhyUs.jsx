import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="bg-bgDarkGray xl:px-40 py-16">
      <Container>
        <div className=" flex md:flex-row flex-col justify-evenly xl:gap-20 gap-10 text-center ">
          <div className=" flex flex-col gap-5 justify-center items-center">
            <div className=" w-16 bg-bgGray p-4 rounded-lg">
              <Image
                src={"/image/icon/like (1).png"}
                alt="logo"
                className=" custom-img invert"
                fill
              />
            </div>
            <h1 className="text-2xl font-bold font-playFair text-bgLightGray">
              Quality Product
            </h1>
            <p className="text-white">
              Our quality products are designed for durability, safety, and
              style.
            </p>
          </div>
          <div className=" flex flex-col gap-5 justify-center items-center">
            <div className=" w-16 bg-bgGray p-4 rounded-lg">
              <Image
                src={"/image/icon/dollar-symbol.png"}
                alt="logo"
                className=" custom-img invert"
                fill
              />
            </div>
            <h1 className="text-2xl font-bold font-playFair text-bgLightGray">
              Competitive Price
            </h1>
            <p className="text-white">
              Enjoy our competitive prices that offer affordability without
              compromising quality.
            </p>
          </div>
          <div className=" flex flex-col gap-5 justify-center items-center">
            <div className=" w-16 bg-bgGray p-4 rounded-lg">
              <Image
                src={"/image/icon/24-hours.png"}
                alt="logo"
                className=" custom-img invert"
                fill
              />
            </div>
            <h1 className="text-2xl font-bold font-playFair text-bgLightGray">
              24/7 Support
            </h1>
            <p className="text-white">
              Count on our 24/7 support for dedicated assistance whenever you
              need it.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
