import React from "react";
import Container from "../container/Container";

const BreadCrums = ({ name, breadCrum }) => {
  return (
    <div className="lg:px-20 md:px-10 ">
      <Container>
        <div className=" bg-serviceBreadCrum relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden md:p-24 px-5 py-20 ">
          <div className="absolute h-full w-full top-0 left-0 bg-bgDarkGray/80 z-0"></div>
          <div className="z-10 relative">
            <h1 className="2xl:text-[65px] xl:text-[55px] lg:text-[45px] md:text-[40px] text-[30px] text-center font-bold font-playFair text-bgLightGray">
              {name}
            </h1>
            <div className="flex text-white items-center mt-5 justify-center md:gap-8 gap-5">
              <p>Home</p> <p>{">"}</p> <p>{breadCrum}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrums;
