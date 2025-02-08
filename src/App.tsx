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
import logo from "./WhatsApp Image 2025-01-11 at 15.39.40_348b1bd1.jpg"; // Update the path to the correct location of your logo file
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductDetail from "./components/product-details";

function App() {
      return (
            // <Router>
            //       <div className="min-h-screen">
            //             <Analytics />
            //             <Navbar />
            //             <Routes>
            //                   <Route
            //                         path="/"
            //                         element={
            //                               <>
            //                                     <Hero />
            //                                     <About />
            //                                     <Products />
            //                                     <Benefits />
            //                                     <HowItWorks />
            //                                     <Testimonials />
            //                                     <Newsletter />
            //                                     <Contact />
            //                               </>
            //                         }
            //                   />
            //                   <Route
            //                         path="/product/:id"
            //                         element={<ProductDetail />}
            //                   />
            //             </Routes>
            //       </div>
            // </Router>
            <h1 className="min-h-screen flex flex-col items-center justify-center">
                  <img src={logo} width={60} height={60} className="mb-4" />
                  Coming Soon
            </h1>
      );
}

export default App;
