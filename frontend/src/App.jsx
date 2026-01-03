import React from "react";
import WhatsAppButton from "./components/WhatsAppButton"; // Adjust the path as needed
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills"; // Added Skills component

const App = () => {
  return (
    <div>
    
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <WhatsAppButton /> {/* Only include the WhatsApp button once */}
    </div>
  );
};

export default App;