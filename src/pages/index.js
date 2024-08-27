import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

import React from "react";

function index() {
  return (
    // bg-#112e42;
    // text-#00abf0;
    // bg-[#081b29]
    // bg-[#1f242d]
    // second-bg-[#323946]
    <div className="bg-[#112e42]">
      <div className="pt-10">
        <Header />
        <About />
      </div>
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default index;
