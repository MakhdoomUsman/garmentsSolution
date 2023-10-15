import BreadCrums from "@/components/ui/BreadCrums";
import Client from "@/components/ui/Client";
import ContactUsFrom from "@/components/ui/ContactUs";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <BreadCrums name="Contact Us" breadCrum={"Contact"} />

          <ContactUsFrom />
          <div className="my-10">
              
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13637.475097667348!2d74.0645991!3d31.2935511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391857de04db414f%3A0xead55a838c673f06!2sGarments%20Solution!5e0!3m2!1sen!2s!4v1697361696849!5m2!1sen!2s"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      <Client />
    </div>
  );
};

export default ContactUs;
