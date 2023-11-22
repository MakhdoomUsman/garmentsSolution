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
      name: "Complete Uniform Kit",
      disc: [
        "At Garments Solutions, our Complete Uniform Kit stands as a testament to our commitment to delivering unparalleled professionalism and style to your workforce. This meticulously crafted kit is designed to elevate the image of your team, offering a cohesive and polished look. Here's why our Complete Uniform Kit is the ideal choice for businesses seeking quality and unity:",
        "Investing in our Complete Uniform Kit not only enhances the visual appeal of your team but also communicates a commitment to professionalism and unity. With tailored excellence, premium materials, versatility, brand representation, and employee satisfaction at the forefront, our Complete Uniform Kit is the optimal choice for businesses prioritizing quality workwear.",
      ],
      points: [
        "Tailored Excellence",
        "Premium Materials",
        "Versatility and Brand Representation",
        "Brand Representation",
        "Employee Satisfaction",
      ],
      slug: "complete-uniform-kit",
      img: "/image/project/1.jpg",
      pera1:
        "Our Complete Uniform Kit goes beyond the standard, offering effortless customization to suit your specific needs. Whether it's incorporating company logos, choosing specific color schemes, or adding unique design elements, our customization options allow your team's attire to align seamlessly with your brand identity.",
      pera2:
        "While delivering top-notch quality, our Complete Uniform Kit remains a cost-effective solution. We understand the importance of budget considerations for businesses, and our uniform packages offer a balance of quality and affordability, ensuring that you get the best value for your investment.",
    },
    {
      name: "Shirt and Trouser Set",
      disc: [
        "Discover unparalleled sophistication with our Shirt and Trouser Set, meticulously tailored to redefine your wardrobe. Crafted with precision, each shirt and trouser exudes a sleek and polished appearance, making it an ideal choice for those seeking a timeless yet contemporary ensemble.",
        "Indulge in the luxury of our premium fabric composition. We take pride in selecting materials that not only feel sumptuously comfortable against your skin but also withstand the test of time. This commitment to quality ensures that each piece in our Shirt and Trouser Set not only looks exquisite but also promises enduring elegance.",
        "Versatility takes center stage in our Shirt and Trouser Set, effortlessly adapting to various occasions. Whether it's a formal business meeting or a casual outing, this ensemble seamlessly transitions, offering a wardrobe essential that transcends fashion trends. Elevate your style with this versatile set, where sophistication meets comfort in every stitch.",
      ],
      points: [
        "Sleek Tailoring",
        "Premium Fabric Composition",
        "Versatile Wardrobe Essential",
      ],
      slug: "shirt-trouser",
      img: "/image/project/1.jpg",
      pera1:
        "Incorporate sophistication seamlessly into your wardrobe with our meticulously tailored Shirt and Trouser Set by Garments Solutions. Unveiling a blend of contemporary style and timeless elegance, each shirt and trouser is a testament to our brand's ethos of precision and innovation. As you don this ensemble, you embody the embodiment of Garments Solutions' dedication to crafting clothing that transcends trends, offering a distinguished look for those who value both comfort and refinement.",
      pera2:
        "At Garments Solutions, our Shirt and Trouser Set is not merely an ensemble; it's an experience. Immerse yourself in the exquisite details, from the perfectly fitted shirts to the flawlessly tailored trousers. This set isn't just about clothing; it's about making a statement. Our commitment to quality and client satisfaction resonates in every stitch, ensuring that when you choose Garments Solutions, you choose a wardrobe that speaks volumes about your style and our dedication to providing clothing that stands the test of time.",
    },
    {
      name: "Polo Shirt Collection",
      disc: [
        "Our Polo Shirt Collection boasts a diverse range of designs, from classic solids to modern patterns, ensuring that there's a polo shirt for every style preference. The versatility of our designs makes these shirts suitable for both casual outings and semi-formal occasions.",
        "Elevate your casual wardrobe with our Polo Shirt Collection by Garments Solutions, a curation of timeless designs and premium comfort. Each polo shirt is a testament to our commitment to delivering not just clothing but a style statement that effortlessly merges sophistication with a laid-back appeal.",
        "Crafted from a premium blend of fabrics, our polo shirts offer a luxurious feel against the skin. The careful selection of materials ensures not only comfort but also longevity, making each shirt a durable addition to your wardrobe that withstands the test of time.",
      ],
      points: [
        "All-Season Comfort:",
        "Customization Options:",
        "Tailored Fit:",
        "Premium Fabric Blend:",
        "Versatile Designs:",
      ],
      slug: "polo-shirt",
      img: "/image/project/1.jpg",
      pera1:
        "Designed for all-season wear, our polo shirts offer a perfect balance of breathability and warmth. The fabric's versatility makes these shirts suitable for year-round use, providing a wardrobe staple that adapts to various weather conditions.",
      pera2:
        "Indulge in the timeless charm and comfort of our Polo Shirt Collection, where each piece is a fusion of sophisticated design, premium materials, tailored fit, customization options, and all-season comfort. At Garments Solutions, we redefine casual elegance, ensuring that your polo shirt not only complements your style but also makes a lasting impression.",
    },
    {
      name: "T-shirt collection",
      disc: [
        "Dive into comfort and style with our T-shirt Collection by Garments Solutions, where every piece is a canvas of self-expression. From classic basics to trendy designs, our collection caters to diverse tastes, making the T-shirt a versatile wardrobe staple for all occasions.",
        "Explore a spectrum of styles within our T-shirt Collection, ranging from classic crewnecks to V-necks and everything in between. Our diverse range ensures that whether you're after a timeless look or a trendsetting design, there's a T-shirt that suits your individual style.",
        "Crafted from premium cotton blends, our T-shirts prioritize comfort without compromising on quality. The soft, breathable fabrics guarantee a luxurious feel against your skin, making these shirts your go-to choice for everyday wear.",
      ],
      points: [
        "Tailored Fit for All:",
        "Athleisure Fusion:",
        "Graphic Expressions:",
      ],
      slug: "t-shirt",
      img: "/image/project/1.jpg",
      pera1:
        "Our T-shirt Collection is available in a range of fits, from classic to slim, ensuring that everyone finds their perfect match. The tailored fit not only enhances your silhouette but also provides the flexibility needed for various activities throughout your day.",
      pera2:
        "Whether you're seeking a classic staple, a bold graphic tee, or a comfortable athleisure piece, our T-shirt Collection embodies the perfect blend of style and comfort. At Garments Solutions, we redefine the T-shirt as more than just clothing; it's a versatile expression of individuality and everyday fashion.",
    },
    {
      name: "Track Suit",
      disc: [
        "Step into both comfort and performance with our Track Suit Collection by Garments Solutions, a fusion of athletic functionality and contemporary style. Each track suit in our collection is meticulously crafted to provide the perfect balance between comfort, durability, and trendsetting design.",
        "Engineered for optimal performance, our Track Suit Collection features high-performance materials that wick away moisture and provide excellent breathability. Whether you're hitting the gym or navigating the urban landscape, our track suits offer the functionality needed for an active lifestyle.",
      ],
      points: [
        "Contemporary Design Aesthetics:",
        "Versatile Layering:",
        "Tailored Fit for Mobility:",
      ],
      slug: "track-suit",
      img: "/image/project/1.jpg",
      pera1:
        "Built to withstand the rigors of an active lifestyle, our track suits feature reinforced stitching and durable materials. This commitment to durability ensures that your track suit remains a reliable companion, whether you're engaged in intense physical activities or simply enjoying a leisurely stroll.",
      pera2:
        "Indulge in the perfect synergy of comfort and style with our Track Suit Collection at Garments Solutions. Each piece reflects our dedication to providing high-performance athletic wear that doesn't compromise on contemporary aesthetics, ensuring you not only meet your fitness goals but do so with a touch of fashion-forward flair.",
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
