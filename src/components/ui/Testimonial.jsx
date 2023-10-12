import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div >
      <Container>
        <h1 className="font-bold text-center text-bgLightGray font-playFair">
          Testimonial
        </h1>
        <p className="font-bold text-center  xl:text-[45px] text-[35px] text-bgGray font-playFair">
          What They Said about Us
        </p>
        <div className="grid lg:grid-cols-2 2xl:mx-20 my-10 rounded-xl overflow-hidden">
          <div className="">
            <div className="relative flex h-full">
              <Image
                src={"/image/testimonial/testimonial.jpg"}
                alt="logo"
                className=" custom-img "
                fill
              />
            </div>
          </div>
          <div className=" bg-bgDarkGray xl:px-20 px-10 xl:py-20 py-10">
            <div className="xl:text-[150px] md:text-[140px] text-[100px] text-white  leading-[50px]">{'"'}</div>
            <h1 className="font-bold  xl:text-[35px] lg:text-[30px] md:text-[25px] text-xl  text-bgLightGray font-playFair">
              This Company Very Favorably Impressed With The Quality Of The Work
              Performed By Your Employees
            </h1>
            <p className=" text-white md:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              fringilla diam, et aliquet libero. Cras pulvinar elementum enim,
              at faucibus est accumsan et.
            </p>
            <p className="font-bold text-center text-[25px] text-bgLightGray font-playFair">
              Rose Mery
            </p>
            <p className=" text-white text-center">Customer</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
