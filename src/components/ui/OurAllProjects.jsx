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
              See Our Project
            </p>
            <p>
              Explore our Project Module at Garments Solutions, showcasing
              excellence in every garment. From the polished Complete Uniform
              Kit to the timeless Shirt and Trouser Set, and the casual
              sophistication of our Polo Shirt Collection, each project reflects
              our commitment to quality and style.
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
              Complete Uniform Kit
            </p>
            <p className="text-white">
              Elevate your team{"'"}s professional image with our Complete
              Uniform Kit. Tailored for comfort and style, this kit encompasses
              everything your workforce needs – from meticulously designed
              shirts and pants to durable hoodies. Our attention to detail
              ensures a cohesive and polished look, reflecting the unity and
              identity of your team. Experience the perfect blend of
              functionality and fashion in every garment.
            </p>
            <button
              onClick={() => route.push("/projects/complete-uniform-kit")}
              className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white"
            >
              View Detail
            </button>
          </div>
          <div className=" text-center justify-center flex flex-col space-y-2.5 bg-bgDarkGray p-10 border-2 border-bgDarkGray">
            <p className="font-bold  text-[30px] text-bgGray font-playFair">
              Shirt and Trouser Set
            </p>
            <p className="text-white">
              Discover timeless sophistication with our Shirt and Trouser Set.
              Crafted from premium materials, this ensemble combines sleek,
              tailored shirts with comfortable, stylish trousers. Ideal for both
              formal and casual settings, each piece is designed to effortlessly
              enhance your wardrobe, offering versatility and a polished
              appearance. Elevate your everyday attire with this meticulously
              curated shirt and trouser pairing.
            </p>
            <button
              onClick={() => route.push("/projects/shirt-trouser")}
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
              Polo Shirt Collection
            </p>
            <p className="text-white">
              Experience casual elegance with Garments Solutions{"'"} Polo Shirt
              Collection. From classic designs to modern twists, our polo shirts
              are a perfect blend of comfort and style. Crafted from premium
              fabrics, these shirts offer a versatile wardrobe staple suitable
              for various occasions. Redefine casual sophistication with
              Garments Solutions{"'"} meticulously designed polo shirts
            </p>
            <button
              onClick={() => route.push("/projects/polo-shirt")}
              className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear hover:text-bgGray duration-500 mt-5 px-7 py-3.5 text-xl font-bold text-white"
            >
              View Detail
            </button>
          </div>
          <div className=" text-center justify-center flex flex-col space-y-2.5 bg-bgDarkGray p-10 border-2 border-bgDarkGray">
            <p className="font-bold  text-[30px] text-bgGray font-playFair">
              T-shirt collection
            </p>
            <p className="text-white">
              Elevate your casual wardrobe with Garments Solutions{"'"} T-shirt
              collection. Crafted from premium fabrics, our T-shirts seamlessly
              blend comfort with style, offering versatile and effortlessly chic
              options for every occasion. Redefine your casual wear with our
              meticulously designed T-shirts.
            </p>
            <button
              onClick={() => route.push("/projects/t-shirt")}
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
              Track Suit
            </p>
            <p className="text-white">
              Experience comfort and style with Garments Solutions{"'"} Track
              Suit collection. Our meticulously designed suits, crafted from
              premium materials, offer a perfect blend of functionality and
              fashion. Elevate your active lifestyle with our versatile and
              tailored Track Suits.
            </p>
            <button
              onClick={() => route.push("/projects/track-suit")}
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
