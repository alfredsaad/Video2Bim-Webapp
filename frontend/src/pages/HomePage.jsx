import React from "react";
import HeroSection from "./HomePageComponents/HeroSection";
import AboutSection from "./HomePageComponents/AboutSection";
import Workflow from "./HomePageComponents/Workflow";
import TeamSection from "./HomePageComponents/TeamSection";
import ContactSection from "./HomePageComponents/ContactSection";
function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Workflow />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
export default HomePage;