import Container from "@/components/container/Container";
import Link from "next/link";
import React from "react";

const Poster = () => {
  return (
    <div>
      <div className=" bg-mainBackground bg-no-repeat bg-cover bg-center">
        <div className="h-full w-full py-32 bg-black/50">
          <Container>
            <div className=" max-w-2xl ml-auto    ">
              <h1 className="xl:text-[65px] lg:text-[55px] text-[45px] font-bold text-bgLightGray font-playFair">
                Stylish Uniforms for Industrial Excellence.
              </h1>
              <p className="text-white">
                Discover the perfect blend of safety and style with our quality
                workwear, tailored for your team{"'"}s success
              </p>
              <Link href={"pricing"}>
                <button className="rounded-lg hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
                  Get Started
                </button>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Poster;
