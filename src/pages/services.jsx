import Container from "@/components/container/Container";
import Achievement from "@/components/ui/Achievement";
import BreadCrums from "@/components/ui/BreadCrums";
import Client from "@/components/ui/Client";
import ServiceDetails from "@/components/ui/ServiceDetails";
import Services from "@/components/ui/Services";
import WorkingProcess from "@/components/ui/WorkingProcess";
import React from "react";

const services = () => {
  const allServices = [
    {
      name: "Fabric Dyeing",
      disc: "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.",
      slug: "fabric",
      img: "1.png",
    },
    {
      name: "Satin Weaving",
      disc: "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.",
      slug: "fabric",
      img: "2.png",
    },
    {
      name: "Fabric Printing",
      disc: "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.",
      slug: "fabric",
      img: "3.png",
    },
    {
      name: "Garment Stitching",
      disc: "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.",
      slug: "fabric",
      img: "4.png",
    },
    {
      name: "Linen Weaving",
      disc: "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.",
      slug: "fabric",
      img: "5.png",
    },
    {
      name: "Custome Apparel",
      disc: "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.",
      slug: "fabric",
      img: "6.png",
    },
  ];
  return (
    <div>
      <BreadCrums name="Our Services" breadCrum="All Services" />
      <Services allServices={allServices} />
      <Achievement />
      <Client />
    </div>
  );
};

export default services;
