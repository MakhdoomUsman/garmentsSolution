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
      disc: "Explore the art of fabric dyeing on our website. From vibrant fashion pieces to custom industrial uniforms, our fabric dyeing services offer endless possibilities in color and design. Discover how we transform plain textiles into eye-catching, quality creations.",
      slug: "fabric-dyeing",
      img: "1.png",
    },
    {
      name: "Satin Weaving",
      disc: "Dive into the world of satin weaving on our website. Satin weaving is an art that brings forth luxurious, smooth, and elegant fabrics known for their softness and sheen. Explore how this technique elevates fashion and decor, crafting items that radiate timeless beauty.",
      slug: "satin-weaving",
      img: "2.png",
    },
    {
      name: "Fabric Printing",
      disc: "Discover the magic of fabric printing on our website. Our fabric printing services bring your designs to life on a variety of textiles, offering limitless creative possibilities for fashion, home decor, and more. Explore how we turn your visions into vivid, custom-printed fabric realities.",
      slug: "fabric-printing",
      img: "3.png",
    },
    {
      name: "Garment Stitching",
      disc: "Discover the meticulous craft of garment stitching on our website. Our skilled artisans employ precision and care to transform fabrics into finely tailored garments. Explore how our stitching expertise ensures quality, style, and the perfect fit for your clothing needs.",
      slug: "garment-stitching",
      img: "4.png",
    },
    {
      name: "Linen Weaving",
      disc: "Discover the art of linen weaving on our website. Linen weaving creates timeless, breathable, and natural fabrics, ideal for clothing, home textiles, and more. Explore the enduring beauty and versatility of linen through our finely crafted weaves.",
      slug: "linen-weaving",
      img: "5.png",
    },
    {
      name: "Custome Apparel",
      disc: "Discover the magic of custom apparel on our website. We specialize in creating tailored clothing that showcases your unique style and identity. From personalized uniforms to fashion pieces, we bring your vision to life with precision and care.",
      slug: "custome-apparel",
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
