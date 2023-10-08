import React, { useState } from "react";
import HeaderTop from "./ui/HeaderTop";
import Image from "next/image";
import Container from "./container/Container";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
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
          <div className="lg:flex hidden xl:gap-10 gap-5 text-lg font-medium  ">
            <Link href={"/"}>
              <p>Homepage</p>
            </Link>
            <Link href={"/services"}>
              <p>Services</p>
            </Link>
            <Link href={"/projects"}>
              <p>Projects</p>
            </Link>
            <p>Pages</p>
            <p>Contact</p>
          </div>
          <button className="rounded-lg lg:block hidden bg-bgLightGray px-7 py-2.5 text-xl font-bold text-white">
            Appointment
          </button>
          {!showMenu && (
            <div className="lg:hidden w-8 " onClick={() => setShowMenu(true)}>
              <Image
                src={"/image/icon/icons8-menu-24.png"}
                alt="logo"
                className=" custom-img "
                fill
              />
            </div>
          )}
        </div>
      </Container>
      <div
        className={`${
          showMenu ? "translate-y-0" : "-translate-y-full"
        } fixed lg:hidden h-full w-full z-40 bg-white px-10  top-0 duration-300 ease-linear transition left-0 `}
      >
        <div
          className=" w-8 absolute right-10 top-10 "
          onClick={() => setShowMenu(false)}
        >
          <Image
            src={"/image/icon/icons8-close-64.png"}
            alt="logo"
            className=" custom-img "
            fill
          />
        </div>
        <div className="flex lg:hidden mt-32 flex-col gap-10 xl:gap-10 text-lg font-medium  ">
          <p>Homepage</p>
          <p>Services</p>
          <p>Projects</p>
          <p>Pages</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
