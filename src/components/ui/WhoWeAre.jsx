import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="2xl:px-20 py-20">
      <Container>
        <div className="grid md:grid-cols-5 grid-cols-1 xl:gap-10 gap-5 items-center">
          <div className=" rounded-xl flex relative md:col-span-2 overflow-hidden">
            <Image
              src={"/image/mainPage/second.jpg"}
              alt="logo"
              className=" custom-img "
              fill
            />
            <div className="absolute top-5 left-5 z-10  p-5 bg-bgDarkGray rounded-xl">
              <div className="w-5 ">
                <Image
                  src={"/image/icon/check.png"}
                  alt="logo"
                  className=" custom-img invert"
                  fill
                />
              </div>
            </div>
          </div>
          <div className=" md:col-span-3  max-w-[550px] mx-auto text-center">
            <h1 className="font-bold text-bgLightGray font-playFair">
              Who We Are
            </h1>
            <p className="font-bold text-[45px] text-bgGray font-playFair">
              The Best Solution For Your Textile And Garment Needs
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              fringilla diam, et aliquet libero. Cras pulvinar elementum enim,
              at faucibus est accumsan et.
            </p>
            <div className="space-y-5">
              <div className="flex gap-5 md:justify-start justify-center items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Best Quality Standards
              </div>
              <div className="flex gap-5 md:justify-start justify-center items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                100% Satisfaction Guarantee
              </div>
              <div className="flex gap-5 md:justify-start justify-center items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
            </div>
            <div className=" flex gap-10 md:justify-start justify-center items-center">
              <span className=" text-[70px] font-bold text-bgDarkGray ">
                20+
              </span>{" "}
              <span className="font-bold font-playFair text-lg">
                Years Experience
              </span>
            </div>
            <button className="rounded-lg hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
              More About Us
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhoWeAre;
