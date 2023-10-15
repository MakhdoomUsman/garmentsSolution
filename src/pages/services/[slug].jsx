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
        "Our skilled team possesses a deep understanding of color theory and the precise art of mixing dyes. We take pride in our ability to achieve the exact shade you desire, ensuring consistency and vibrancy across your fabric order",
        "We are committed to sustainable and eco-friendly dyeing methods. Our processes prioritize minimal environmental impact by adhering to stringent guidelines and using low-impact, non-toxic dyes that minimize waste and reduce water consumption.",
        " Whether it's fashion garments, industrial uniforms, or interior textiles, we offer complete customization. Our fabric dyeing services are tailored to your specific needs, allowing you to create unique, one-of-a-kind designs that set your brand or project apart. ",
        " At every step, we maintain strict quality control. From fabric preparation to the final color result, we ensure that your dyed fabrics meet the highest standards of quality, colorfastness, and durability, making them ready for long-lasting use and enjoyment.",
      ],
      slug: "fabric-dyeing",
      img: "1.png",
    },
    {
      name: "Satin Weaving",
      disc: [
        "We take pride in selecting the finest weave patterns for your satin fabrics. Our team carefully chooses weaves that enhance the fabric's natural luster and drape, ensuring that the end product possesses the characteristic sheen and softness that satin is known for.",
        "We use only the highest quality materials in our satin weaving process. This includes premium silk, polyester, or other materials, allowing us to create fabrics that not only look exquisite but also feel incredibly luxurious against the skin.",
        "We understand that every project is unique. Our satin weaving services are fully customizable, so you can select the weave pattern, thread count, and color that best suits your vision. Whether you're creating elegant evening wear or sophisticated home decor, we have the expertise to bring your ideas to life.",
        "Our commitment to excellence is unwavering. Every inch of fabric that leaves our looms is meticulously inspected to ensure it meets the highest quality standards. From color consistency to flawlessness in texture, you can trust that our satin-woven fabrics will elevate your projects to a new level of sophistication and opulence.",
      ],
      slug: "satin-weaving",
      img: "2.png",
    },
    {
      name: "Fabric Printing",
      disc: [
        "We employ cutting-edge digital and screen printing technology to create vivid, high-resolution designs on your chosen fabrics. This ensures every detail of your artwork is accurately reproduced, no matter how intricate or complex.",
        "We offer a diverse range of fabrics suitable for various applications, including cotton, silk, polyester, and more. You can select the fabric that best complements your project, whether it's for fashion, home decor, or commercial use.",
        "Our fabric printing services are designed to cater to your specific needs. We provide options for one-of-a-kind custom prints, repeat patterns, and various color choices, allowing you to create unique textiles that perfectly match your creative vision.",
        "We take pride in delivering fabric prints that are not only visually stunning but also durable. Our prints are colorfast and resistant to fading, ensuring that your designs retain their brilliance and vibrancy, even after multiple washes and prolonged use. This longevity is an assurance of quality for your projects.",
      ],
      slug: "fabric-printing",
      img: "3.png",
    },
    {
      name: "Garment Stitching",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      slug: "garment-stitching",
      img: "4.png",
    },
    {
      name: "Linen Weaving",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      slug: "linen-weaving",
      img: "5.png",
    },
    {
      name: "Custome Apparel",
      disc: [
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
        "Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt.sed do eiusmod tempor incididunt. ",
      ],
      slug: "custome-apparel",
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
    </div>
  );
};

export default SlugServices;
