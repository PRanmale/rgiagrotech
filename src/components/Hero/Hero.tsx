import React from "react";
import { ArrowRight, Leaf, ShieldCheck, Sprout } from "lucide-react";
import Stats from "./Stats";

export default function Hero() {
      return (
            <div id="home" className="relative min-h-screen">
                  {/* Background with overlay */}
                  <div className="absolute inset-0 z-0">
                        <img
                              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80"
                              alt="Agriculture background"
                              className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/75" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
                              <div className="space-y-8">
                                    {/* Logo and subtitle */}
                                    <div className="animate-fade-in-up">
                                          <div className="flex items-center gap-2 text-white mb-4">
                                                <Leaf className="h-8 w-8" />
                                                <span className="text-2xl font-bold">
                                                      RGIAgroTech
                                                </span>
                                          </div>
                                          <div className="flex gap-4 mb-6">
                                                <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-1 rounded-full text-sm">
                                                      <ShieldCheck className="h-4 w-4" />
                                                      Certified Organic
                                                </div>
                                                <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-1 rounded-full text-sm">
                                                      <Sprout className="h-4 w-4" />
                                                      Eco-Friendly
                                                </div>
                                          </div>
                                    </div>

                                    {/* Main heading */}
                                    <h1
                                          className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up"
                                          style={{ animationDelay: "150ms" }}
                                    >
                                          Nurture Your Soil,
                                          <br />
                                          <span className="text-green-400">
                                                Grow Your Future
                                          </span>
                                    </h1>

                                    {/* Description */}
                                    <p
                                          className="text-lg text-gray-200 max-w-xl animate-fade-in-up"
                                          style={{ animationDelay: "300ms" }}
                                    >
                                          Transform your farming with our
                                          premium organic fertilizers.
                                          Scientifically formulated for maximum
                                          yield and soil health.
                                    </p>

                                    {/* CTA Buttons */}
                                    <div
                                          className="flex flex-wrap gap-4 animate-fade-in-up"
                                          style={{ animationDelay: "450ms" }}
                                    >
                                          <button
                                                className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold 
                       flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                                          >
                                                Shop Now{" "}
                                                <ArrowRight className="h-5 w-5" />
                                          </button>
                                          <button
                                                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold 
                       backdrop-blur-md transition-all duration-300"
                                          >
                                                Learn More
                                          </button>
                                    </div>

                                    {/* Stats */}
                                    <div
                                          className="pt-12 animate-fade-in-up"
                                          style={{ animationDelay: "600ms" }}
                                    >
                                          <Stats />
                                    </div>
                              </div>

                              {/* Hero Image */}
                              <div className="hidden lg:block">
                                    <img
                                          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80"
                                          alt="Organic Farming"
                                          className="rounded-2xl shadow-2xl animate-fade-in transform hover:scale-105 transition-all duration-500"
                                    />
                              </div>
                        </div>
                  </div>

                  {/* Scroll Indicator */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                              <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
                        </div>
                  </div>
            </div>
      );
}
