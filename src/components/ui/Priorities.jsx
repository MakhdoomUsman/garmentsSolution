import React from "react";
import Container from "../container/Container";

const Priorities = () => {
  return (
    <div className="my-10">
      <Container>
        <div className="grid md:grid-cols-2 items-center xl:gap-20 gap-10 xl:px-16 ">
          <div className="">
            <h1 className="font-bold   text-bgLightGray font-playFair">
              Specialist
            </h1>
            <p className="font-bold  xl:text-[45px] text-[35px] text-bgGray font-playFair">
              Your Satisfaction Is Our Priority
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="space-y-10">
            <div className="">
              <p>Textile Services</p>
              <div className="w-full mt-1 h-5 rounded-full overflow-hidden bg-bgLightGray">
                <div className="w-[90%] h-full  bg-bgGray">
                  <div className="px-3  text-xs text-white ">90%</div>
                </div>
              </div>
            </div>
            <div className="">
              <p>Textile Services</p>
              <div className="w-full mt-1 h-5 rounded-full overflow-hidden bg-bgLightGray">
                <div className="w-[90%] h-full  bg-bgGray">
                  <div className="px-3  text-xs text-white ">90%</div>
                </div>
              </div>
            </div>
            <div className="">
              <p>Textile Services</p>
              <div className="w-full mt-1 h-5 rounded-full overflow-hidden bg-bgLightGray">
                <div className="w-[90%] h-full  bg-bgGray">
                  <div className="px-3  text-xs text-white ">90%</div>
                </div>
              </div>
            </div>
            <div className="">
              <p>Textile Services</p>
              <div className="w-full mt-1 h-5 rounded-full overflow-hidden bg-bgLightGray">
                <div className="w-[90%] h-full  bg-bgGray">
                  <div className="px-3  text-xs text-white ">90%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Priorities;
