import React from "react";
import Container from "../container/Container";

const Achievement = () => {
  return (
    <div className="bg-acheiveBackground my-10 xl:pb-40 py-20 relative xl:p-20 bg-center bg-cover bg-no-repeat">
      <div className="h-full w-full absolute top-0 left-0 bg-bgDarkGray/80 "></div>
      <Container>
        <div className=" relative grid xl:grid-cols-3 grid-cols-1 xl:gap-10 gap-5 z-20 ">
          <div className=" xl:order-1 order-2 justify-self-center text-center">
            <p className=" text-[70px]  font-bold text-white">50+</p>
            <p className=" text-xl text-bgLightGray">Satisfied Customers</p>
            <p className=" text-[70px] font-bold text-white mt-10">15+</p>
            <p className=" text-xl text-bgLightGray">Professional Worker</p>
          </div>
          <div className=" xl:order-2 order-1">
            <h1 className="font-bold text-center text-white font-playFair">
              Achievement
            </h1>
            <p className="font-bold text-center  xl:text-[45px] lg:text-[35px] md:text-[30px] text-[25px] text-bgLightGray font-playFair">
              Over 1320+ Complete work & Still counting
            </p>
            <p className="text-white text-center">
              Celebrating a milestone of success, we{"'"}ve accomplished over
              1280 projects. Our dedication to quality and commitment to
              excellence have allowed us to achieve this impressive milestone,
              showcasing our expertise and reliability in delivering outstanding
              solutions
            </p>
          </div>
          <div className="order-3 justify-self-center text-center">
            <p className=" text-[70px]  font-bold text-white">1320</p>
            <p className=" text-xl text-bgLightGray">Successful projects</p>
            <p className=" text-[70px] font-bold text-white mt-10">21+</p>
            <p className=" text-xl text-bgLightGray">Years of experience</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Achievement;
