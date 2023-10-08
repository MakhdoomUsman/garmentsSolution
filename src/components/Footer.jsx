import React from "react";
import Container from "./container/Container";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-bgDarkGray py-20">
      <Container>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  lg:px-20 xl:gap-20 lg:gap-10 gap-5">
          <div className=" space-y-5">
            <div className=" w-52 ">
              <Image
                src={"/image/Logos/Logo-Cottone.png"}
                alt="logo"
                className=" custom-img invert"
                fill
              />
            </div>
            <p className=" text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Pariatur, amet.
            </p>
            <div className="  text-white flex gap-5 items-center py-2.5 font-normal">
              <div className=" w-5  ">
                <Image
                  src={"/image/icon/facebook.png"}
                  alt="logo"
                  className=" custom-img convertColor"
                  fill
                />
              </div>
              <div className=" w-5  ">
                <Image
                  src={"/image/icon/youtube.png"}
                  alt="logo"
                  className=" custom-img convertColor"
                  fill
                />
              </div>
              <div className=" w-5  ">
                <Image
                  src={"/image/icon/twitter.png"}
                  alt="logo"
                  className=" custom-img convertColor"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="space-y-5 lg:justify-self-center">
            <p className="font-bold text-[25px] text-bgLightGray font-playFair">
              Our Services
            </p>
            <p className=" text-white">Fabric Dyeing</p>
            <p className=" text-white">Satin Weaving</p>
            <p className=" text-white">Fabric Printing</p>
            <p className=" text-white">Garment Stitching</p>
          </div>
          <div className="space-y-5 lg:justify-self-center">
            <p className="font-bold text-[25px] text-bgLightGray font-playFair">
              Pages
            </p>
            <p className=" text-white">About Us</p>
            <p className=" text-white">Services</p>
            <p className=" text-white">Projects</p>
            <p className=" text-white">Our Team</p>
          </div>
          <div className="space-y-5">
            <p className="font-bold text-[25px] text-bgLightGray font-playFair">
              Contact
            </p>
            <div className="flex gap-2.5 text-white items-center">
              <div className=" shrink-0 xl:w-5 lg:w-4 w-3 ">
                <Image
                  src={"/image/icon/email.png"}
                  alt="logo"
                  className=" custom-img convertColor"
                  fill
                />
              </div>
              <p>garmetnsSolutions@gmail.com</p>
            </div>
            <div className="flex gap-2.5 text-white items-center">
              <div className="shrink-0  xl:w-5 lg:w-4 w-3 ">
                <Image
                  src={"/image/icon/phone-call.png"}
                  alt="logo"
                  className=" custom-img convertColor"
                  fill
                />
              </div>
              <p>(205) 555-0100</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
