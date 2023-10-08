import Container from "@/components/container/Container";
import Achievement from "@/components/ui/Achievement";
import BreadCrums from "@/components/ui/BreadCrums";
import Client from "@/components/ui/Client";
import ServiceDetails from "@/components/ui/ServiceDetails";
import WorkingProcess from "@/components/ui/WorkingProcess";
import { useRouter } from "next/router";
import React from "react";

const SlugServices = () => {
  const allServices = [
    {
      name: "Fabric Dyeing",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      slug: "fabric",
      img: "1.png",
    },
    {
      name: "Satin Weaving",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      slug: "Satin",
      img: "2.png",
    },
    {
      name: "Fabric Printing",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      slug: "printing",
      img: "3.png",
    },
    {
      name: "Garment Stitching",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      slug: "stitching",
      img: "4.png",
    },
    {
      name: "Linen Weaving",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      slug: "weaving",
      img: "5.png",
    },
    {
      name: "Custome Apparel",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      slug: "apparel",
      img: "6.png",
    },
  ];
  const route = useRouter();
  console.log(route);
  return (
    <div>
      {allServices.map(
        (data, ind) =>
          route.query.slug == data?.slug && (
            <div className="" key={ind}>
              <BreadCrums name={data?.name} breadCrum={data?.name} />
              <ServiceDetails details={data} />
              <WorkingProcess />
              <Achievement />
              <Client />
            </div>
          )
      )}
      ;<div className="">Services SLug</div>
    </div>
  );
};

export default SlugServices;
