import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const HeaderTop = () => {
  return (
    <div className="md:block hidden bg-bgDarkGray">
      <Container>
        <div className="flex items-center justify-between gap-5">
          <div className="  text-white flex gap-10 items-center py-2.5 font-normal">
            <div className="flex gap-2.5 items-center">
              <div className=" xl:w-5 lg:w-4 w-3 ">
                <Image
                  src={"/image/icon/email.png"}
                  alt="logo"
                  className=" custom-img convertColor"
                  fill
                />
              </div>
              garmetnsSolutions@gmail.com
            </div>
            <div className="flex gap-2.5 items-center">
              <div className=" xl:w-5 lg:w-4 w-3 ">
                <Image
                  src={"/image/icon/phone-call.png"}
                  alt="logo"
                  className=" custom-img convertColor"
                  fill
                />
              </div>
              (205) 555-0100
            </div>
          </div>
          <div className="  text-white flex gap-5 items-center py-2.5 font-normal">
            <div className=" xl:w-5 lg:w-4 w-3 ">
              <Image
                src={"/image/icon/facebook.png"}
                alt="logo"
                className=" custom-img invert"
                fill
              />
            </div>
            <div className=" xl:w-5 lg:w-4 w-3 ">
              <Image
                src={"/image/icon/youtube.png"}
                alt="logo"
                className=" custom-img invert"
                fill
              />
            </div>
            <div className=" xl:w-5 lg:w-4 w-3 ">
              <Image
                src={"/image/icon/twitter.png"}
                alt="logo"
                className=" custom-img invert"
                fill
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
