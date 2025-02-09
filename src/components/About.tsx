import React from "react";
import {
      Sprout,
      Shield,
      Leaf,
      Target,
      Eye,
      Users,
      Award,
      Globe,
      Heart,
} from "lucide-react";

export default function About() {
      return (
            <div
                  id="about"
                  className="py-24 bg-gradient-to-b from-white to-green-50"
            >
                  {/* Vision & Mission Section */}
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                        <div className="grid md:grid-cols-2 gap-12">
                              {/* Vision */}
                              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-6">
                                          <div className="bg-green-100 p-3 rounded-xl">
                                                <Eye className="h-8 w-8 text-green-600" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-bold text-green-800">
                                                Our Vision
                                          </h2>
                                    </div>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                          To revolutionize agriculture through
                                          sustainable practices, making organic
                                          farming accessible to every farmer
                                          while preserving our planet's
                                          resources for future generations.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                          <div className="flex items-center gap-3">
                                                <Globe className="h-5 w-5 text-green-600" />
                                                <span className="text-sm text-gray-600">
                                                      Global Impact
                                                </span>
                                          </div>
                                          <div className="flex items-center gap-3">
                                                <Heart className="h-5 w-5 text-green-600" />
                                                <span className="text-sm text-gray-600">
                                                      Eco-Friendly
                                                </span>
                                          </div>
                                    </div>
                              </div>

                              {/* Mission */}
                              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-6">
                                          <div className="bg-green-100 p-3 rounded-xl">
                                                <Target className="h-8 w-8 text-green-600" />
                                          </div>
                                          <h2 className="text-2xl md:text-3xl font-bold text-green-800">
                                                Our Mission
                                          </h2>
                                    </div>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                          To provide innovative, organic
                                          fertilizer solutions that enhance soil
                                          health, maximize crop yields, and
                                          support sustainable farming practices
                                          while empowering farmers with
                                          knowledge and resources.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                          <div className="flex items-center gap-3">
                                                <Award className="h-5 w-5 text-green-600" />
                                                <span className="text-sm text-gray-600">
                                                      Quality First
                                                </span>
                                          </div>
                                          <div className="flex items-center gap-3">
                                                <Users className="h-5 w-5 text-green-600" />
                                                <span className="text-sm text-gray-600">
                                                      Farmer Support
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* About Us Section */}
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                                    About RGIAgrotech
                              </h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                    Leading the way in organic farming solutions
                                    since 2025, empowering farmers with
                                    sustainable practices and premium products.
                              </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                              <div className="order-2 lg:order-1">
                                    <div className="space-y-6">
                                          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                                <h3 className="text-xl font-semibold text-green-800 mb-3">
                                                      Our Story
                                                </h3>
                                                <p className="text-gray-600">
                                                      Founded by agricultural
                                                      expert Pankaj Ranmale with
                                                      a passion for sustainable
                                                      farming, RGIAgrotech has
                                                      grown from a small
                                                      research facility to a
                                                      leading provider of
                                                      organic fertilizers,
                                                      serving farmers across
                                                      country.
                                                </p>
                                          </div>

                                          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                                <h3 className="text-xl font-semibold text-green-800 mb-3">
                                                      Our Commitment
                                                </h3>
                                                <p className="text-gray-600">
                                                      We're dedicated to
                                                      developing innovative
                                                      solutions that respect the
                                                      environment while
                                                      maximizing crop yields.
                                                      Our research team
                                                      continuously works to
                                                      improve our products and
                                                      farming practices.
                                                </p>
                                          </div>

                                          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                                <h3 className="text-xl font-semibold text-green-800 mb-3">
                                                      Our Impact
                                                </h3>
                                                <p className="text-gray-600">
                                                      Through sustainable
                                                      practices and farmer
                                                      education programs, we've
                                                      helped reduce chemical
                                                      fertilizer usage by 40% in
                                                      our partner farms while
                                                      increasing crop yields by
                                                      up to 35%.
                                                </p>
                                          </div>
                                    </div>
                              </div>

                              <div className="order-1 lg:order-2">
                                    <div className="relative">
                                          <img
                                                src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80"
                                                alt="Sustainable Farming"
                                                className="rounded-2xl shadow-2xl"
                                          />
                                          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                                                <div className="grid grid-cols-3 gap-4">
                                                      <div className="text-center">
                                                            <div className="text-2xl font-bold text-green-600">
                                                                  95%
                                                            </div>
                                                            <div className="text-sm text-gray-600">
                                                                  Satisfaction
                                                                  Rate
                                                            </div>
                                                      </div>
                                                      <div className="text-center">
                                                            <div className="text-2xl font-bold text-green-600">
                                                                  5+
                                                            </div>
                                                            <div className="text-sm text-gray-600">
                                                                  States Served
                                                            </div>
                                                      </div>
                                                      <div className="text-center">
                                                            <div className="text-2xl font-bold text-green-600">
                                                                  10K+
                                                            </div>
                                                            <div className="text-sm text-gray-600">
                                                                  Farmers
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Core Values */}
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
