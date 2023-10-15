import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const OurExperts = () => {
  return (
    <div className=" py-10 2xl:px-20">
      <Container>
        <div className=" text-center">
          <h1 className="font-bold   text-bgLightGray font-playFair">
            Our Expert
          </h1>
          <p className="font-bold  xl:text-[45px] text-[35px] text-bgGray font-playFair">
            Our Professional Team
          </p>
          <div className="grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 gap-5 py-10 ">
            <div className="space-y-2.5 group hover:shadow-xl border-bgGray transition-all duration-300 ease-linear hover:border-b-8 rounded-xl">
              <div className=" rounded-2xl group-hover:-translate-y-2 overflow-hidden transition-all duration-300 ease-linear">
                <Image
                  src={`/image/process/ownerAbout.jpg`}
                  alt="logo"
                  className=" custom-img "
                  fill
                />
              </div>
              <h1 className="font-bold text-xl  text-center  text-bgGray font-playFair">
                Our Expert
              </h1>
              <p className=" text-center">Owner & CEO</p>
            </div>
            <div className="space-y-2.5 group hover:shadow-xl border-bgGray transition-all duration-300 ease-linear hover:border-b-8 rounded-xl">
              <div className=" rounded-2xl group-hover:-translate-y-2 overflow-hidden transition-all duration-300 ease-linear">
                <Image
                  src={`/image/process/ownerAbout.jpg`}
                  alt="logo"
                  className=" custom-img "
                  fill
                />
              </div>
              <h1 className="font-bold text-xl  text-center  text-bgGray font-playFair">
                Our Expert
              </h1>
              <p className=" text-center">Owner & CEO</p>
            </div>
            <div className="space-y-2.5 group hover:shadow-xl border-bgGray transition-all duration-300 ease-linear hover:border-b-8 rounded-xl">
              <div className=" rounded-2xl group-hover:-translate-y-2 overflow-hidden transition-all duration-300 ease-linear">
                <Image
                  src={`/image/process/ownerAbout.jpg`}
                  alt="logo"
                  className=" custom-img "
                  fill
                />
              </div>
              <h1 className="font-bold text-xl  text-center  text-bgGray font-playFair">
                Our Expert
              </h1>
              <p className=" text-center">Owner & CEO</p>
            </div>
            <div className="space-y-2.5 group hover:shadow-xl border-bgGray transition-all duration-300 ease-linear hover:border-b-8 rounded-xl">
              <div className=" rounded-2xl group-hover:-translate-y-2 overflow-hidden transition-all duration-300 ease-linear">
                <Image
                  src={`/image/process/ownerAbout.jpg`}
                  alt="logo"
                  className=" custom-img "
                  fill
                />
              </div>
              <h1 className="font-bold text-xl  text-center  text-bgGray font-playFair">
                Our Expert
              </h1>
              <p className=" text-center">Owner & CEO</p>
            </div>
          </div>
          <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
            Learn More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default OurExperts;
