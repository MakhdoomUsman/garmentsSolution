import React from "react";

const GetInTouch = () => {
  return (
    <div className="bg-getInTouch relative w-full bg-center md:p-20 p-10 bg-no-repeat bg-cover ">
      <div className="absolute top-0 left-0 h-full w-full bg-bgDarkGray/80"></div>
      <div className="z-10 relative flex flex-col justify-center items-center space-y-5">
        <h1 className="font-bold text-center text-white font-playFair">
          Get in touch with us
        </h1>
        <p className="font-bold text-center  xl:text-[35px] lg:text-[30px] text-[25px] text-bgLightGray font-playFair">
          Do You Want Custom Project <br /> With Textilery? Contact Us Now
        </p>
        <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
