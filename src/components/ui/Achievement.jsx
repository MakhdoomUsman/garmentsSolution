import React from "react";
import Container from "../container/Container";

const Achievement = () => {
  return (
    <div className="bg-acheiveBackground my-10 xl:pb-40 py-20 relative xl:p-20 bg-center bg-cover bg-no-repeat">
      <div className="h-full w-full absolute top-0 left-0 bg-bgDarkGray/80 "></div>
      <Container>
        <div className=" relative grid xl:grid-cols-3 grid-cols-1 xl:gap-10 gap-5 z-20 ">
          <div className=" justify-self-center text-center">
            <p className=" text-[70px]  font-bold text-white">5K+</p>
            <p className=" text-xl text-bgLightGray">Satisfied Customers</p>
            <p className=" text-[70px] font-bold text-white mt-10">250</p>
            <p className=" text-xl text-bgLightGray">Professional Worker</p>
          </div>
          <div className="">
            <h1 className="font-bold text-center text-white font-playFair">
              Achievement
            </h1>
            <p className="font-bold text-center  xl:text-[45px] text-[35px] text-bgLightGray font-playFair">
              Over 1300+ Complete work & Still counting
            </p>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="justify-self-center text-center">
            <p className=" text-[70px]  font-bold text-white">100K</p>
            <p className=" text-xl text-bgLightGray">Successful projects</p>
            <p className=" text-[70px] font-bold text-white mt-10">25+</p>
            <p className=" text-xl text-bgLightGray">Years of experience</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Achievement;
