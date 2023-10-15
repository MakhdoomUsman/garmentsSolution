import Container from "@/components/container/Container";
import BreadCrums from "@/components/ui/BreadCrums";
import OurProcess from "@/components/ui/OurProcess";
import Priorities from "@/components/ui/Priorities";
import WhoWeAre from "@/components/ui/WhoWeAre";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <div>
      <BreadCrums name="Our Team" breadCrum={"Team"} />
      <Container>
        <div className=" py-20 text-center">
          <h1 className="font-bold   text-bgLightGray font-playFair">
            Our Expert
          </h1>
          <p className="font-bold  xl:text-[45px] text-[35px] text-bgGray font-playFair">
            Our Professional Team
          </p>
        </div>
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
      </Container>
      <WhoWeAre />
      <Priorities />
      <OurProcess />
    </div>
  );
};

export default OurTeam;
