import React from "react";
import { Sprout, Shield, Leaf } from "lucide-react";

export default function About() {
      return (
            <div id="about" className="py-24 bg-green-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                                    Why Choose RGIAgroTech?
                              </h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                    We're committed to providing sustainable and
                                    effective fertilizer solutions that enhance
                                    soil health and maximize crop yields.
                              </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                              <div className="bg-white p-8 rounded-xl shadow-lg">
                                    <Sprout className="h-12 w-12 text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                          100% Organic
                                    </h3>
                                    <p className="text-gray-600">
                                          Our fertilizers are made from natural
                                          ingredients, ensuring your soil and
                                          crops remain chemical-free.
                                    </p>
                              </div>

                              <div className="bg-white p-8 rounded-xl shadow-lg">
                                    <Shield className="h-12 w-12 text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                          Certified Quality
                                    </h3>
                                    <p className="text-gray-600">
                                          All our products are tested and
                                          certified by leading agricultural
                                          institutions.
                                    </p>
                              </div>

                              <div className="bg-white p-8 rounded-xl shadow-lg">
                                    <Leaf className="h-12 w-12 text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                                          Eco-Friendly
                                    </h3>
                                    <p className="text-gray-600">
                                          Supporting sustainable farming
                                          practices while protecting the
                                          environment.
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
