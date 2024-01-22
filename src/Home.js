import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import HowItWorks from "./Howitworks";
import Aboutus from "./AboutUs";
import Services from "./Services";
import Contact from "./Contacts";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;