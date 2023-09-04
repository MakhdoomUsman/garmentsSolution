import Achievement from "@/components/ui/Achievement";
import Client from "@/components/ui/Client";
import Poster from "@/components/ui/MainPoster/Poster";
import OurProjects from "@/components/ui/OurProjects";
import Services from "@/components/ui/Services";
import Testimonial from "@/components/ui/Testimonial";
import WhoWeAre from "@/components/ui/WhoWeAre";
import WhyUs from "@/components/ui/WhyUs";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Poster />
        <WhyUs />
        <WhoWeAre />
        <Services />
        <Achievement />
        <OurProjects />
        <Client />
        <Testimonial />
      </div>
    </main>
  );
}
