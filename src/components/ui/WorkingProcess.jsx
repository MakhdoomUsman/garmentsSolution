import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const WorkingProcess = () => {
  return (
    <div className="my-20">
      <Container>
        <h1 className="font-bold text-center text-bgLightGray font-playFair">
          Working Process
        </h1>
        <p className="font-bold text-center  xl:text-[45px] text-[35px] text-bgGray font-playFair">
          How Its Work
        </p>
        <div className="grid my-10 md:grid-cols-2 grid-cols-1 items-center gap-x-5 lg:gap-y-20 md:gap-y-10 gap-y-5 ">
          <div className="order-1">
            <div className="md:rounded-xl rounded-lg overflow-hidden ">
              <Image
                src={"/image/workingprocess/working1.jpg"}
                alt="logo"
                className=" custom-img "
                fill
              />
            </div>
          </div>
          <div className=" order-2 lg:px-16 md:space-y-5 space-y-3">
            <h1 className="font-bold  xl:text-[35px] lg:text-3xl md:text-2xl text-xl text-bgGray font-playFair">
              Choose The Best Material
            </h1>
            <p className=" md:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eum, repellat ab recusandae tenetur et, eaque delectus totam, sint
              exercitationem unde id minima? Architecto distinctio quam
              adipisci. Cupiditate rerum laudantium voluptate. Doloremque cu
            </p>

            <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
              Veiw Details
            </button>
          </div>
          <div className=" lg:px-16 md:space-y-5 space-y-3 md:order-3  order-4">
            <h1 className="font-bold  xl:text-[35px] lg:text-3xl md:text-2xl text-xl text-bgGray font-playFair">
              Start Production
            </h1>
            <p className=" md:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eum, repellat ab recusandae tenetur et, eaque delectus totam, sint
              exercitationem unde id minima? Architecto distinctio quam
              adipisci. Cupiditate rerum laudantium voluptate. Doloremque cum
            </p>

            <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
              Veiw Details
            </button>
          </div>
          <div className="md:order-4 order-3 ">
            <div className="md:rounded-xl rounded-lg overflow-hidden ">
              <Image
                src={"/image/workingprocess/working1.jpg"}
                alt="logo"
                className=" custom-img "
                fill
              />
            </div>
          </div>
          <div className="order-5 ">
            <div className="md:rounded-xl rounded-lg overflow-hidden ">
              <Image
                src={"/image/workingprocess/working1.jpg"}
                alt="logo"
                className=" custom-img "
                fill
              />
            </div>
          </div>
          <div className=" lg:px-16 order-6 md:space-y-5 space-y-3">
            <h1 className="font-bold  xl:text-[35px] lg:text-3xl md:text-2xl text-xl text-bgGray font-playFair">
              Ready To Export
            </h1>
            <p className=" md:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eum, repellat ab recusandae tenetur et, eaque delectus totam, sint
              exercitationem unde id minima? Architecto distinctio quam
              adipisci. Cupiditate rerum laudantium voluptate. Doloremque cum
            </p>

            <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
              Veiw Details
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkingProcess;
