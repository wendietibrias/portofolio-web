"use client";

import ScrollSpy from "react-ui-scrollspy";
import bg from "../assets/images/bg.jpg";
import {
  Navbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  PortofolioSection,
  ContactSection,
  Footer,
  ScrollTopButton,
} from "@/components";

const Home = () => {
  return (
    <main className="max-w-[100%] overflow-x-hidden">
      <ScrollSpy>
        <Navbar />
        <section
          id="home"
          style={{
            backgroundImage: `linear-gradient(to left,rgba(10,10,10,0.5),rgba(0,0,0,0.4)),url(${bg.src})`,
          }}
          className="w-full h-screen flex items-center justify-center relative"
        >
          <HeroSection />
        </section>
        <section id="about" className="w-full bg-gray-100 pt-16 pb-20">
          <AboutSection />
        </section>
        <section id="skills" className="w-full bg-white py-20">
          <SkillsSection />
        </section>
        <section id="portofolio" className="bg-gray-100 py-20">
          <PortofolioSection />
        </section>
        <section id="feedback" className="bg-white w-full py-20">
          <ContactSection />
        </section>
        <ScrollTopButton />
        <Footer />
      </ScrollSpy>
    </main>
  );
};

export default Home;
