import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const OurProjects = () => {
  return (
    <div className="my-20">
      <Container>
        <h1 className="font-bold md:text-left text-center text-bgLightGray font-playFair">
          Achievement
        </h1>
        <div className="md:flex md:text-left text-center gap-10 justify-between items-center">
          <div className="">
            <p className="font-bold  xl:text-[45px] text-[35px] text-bgGray font-playFair">
              See Our Project We Have Done
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="rounded-lg w-max font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
            View All Projects
          </button>
        </div>
      </Container>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">
        <div className="flex w-full h-full">
          <Image
            src={"/image/project/projects1.jpg"}
            alt="logo"
            className=" custom-img"
            fill
          />
        </div>
        <div className=" text-center justify-center flex flex-col space-y-2.5 bg-bgDarkGray p-10 border-2 border-bgDarkGray">
          <p className="font-bold  text-[30px] text-bgGray font-playFair">
            Cotton Fabric
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white">
            View Detail
          </button>
        </div>
        <div className="flex w-full h-full">
          <Image
            src={"/image/project/projects2.jpg"}
            alt="logo"
            className=" custom-img"
            fill
          />
        </div>
        <div className=" text-center justify-center flex flex-col space-y-2.5 bg-bgDarkGray p-10 border-2 border-bgDarkGray">
          <p className="font-bold  text-[30px] text-bgGray font-playFair">
            Fashion Project
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white">
            View Detail
          </button>
        </div>
        <div className="flex w-full h-full">
          <Image
            src={"/image/project/projects3.jpg"}
            alt="logo"
            className=" custom-img"
            fill
          />
        </div>
        <div className=" text-center justify-center flex flex-col space-y-2.5 bg-bgDarkGray p-10 border-2 border-bgDarkGray">
          <p className="font-bold  text-[30px] text-bgGray font-playFair">
            Leather Textile
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
