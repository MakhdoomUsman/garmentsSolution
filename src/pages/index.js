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
  ];
  return (
    <main className="">
      <div className="">
        <Poster />
        <WhyUs />
        <WhoWeAre />
        <Services allServices={allServices} />
        <Achievement />
        <OurProjects />
        <Client />
        <Testimonial />
        <GetInTouch />
      </div>
    </main>
  );
}
