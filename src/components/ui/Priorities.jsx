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
            <p className="font-bold  xl:text-[45px] lg:text-[35px] md:text-[30px] text-[25px] text-bgGray font-playFair">
              Your Satisfaction Is Our Priority
            </p>
            <p>
              At Garments Solutions, we{"'"}re not just specialists in crafting
              quality garments; we{"'"}re specialists in making your
              satisfaction our utmost priority. Our dedicated team goes the
              extra mile to understand your needs and preferences, ensuring that
              every product we create not only meets but exceeds your
              expectations. Your contentment is our driving force, and we take
              pride in tailoring our services to guarantee your delight at every
              step of the journey.
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
              <p>Textile Designing</p>
              <div className="w-full mt-1 h-5 rounded-full overflow-hidden bg-bgLightGray">
                <div className="w-[50%] h-full  bg-bgGray">
                  <div className="px-3  text-xs text-white ">90%</div>
                </div>
              </div>
            </div>
            <div className="">
              <p>Textile Development</p>
              <div className="w-full mt-1 h-5 rounded-full overflow-hidden bg-bgLightGray">
                <div className="w-[60%] h-full  bg-bgGray">
                  <div className="px-3  text-xs text-white ">90%</div>
                </div>
              </div>
            </div>
            <div className="">
              <p>Textile Production</p>
              <div className="w-full mt-1 h-5 rounded-full overflow-hidden bg-bgLightGray">
                <div className="w-[85%] h-full  bg-bgGray">
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
