import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const Services = () => {
  return (
    <div className="2xl:px-20">
      <Container>
        <div className=" text-center">
          <h1 className="font-bold text-center text-bgLightGray font-playFair">
            Our Services
          </h1>
          <p className="font-bold text-center  text-[45px] text-bgGray font-playFair">
            Delivering The Highest Quality Fabrics
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-12 gap-5 py-10">
            <div className="rounded-lg text-center space-y-2.5 bg-bgDarkGray 2xl:p-10 p-7 border-2 border-bgDarkGray">
              <div className="w-24 mx-auto ">
                <Image
                  src={"/image/services/1.png"}
                  alt="logo"
                  className=" custom-img"
                  fill
                />
              </div>
              <p className="font-bold  text-[30px] text-bgGray font-playFair">
                Fabric Dyeing
              </p>
              <p className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti esse repellendus atque nulla, qui nesciunt!
              </p>
              <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white">
                Explore
              </button>
            </div>
            <div className="rounded-lg text-center space-y-2.5  p-10 border-2 border-bgLightGray">
              <div className="w-24 mx-auto ">
                <Image
                  src={"/image/services/2.png"}
                  alt="logo"
                  className=" custom-img"
                  fill
                />
              </div>
              <p className="font-bold  text-[30px] text-bgGray font-playFair">
                Satin Weaving
              </p>
              <p className="text-bgGray">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti esse repellendus atque nulla, qui nesciunt!
              </p>
              <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-bgGray">
                Explore
              </button>
            </div>
            <div className="rounded-lg text-center space-y-2.5  p-10 border-2 border-bgLightGray">
              <div className="w-24 mx-auto ">
                <Image
                  src={"/image/services/3.png"}
                  alt="logo"
                  className=" custom-img"
                  fill
                />
              </div>
              <p className="font-bold  text-[30px] text-bgGray font-playFair">
                Fabric Printing
              </p>
              <p className="text-bgGray">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti esse repellendus atque nulla, qui nesciunt!
              </p>
              <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-bgGray">
                Explore
              </button>
            </div>
          </div>
          <button className="rounded-lg font-playFair  hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
            More Service
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
