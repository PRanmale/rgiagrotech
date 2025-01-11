import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";

function App() {
      return (
            <div className="min-h-screen">
                  <Analytics />
                  <Navbar />
                  <Hero />
                  <About />
                  <Products />
                  <Benefits />
                  <HowItWorks />
                  <Testimonials />
                  <Newsletter />
                  <Contact />
            </div>
      );
}

export default App;
