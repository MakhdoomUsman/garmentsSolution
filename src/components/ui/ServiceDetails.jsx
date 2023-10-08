import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const ServiceDetails = ({ details }) => {
  return (
    <div className="my-10 2xl:mx-20">
      <Container>
        <div className=" px-20 gap-20">
          <div className="space-y-5">
            <h1 className="font-bold  text-bgLightGray font-playFair">
              Single Service
            </h1>
            <p className="font-bold   xl:text-[45px] text-[35px] text-bgGray font-playFair">
              {details?.name}
            </p>
            <p className=" space-y-3">
              {details?.disc.map((dat, ind) => (
                <div className="" key={ind}>
                  {dat}
                </div>
              ))}
            </p>
            <div className="md:rounded-xl rounded-lg overflow-hidden ">
              <Image
                src={"/image/servicedtail/detailSerrvice1.jpg"}
                alt="logo"
                className=" custom-img "
                fill
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
