import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import { useRouter } from "next/router";

const Services = ({ allServices }) => {
  const route = useRouter();
  return (
    <div className="2xl:px-20 my-10">
      <Container>
        <div className=" text-center">
          <h1 className="font-bold text-center text-bgLightGray font-playFair">
            Our Services
          </h1>
          <p className="font-bold text-center xl:text-[45px] lg:text-[35px] md:text-[30px] text-[25px] text-bgGray font-playFair">
            Delivering The Highest Quality Fabrics
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-12 gap-5 py-10">
            {allServices?.map((data, ind) => (
              <div
                key={ind}
                className={` ${
                  ind == 0 && "bg-bgDarkGray"
                } rounded-lg hover:scale-105 transition duration-300 ease-in-out group text-center space-y-2.5  2xl:p-10 p-7 border-2 border-bgDarkGray`}
              >
                <div className="w-24 mx-auto ">
                  <Image
                    src={`/image/services/${data?.img}`}
                    alt="logo"
                    className=" custom-img"
                    fill
                  />
                </div>
                <p className="font-bold  text-[30px] text-bgGray font-playFair">
                  {data?.name}
                </p>
                <p className={`${ind == 0 && "text-white"}`}>{data?.disc}</p>
                <button
                  onClick={() => route.push(`/services/${data?.slug}`)}
                  className={`${
                    ind == 0 ? "text-white" : "text-bgGray"
                  }  rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-linear  duration-500 mt-5 px-7 py-3.5 text-xl z-10 font-bold `}
                >
                  Explore <span className="font-bold font-mono">{">"}</span>
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => route.push("/services")}
            className="rounded-lg font-playFair  hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white"
          >
            More Service
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
