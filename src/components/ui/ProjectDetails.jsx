import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const ProjectDetails = ({ details }) => {
  return (
    <div className="">
      <div className="my-10 xl:mx-20">
        <Container>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div className=" lg:col-span-2 xl:px-10 gap-20">
              <div className="space-y-5">
                <h1 className="font-bold  text-bgLightGray font-playFair">
                  Single Project
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
                {details.points?.map((data, ind) => (
                  <div
                    key={ind}
                    className="flex gap-5 md:justify-start justify-center lg:items-center"
                  >
                    {" "}
                    <div className="w-7 bg-bgLightGray rounded-full p-1 shrink-0">
                      <Image
                        src={"/image/icon/check.png"}
                        alt="logo"
                        className=" custom-img invert"
                        fill
                      />
                    </div>
                    {data}
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:p-10 p-5 rounded-xl space-y-6 bg-bgDarkGray w-full">
              <h1 className="font-bold text-2xl  text-bgLightGray font-playFair">
                Our Contact
              </h1>
              <p className=" text-white">
                Contacting us at Garments Solutions is your direct gateway to
                personalized assistance.
              </p>
              <hr />
              <div className="flex gap-2.5 text-white items-center">
                <div className=" shrink-0 w-5  ">
                  <Image
                    src={"/image/icon/email.png"}
                    alt="logo"
                    className=" custom-img convertColor"
                    fill
                  />
                </div>
                <p className=" truncate">garmetnsSolutions@gmail.com</p>
              </div>
              <div className="flex gap-2.5 text-white items-center">
                <div className="shrink-0  w-5  ">
                  <Image
                    src={"/image/icon/phone-call.png"}
                    alt="logo"
                    className=" custom-img convertColor"
                    fill
                  />
                </div>
                <p>(205) 555-0100</p>
              </div>
            </div>
          </div>
          <div className="md:rounded-xl mt-10 xl:mx-20 rounded-lg overflow-hidden ">
            <Image src={details.img} alt="logo" className=" custom-img " fill />
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 xl:px-28 py-10 gap-10">
            <p>{details?.pera1}</p>
            <p>{details?.pera2}</p>
          </div>
        </Container>
      </div>
      <div className="lg:p-20 py-10 bg-bgDarkGray">
        <Container>
          <p className="font-bold   xl:text-[45px] text-[35px] text-bgLightGray font-playFair">
            Summary
          </p>
          <div className=" text-white mt-5">
            {`Garments Solutions presents a diverse array of high-quality
            clothing, including the meticulously crafted "Complete Uniform Kit,"
            designed to elevate team professionalism with tailored excellence
            and premium materials. The "Shirt and Trouser Set" embodies timeless
            sophistication and versatility, showcasing the brand's commitment to
            precision and enduring elegance. The "Polo Shirt Collection"
            redefines casual elegance with versatile designs, premium fabric
            blends, tailored fits, customization options, and all-season
            comfort. Additionally, the "T-shirt Collection" offers a canvas of
            self-expression, featuring diverse styles, premium cotton comfort,
            graphic expressions, athleisure fusion, and tailored fits for all.`}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProjectDetails;
