import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import { useRouter } from "next/router";

const OurAllProjects = () => {
  const route = useRouter();
  return (
    <div className="my-20 2xl:mx-20">
      <Container>
        <h1 className="font-bold text-center text-bgLightGray font-playFair">
          Achievement
        </h1>
        <div className=" text-center ">
          <div className="">
            <p className="font-bold  xl:text-[45px] text-[35px] text-bgGray font-playFair">
              See Our Project We Have Done
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 rounded-xl shadow overflow-hidden md:grid-cols-2 grid-cols-1 mt-10">
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
            <button
              onClick={() => route.push("/projects/cotton-fabric")}
              className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white"
            >
              View Detail
            </button>
          </div>
          <div className=" text-center justify-center flex flex-col space-y-2.5 bg-bgDarkGray p-10 border-2 border-bgDarkGray">
            <p className="font-bold  text-[30px] text-bgGray font-playFair">
              Fashion Project
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button
              onClick={() => route.push("/projects/fashion-project")}
              className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white"
            >
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
            <button
              onClick={() => route.push("/projects/leather-textile")}
              className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white"
            >
              View Detail
            </button>
          </div>
          <div className=" text-center justify-center flex flex-col space-y-2.5 bg-bgDarkGray p-10 border-2 border-bgDarkGray">
            <p className="font-bold  text-[30px] text-bgGray font-playFair">
              Satin Fabric
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button
              onClick={() => route.push("/projects/satin-fabric")}
              className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white"
            >
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
              Colorful Fabric
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button
              onClick={() => route.push("/projects/colorful-fabric")}
              className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white"
            >
              View Detail
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurAllProjects;
