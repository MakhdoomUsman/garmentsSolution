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
              At the heart of our work process lies the critical decision of
              selecting the best materials. We approach this step with utmost
              care and precision. Our team conducts a thorough evaluation,
              considering factors like durability, comfort, and appearance. We
              work closely with our suppliers to source materials that not only
              meet but exceed industry standards. By choosing the finest
              materials, we lay the foundation for exceptional end products that
              are reliable, comfortable, and stylish.
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
              With the finest materials in hand, we commence the production
              phase. Our highly skilled and experienced team takes over,
              utilizing cutting-edge machinery and techniques. The process is a
              harmonious blend of art and science, where every detail matters.
              From the precise cutting of fabric to the intricacies of
              stitching, our professionals ensure that every garment meets our
              stringent quality benchmarks. We take pride in our craftsmanship,
              making sure that your vision is brought to life in the most
              exquisite way possible.
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
              As we near the final stage of our working process, your order goes
              through a meticulous quality assurance check. Our quality control
              experts rigorously inspect each item, ensuring it aligns with our
              commitment to excellence. When the products pass this stringent
              examination with flying colors, they are carefully packed, ready
              to embark on their journey to you or any destination worldwide.
              Our export procedures are streamlined, guaranteeing efficient and
              on-time delivery, no matter where you are. This stage signifies
              the culmination of our dedication to providing you with top-notch
              solutions tailored to your needs.
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
