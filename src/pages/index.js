import Achievement from "@/components/ui/Achievement";
import Client from "@/components/ui/Client";
import GetInTouch from "@/components/ui/GetInTouch";
import Poster from "@/components/ui/MainPoster/Poster";
import OurProjects from "@/components/ui/OurProjects";
import Services from "@/components/ui/Services";
import Testimonial from "@/components/ui/Testimonial";
import WhoWeAre from "@/components/ui/WhoWeAre";
import WhyUs from "@/components/ui/WhyUs";

export default function Home() {
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
  ];
  return (
    <main className="">
      <div className="">
        <Poster />
        <WhyUs />
        <WhoWeAre />
        <Client />
        <Services allServices={allServices} />
        <Achievement />
        <OurProjects />
        <Testimonial />
        <GetInTouch />
      </div>
    </main>
  );
}
