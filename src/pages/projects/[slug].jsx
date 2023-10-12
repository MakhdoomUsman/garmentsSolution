import Container from "@/components/container/Container";
import Achievement from "@/components/ui/Achievement";
import BreadCrums from "@/components/ui/BreadCrums";
import Client from "@/components/ui/Client";
import OurProcess from "@/components/ui/OurProcess";
import OurProjects from "@/components/ui/OurProjects";
import ProjectDetails from "@/components/ui/ProjectDetails";
import ServiceDetails from "@/components/ui/ServiceDetails";
import Testimonial from "@/components/ui/Testimonial";
import WorkingProcess from "@/components/ui/WorkingProcess";
import { useRouter } from "next/router";
import React from "react";

const AllProjectsDetails = () => {
  const allProjects = [
    {
      name: "Cotton Fabric",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      points: [
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
      ],
      slug: "cotton-fabric",
      img: "1.png",
    },
    {
      name: "Satin Weaving",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      points: [
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
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
      points: [
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
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
      points: [
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
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
      points: [
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
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
      points: [
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
        "Consetetur Sadipscing Elitr",
      ],
      slug: "apparel",
      img: "6.png",
    },
  ];
  const route = useRouter();
  console.log(route);
  return (
    <div>
      {allProjects.map(
        (data, ind) =>
          route.query.slug == data?.slug && (
            <div className="" key={ind}>
              <BreadCrums name={data?.name} breadCrum={data?.name} />
              <ProjectDetails details={data} />
              <OurProcess />
              <Testimonial />
              <OurProjects />
            </div>
          )
      )}
    </div>
  );
};

export default AllProjectsDetails;
