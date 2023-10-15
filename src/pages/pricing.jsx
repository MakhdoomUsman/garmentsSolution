import Container from "@/components/container/Container";
import BreadCrums from "@/components/ui/BreadCrums";
import ContactUsFrom from "@/components/ui/ContactUs";
import Image from "next/image";
import React from "react";

const PricingPackage = () => {
  return (
    <div className="">
      <BreadCrums name="Pricing Plan" breadCrum={"Pricing"} />

      <Container>
        <div className="xl:px-20 py-10">
          <div className=" text-center">
            <h1 className="font-bold   text-bgLightGray font-playFair">
              Pricing Plans
            </h1>
            <p className="font-bold  xl:text-[45px] text-[35px] text-bgGray font-playFair">
              Choose Your Plan.
            </p>
            <p>
              Select from our range of tailored project plans to meet your
              specific requirements. Each plan offers a unique blend of features
              and benefits to suit your needs perfectly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-28 gap-10 py-10">
            <div className=" space-y-7">
              <h1 className="font-bold xl:text-3xl md:text-2xl text-xl   text-bgGray font-playFair">
                Standard
              </h1>
              <p>
                Our Standard plan is ideal for those seeking a budget-friendly
                yet efficient solution. It covers the essentials, ensuring your
                project is in good hands.
              </p>
              <h1 className="font-bold xl:text-3xl md:text-2xl text-xl   text-bgGray font-playFair">
                50k
              </h1>
              <button className="rounded-lg w-full font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
                Choose Plan
              </button>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Best Quality Standards
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                100% Satisfaction Guarantee
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
            </div>
            {/* <hr className=" border-2 border-bgGray"/> */}
            <div className=" space-y-7">
              <h1 className="font-bold xl:text-3xl md:text-2xl text-xl   text-bgGray font-playFair">
                Premium
              </h1>
              <p>
                Step up to our Premium plan for an elevated experience. Enjoy
                enhanced features and dedicated support, designed to streamline
                your project to success.
              </p>
              <h1 className="font-bold xl:text-3xl md:text-2xl text-xl   text-bgGray font-playFair">
                150k
              </h1>
              <button className="rounded-lg w-full font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
                Choose Plan
              </button>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Best Quality Standards
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                100% Satisfaction Guarantee
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
            </div>
            <div className=" space-y-7">
              <h1 className="font-bold xl:text-3xl md:text-2xl text-xl   text-bgGray font-playFair">
                Ultimate
              </h1>
              <p>
                Our Ultimate plan is the pinnacle of project excellence. It
                provides a comprehensive package with top-tier features,
                priority support, and the assurance of remarkable results.
              </p>
              <h1 className="font-bold xl:text-3xl md:text-2xl text-xl   text-bgGray font-playFair">
                300k
              </h1>
              <button className="rounded-lg w-full font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
                Choose Plan
              </button>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Best Quality Standards
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                100% Satisfaction Guarantee
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
              <div className="flex gap-5 md:justify-start items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
              <div className="flex gap-5 md:justify-start  items-center">
                {" "}
                <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                  <Image
                    src={"/image/icon/check.png"}
                    alt="logo"
                    className=" custom-img invert"
                    fill
                  />
                </div>
                Quality Control System
              </div>
            </div>
          </div>
        </div>
      </Container>
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
      <ContactUsFrom />
    </div>
  );
};

export default PricingPackage;
