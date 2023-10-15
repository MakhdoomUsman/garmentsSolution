import Container from "@/components/container/Container";
import BreadCrums from "@/components/ui/BreadCrums";
import ContactUsFrom from "@/components/ui/ContactUs";
import OurExperts from "@/components/ui/OurExperts";
import OurProcess from "@/components/ui/OurProcess";
import Priorities from "@/components/ui/Priorities";
import WhoWeAre from "@/components/ui/WhoWeAre";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <BreadCrums name="About Us" breadCrum={"About"} />
      <Container>
        <div className="xl:py-20 py-5 xl:px-20">
          <div className=" text-center">
            <h1 className="font-bold   text-bgLightGray font-playFair">
              About Us
            </h1>
            <p className="font-bold  xl:text-[45px] text-[35px] text-bgGray font-playFair">
              20+ Years Of Experience In Textile & <br /> Garment Industry
            </p>
            <div className="text-left grid md:grid-cols-2 py-5 xl:gap-20 md:gap-10 gap-5">
              <p>
                At Garments Solutions, we pride ourselves on being a beacon of
                excellence in the textile and garment industry. With a rich
                history steeped in craftsmanship and innovation, we{"'"}ve
                emerged as a trusted partner in delivering tailored solutions to
                our diverse clientele. Our journey is a testament to our
                unwavering commitment to quality. <br />
                Garments Solutions stands as a testament to our dedication to
                creating a lasting impression with every garment we produce – an
                impression of style, comfort, and unswerving excellence. <br />
                Your satisfaction fuels our passion, and we eagerly anticipate
                the opportunity to continue this journey of artistry, customer
                delight, and innovative solutions.
              </p>
              <p>
                From the very inception of our work process, we make it our
                mission to select the finest materials. We prioritize
                durability, comfort, and aesthetics, ensuring that every piece
                we craft meets the highest standards. Our skilled artisans
                employ cutting-edge production techniques, fusing precision with
                craftsmanship to bring your unique vision to life. We understand
                that each project is distinctive, and that{"'"}s why we offer
                extensive customization options to cater to your individual
                needs. <br /> Our ultimate goal is to create garments and
                products that not only meet but exceed your expectations,
                reflecting our commitment to delivering quality in every aspect
                of our work.
              </p>
            </div>
          </div>
          <div className="md:rounded-xl mt-10  rounded-lg overflow-hidden ">
            <Image
              src={"/image/servicedtail/detailSerrvice1.jpg"}
              alt="logo"
              className=" custom-img "
              fill
            />
          </div>
        </div>
      </Container>
      <WhoWeAre />
      <Priorities />
      <div className="bg-getInTouch relative bg-cover bg-center bg-no-repeat py-20">
        <div className="absolute top-0 left-0 h-full w-full bg-bgDarkGray/80"></div>

        <Container>
          <div className=" relative z-20 text-center mx-auto max-w-4xl">
            <h1 className="font-bold   text-white font-playFair">Specialist</h1>
            <p className="font-bold  xl:text-[45px] text-[35px] text-bgLightGray font-playFair">
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
                Count on our 24/7 support for dedicated assistance whenever you
                need it.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <OurProcess />
      <OurExperts />
    </div>
  );
};

export default AboutUs;
