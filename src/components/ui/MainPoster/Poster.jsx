import Container from "@/components/container/Container";
import React from "react";

const Poster = () => {
  return (
    <div>
      <div className=" bg-mainBackground bg-no-repeat bg-cover bg-center">
        <div className="h-full w-full py-32 bg-black/50">
          <Container>
            <div className=" max-w-2xl ml-auto    ">
              <h1 className="xl:text-[65px] lg:text-[55px] text-[45px] font-bold text-bgLightGray font-playFair">
                The Best Solution For Your Textile And Garment Needs
              </h1>
              <p className="text-white">
                Morbi tristique senectus et netus et malesuada fames ac. Nunc
                vel risus commodo viverra. Non pulvinar neque laoreet
                suspendisse interdum.{" "}
              </p>
              <button className="rounded-lg hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
                Get Started
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Poster;
