import React from "react";
import Doctors from "./Doctors";
import HeroSection from "./HeroSection";
import Hospitals from "./Hospitals";
import PatientStory from "./PatientStory";
import Section1 from "./Section1";
import Section2 from "./Section2";
import SectionNavigate from "./SectionNavigate";
import TreatmentFAQ from "./TreatmentFAQ";

const Body = () => {
  return (
    <div>
      <HeroSection />
      <SectionNavigate />
      <Section1 />
      <Section2 />
      <TreatmentFAQ />
      <PatientStory />
      <Doctors />
      <Hospitals />
    </div>
  );
};

export default Body;
