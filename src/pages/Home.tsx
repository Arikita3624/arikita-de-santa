import BackToTop from "@/component/BackToTop";
import Contact from "@/component/Contact";
import Education from "@/component/Education";
import Hero from "@/component/Hero";
import Project from "@/component/Project";
import Skills from "@/component/Skills";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Education />
      <Project />
      <Contact />
      <BackToTop />
    </>
  );
};

export default Home;
