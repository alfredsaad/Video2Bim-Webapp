import React from "react";
import HeroSection from "./HomePageComponents/HeroSection";
import AboutSection from "./HomePageComponents/AboutSection";
import Workflow from "./HomePageComponents/Workflow";
import TeamSection from "./HomePageComponents/TeamSection";
import ContactSection from "./HomePageComponents/ContactSection";
import SlideInOnScroll from "@/components/ui/SlideOnScroll";
function HomePage() {
  return (
    <div>
      <SlideInOnScroll delay={0.2}>
        <HeroSection />
      </SlideInOnScroll>

      <SlideInOnScroll delay={0.4}>
        <AboutSection />
      </SlideInOnScroll>

      <SlideInOnScroll delay={0.2}>
        <Workflow />
      </SlideInOnScroll>
      <SlideInOnScroll delay={0.2}>
        <TeamSection />
      </SlideInOnScroll>

      <SlideInOnScroll delay={0.2}>
        <ContactSection />
      </SlideInOnScroll>
    </div>
  );
}
export default HomePage;