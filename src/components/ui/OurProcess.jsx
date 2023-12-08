import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import Link from "next/link";

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
                  We prioritize durability, comfort, and aesthetics to lay the
                  foundation for outstanding end products
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
                  Our skilled artisans take the reins, utilizing cutting-edge
                  techniques to bring your vision to life. Precision and
                  craftsmanship define this phase, ensuring remarkable results.
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
                  Once passed, your items are carefully packed, ready for timely
                  and efficient export, no matter where you are.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <h1 className="font-bold   text-bgLightGray font-playFair">
                Our Process
              </h1>
              <p className="font-bold  xl:text-[45px] lg:text-[35px] md:text-[30px] text-[25px] text-bgGray font-playFair">
                How We Works
              </p>
              <p>
                Discover the essence of our work process. From selecting the
                finest materials to expert production and seamless export, our
                meticulous approach ensures the excellence that sets us apart.
              </p>
            </div>
            <div className=" flex md:flex-row flex-col xl:gap-10 gap-5 md:justify-start justify-center items-center">
              <span className=" text-[70px] font-bold text-bgGray shrink-0">
                50+
              </span>{" "}
              <span className="font-bold font-playFair lg:text-lg text-bgLightGray">
                We Have More Than 50+ Clients Around The World
              </span>
            </div>
            <Link href={"/contact-us"}>
              <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
                Reach out
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProcess;
