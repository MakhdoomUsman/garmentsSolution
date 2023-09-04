import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const Client = () => {
  return (
    <div>
      <Container>
        <h1 className="font-bold text-center text-bgLightGray font-playFair">
          Client
        </h1>
        <p className="font-bold text-center  xl:text-[45px] text-[35px] text-bgGray font-playFair">
          Trusted by world{"'"}s companies.
        </p>
        <div className="grid lg:grid-cols-4 sm:max-w-full max-w-xs mx-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:mx-20 items-center my-20 justify-center 2xl:gap-x-28 gap-10">
          <div className="p-2.5">
            <Image
              src={"/image/client/client1.png"}
              alt="logo"
              className=" custom-img grayscale "
              fill
            />
          </div>
          <div className="p-2.5">
            <Image
              src={"/image/client/client1.png"}
              alt="logo"
              className=" custom-img grayscale"
              fill
            />
          </div>
          <div className="p-2.5">
            <Image
              src={"/image/client/client1.png"}
              alt="logo"
              className=" custom-img grayscale"
              fill
            />
          </div>
          <div className="p-2.5">
            <Image
              src={"/image/client/client1.png"}
              alt="logo"
              className=" custom-img grayscale"
              fill
            />
          </div>
          <div className="p-2.5">
            <Image
              src={"/image/client/client1.png"}
              alt="logo"
              className=" custom-img grayscale"
              fill
            />
          </div>
          <div className="p-2.5">
            <Image
              src={"/image/client/client1.png"}
              alt="logo"
              className=" custom-img grayscale"
              fill
            />
          </div>
          <div className="p-2.5">
            <Image
              src={"/image/client/client1.png"}
              alt="logo"
              className=" custom-img grayscale"
              fill
            />
          </div>
          <div className="p-2.5">
            <Image
              src={"/image/client/client1.png"}
              alt="logo"
              className=" custom-img grayscale"
              fill
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Client;
