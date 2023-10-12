import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const OurProcess = () => {
  return (
    <div className=" py-20 xl:px-20">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
          <div className="space-y-5">
            <div className="grid grid-cols-4 items-center md:gap-5 gap-2.5">
              <div className=" ">
                <Image
                  src={`/image/process/process1.png`}
                  alt="logo"
                  className=" custom-img "
                  fill
                />
              </div>
              <div className=" col-span-3">
                <h1 className="font-bold  xl:text-2xl lg:text-xl md:text-lg  text-bgGray font-playFair">
                  Choose The Best Material
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit at
                  faucibus est
                </p>
              </div>
            </div>
            <hr className=" border-slate-900" />
            <div className="grid grid-cols-4 items-center md:gap-5 gap-2.5">
              <div className=" ">
                <Image
                  src={`/image/process/process2.png`}
                  alt="logo"
                  className=" custom-img "
                  fill
                />
              </div>
              <div className=" col-span-3">
                <h1 className="font-bold  xl:text-2xl lg:text-xl md:text-lg  text-bgGray font-playFair">
                  Start Production
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit at
                  faucibus est
                </p>
              </div>
            </div>
            <hr className=" border-slate-900" />
            <div className="grid grid-cols-4 items-center md:gap-5 gap-2.5">
              <div className=" ">
                <Image
                  src={`/image/process/process3.png`}
                  alt="logo"
                  className=" custom-img "
                  fill
                />
              </div>
              <div className=" col-span-3">
                <h1 className="font-bold  xl:text-2xl lg:text-xl text-lg  text-bgGray font-playFair">
                  Ready To Export
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit at
                  faucibus est
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <h1 className="font-bold   text-bgLightGray font-playFair">
                Our Process
              </h1>
              <p className="font-bold  xl:text-[45px] text-[35px] text-bgGray font-playFair">
                How We Works
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et fringilla diam, et aliquet libero. Cras pulvinar elementum
                enim, at faucibus est.
              </p>
            </div>
            <div className=" flex md:flex-row flex-col xl:gap-10 gap-5 md:justify-start justify-center items-center">
              <span className=" text-[70px] font-bold text-bgGray shrink-0">
                300+
              </span>{" "}
              <span className="font-bold font-playFair lg:text-lg text-bgLightGray">
                We Have More Than 300+ Clients Around The World
              </span>
            </div>
            <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProcess;
