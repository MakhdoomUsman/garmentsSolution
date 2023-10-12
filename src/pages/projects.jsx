import Container from "@/components/container/Container";
import BreadCrums from "@/components/ui/BreadCrums";
import ContactUsFrom from "@/components/ui/ContactUs";
import GetInTouch from "@/components/ui/GetInTouch";
import OurAllProjects from "@/components/ui/OurAllProjects";
import OurProjects from "@/components/ui/OurProjects";
import Priorities from "@/components/ui/Priorities";
import WhyUs from "@/components/ui/WhyUs";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="">
        <BreadCrums name=" Our Projects" breadCrum={"All Projects"} />
        <OurAllProjects />
        <Priorities />
        <div className="bg-getInTouch relative bg-cover bg-center bg-no-repeat py-20">
          <div className="absolute top-0 left-0 h-full w-full bg-bgDarkGray/80"></div>

          <Container>
            <div className=" relative z-20 text-center mx-auto max-w-xl">
              <h1 className="font-bold   text-white font-playFair">
                Specialist
              </h1>
              <p className="font-bold  xl:text-[45px] text-[35px] text-bgLightGray font-playFair">
                What’s Our Features
              </p>
              <p className=" text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="relative mx-auto max-w-5xl z-20 py-10 flex md:flex-row flex-col justify-evenly xl:gap-20 gap-10 text-center ">
              <div className=" flex flex-col gap-5 justify-center items-center">
                <div className=" w-16 bg-bgGray p-4 rounded-lg">
                  <Image
                    src={"/image/icon/like (1).png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                <h1 className="text-2xl font-bold font-playFair text-bgLightGray">
                  Quality Product
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className=" flex flex-col gap-5 justify-center items-center">
                <div className=" w-16 bg-bgGray p-4 rounded-lg">
                  <Image
                    src={"/image/icon/dollar-symbol.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                <h1 className="text-2xl font-bold font-playFair text-bgLightGray">
                  Competitive Price
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className=" flex flex-col gap-5 justify-center items-center">
                <div className=" w-16 bg-bgGray p-4 rounded-lg">
                  <Image
                    src={"/image/icon/24-hours.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                <h1 className="text-2xl font-bold font-playFair text-bgLightGray">
                  24/7 Support
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </Container>
        </div>
        <ContactUsFrom />
        <GetInTouch />
      </div>
    </div>
  );
};

export default Projects;
