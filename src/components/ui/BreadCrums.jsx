import React from "react";
import Container from "../container/Container";

const BreadCrums = ({ name, breadCrum }) => {
  return (
    <div className="px-20">
      <Container>
        <div className=" bg-serviceBreadCrum relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden p-24 ">
          <div className="absolute h-full w-full top-0 left-0 bg-bgDarkGray/80 z-0"></div>
          <div className="z-10 relative">
            <h1 className="text-[65px] text-center font-bold font-playFair text-bgLightGray">
              {name}
            </h1>
            <div className="flex text-white items-center mt-5 justify-center gap-8">
              <p>Home</p> <p>{">"}</p> <p>{breadCrum}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrums;
