import React from "react";
import HeaderTop from "./ui/HeaderTop";
import Image from "next/image";
import Container from "./container/Container";

const Header = () => {
  return (
    <div>
      <HeaderTop />
      <Container>
        <div className="flex py-5  justify-between items-center ">
          <div className=" w-52 ">
            <Image
              src={"/image/Logos/Logo-Cottone.png"}
              alt="logo"
              className=" custom-img "
              fill
            />
          </div>
          <div className="flex gap-10 text-lg font-medium  ">
            <p>Homepage</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Pages</p>
            <p>Contact</p>
          </div>
          <button className="rounded-lg bg-bgLightGray px-7 py-2.5 text-xl font-bold text-white">
            Appointment
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
