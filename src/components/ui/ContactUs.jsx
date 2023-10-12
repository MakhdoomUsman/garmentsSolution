import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const ContactUsFrom = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="grid md:grid-cols-12 grid-cols-1 items-center 2xl:gap-20 gap-10 xl:px-16">
          <div className=" md:col-span-7">
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
            <div className="grid pt-10 md:grid-cols-2 grid-cols-1 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="p-2.5 py-4 border outline-none rounded-xl border-bgDarkGray"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="p-2.5 py-4 border outline-none rounded-xl border-bgDarkGray"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-2.5 py-4 border outline-none rounded-xl border-bgDarkGray"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-2.5 py-4 border outline-none rounded-xl border-bgDarkGray"
              />
              <textarea
                type="text"
                placeholder="Your Message"
                className=" md:col-span-2 p-2.5 py-4 border outline-none rounded-xl border-bgDarkGray"
              />
              <button className="rounded-lg font-playFair hover:-translate-y-2.5 transition-all ease-in-out duration-300 hover:bg-bgDarkGray mt-5 bg-bgLightGray px-7 py-3.5 text-xl font-bold text-white">
                Send Message
              </button>
            </div>
          </div>
          <div className="  md:col-span-5 rounded-xl overflow-hidden">
            <Image
              src={`/image/contactusFrom/contactUsfrom.jpg`}
              alt="logo"
              className=" custom-img "
              fill
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsFrom;
