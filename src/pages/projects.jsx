import Container from "@/components/container/Container";
import BreadCrums from "@/components/ui/BreadCrums";
import ContactUsFrom from "@/components/ui/ContactUs";
import GetInTouch from "@/components/ui/GetInTouch";
import OurAllProjects from "@/components/ui/OurAllProjects";
import OurProjects from "@/components/ui/OurProjects";
import Priorities from "@/components/ui/Priorities";
import WhyUs from "@/components/ui/WhyUs";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="">
        <Head>
          <title>
            Garments Solutions Projects - Showcasing Innovation in Fashion and
            Technology
          </title>
          <meta
            name="description"
            content="Dive into our portfolio of projects at Garments Solutions. Witness the fusion of fashion and technology in every meticulously crafted garment."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BreadCrums name=" Our Projects" breadCrum={"All Projects"} />
        <OurAllProjects />
        <Priorities />
        <div className="bg-getInTouch relative bg-cover bg-center bg-no-repeat py-20">
          <div className="absolute top-0 left-0 h-full w-full bg-bgDarkGray/80"></div>

          <Container>
            <div className=" relative z-20 text-center mx-auto max-w-4xl">
              <h1 className="font-bold   text-white font-playFair">
                Specialist
              </h1>
              <p className="font-bold  xl:text-[45px] lg:text-[35px] md:text-[30px] text-[25px] text-bgLightGray font-playFair">
                What’s Our Features
              </p>
              <p className=" text-white">
                At Garments Solutions, our features set us apart. We pride
                ourselves on delivering excellence through a blend of precision,
                innovation, and commitment. From top-tier materials to advanced
                production techniques, and a relentless focus on quality, our
                features reflect our dedication to providing you with customized
                solutions that shine in every aspect.
              </p>
            </div>
            <div className=" relative z-20 mt-10 flex md:flex-row flex-col justify-evenly xl:gap-20 gap-10 text-center ">
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
                  Our quality products are designed for durability, safety, and
                  style.
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
                  Enjoy our competitive prices that offer affordability without
                  compromising quality.
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
                  Count on our 24/7 support for dedicated assistance whenever
                  you need it.
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
