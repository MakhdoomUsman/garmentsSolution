import React from "react";
import Container from "./container/Container";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-bgDarkGray py-10">
      <Container>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  lg:px-20 lg:gap-10 gap-5">
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
              At Garments Solutions, we specialize in crafting industrial
              workwear for your workforce{"'"}s success. With a focus on pants,
              shirts, and hoodies, we{"'"}re your trusted source for style,
              durability, and safety.
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
            <Link href={"/services"}>
              <p className=" text-white">Services</p>
            </Link>
            <Link href={"/projects"}>
              <p className=" text-white">Projects</p>
            </Link>
            <Link href={"/pricing"}>
              <p className=" text-white">Pricing</p>
            </Link>
          </div>
          <div className="space-y-5 lg:justify-self-center">
            <p className="font-bold text-[25px] text-bgLightGray font-playFair">
              Reached Out
            </p>
            <Link href={"/about-us"}>
              <p className=" text-white">About Us</p>
            </Link>
            <Link href={"/contact-us"}>
              <p className=" text-white">Contact Us</p>
            </Link>

            <Link href={"/our-team"}>
              <p className=" text-white">Our Team</p>
            </Link>
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
