import { useEffect } from "react";
import {
      ArrowLeft,
      BookOpen,
      Sprout,
      Users,
      TreeDeciduous,
      Microscope,
      GraduationCap,
      Factory,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LearnMore() {
      const navigate = useNavigate();

      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);

      const sections = [
            {
                  title: "Sustainable Farming Practices",
                  icon: <Sprout className="h-6 w-6" />,
                  content: "Our approach to sustainable farming combines traditional wisdom with modern technology. We focus on soil health, biodiversity, and water conservation to create a balanced ecosystem that benefits both farmers and the environment.",
                  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
            },
            {
                  title: "Research & Development",
                  icon: <Microscope className="h-6 w-6" />,
                  content: "Our state-of-the-art research facilities work tirelessly to develop new organic fertilizer formulations. We collaborate with leading agricultural institutions to test and improve our products continuously.",
                  image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
            },
            {
                  title: "Farmer Education Program",
                  icon: <GraduationCap className="h-6 w-6" />,
                  content: "We believe in empowering farmers with knowledge. Our education programs cover organic farming techniques, soil management, and sustainable practices to help farmers maximize their yields naturally.",
                  image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80",
            },
      ];

      return (
            <div className="pt-16 min-h-screen bg-gradient-to-b from-green-50 to-white">
                  {/* Header */}
                  <div className="bg-green-800 text-white py-12 mb-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <button
                                    onClick={() => navigate("/")}
                                    className="flex items-center gap-2 text-green-200 hover:text-white mb-6 group"
                              >
                                    <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
                                    Back to Home
                              </button>
                              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    Learn More About GreenGrow
                              </h1>
                              <p className="text-xl text-green-100 max-w-3xl">
                                    Discover how we're revolutionizing
                                    agriculture through sustainable practices
                                    and innovative organic solutions.
                              </p>
                        </div>
                  </div>

                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                              {[
                                    {
                                          icon: <Factory />,
                                          label: "Production Facilities",
                                          value: "5+",
                                    },
                                    {
                                          icon: <Users />,
                                          label: "Partner Farmers",
                                          value: "10,000+",
                                    },
                                    {
                                          icon: <TreeDeciduous />,
                                          label: "Acres Impacted",
                                          value: "10,000+",
                                    },
                                    {
                                          icon: <BookOpen />,
                                          label: "States Served",
                                          value: "5+",
                                    },
                              ].map((stat, index) => (
                                    <div
                                          key={index}
                                          className="bg-white p-6 rounded-xl shadow-lg text-center"
                                    >
                                          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full text-green-600 mb-4">
                                                {stat.icon}
                                          </div>
                                          <div className="text-2xl font-bold text-green-800 mb-1">
                                                {stat.value}
                                          </div>
                                          <div className="text-sm text-gray-600">
                                                {stat.label}
                                          </div>
                                    </div>
                              ))}
                        </div>

                        {/* Main Content */}
                        <div className="space-y-24 mb-24">
                              {sections.map((section, index) => (
                                    <div
                                          key={index}
                                          className={`grid lg:grid-cols-2 gap-12 items-center ${
                                                index % 2 === 1 ? "lg:rtl" : ""
                                          }`}
                                    >
                                          <div
                                                className={
                                                      index % 2 === 1
                                                            ? "lg:ltr"
                                                            : ""
                                                }
                                          >
                                                <div className="bg-white p-8 rounded-2xl shadow-xl">
                                                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl text-green-600 mb-6">
                                                            {section.icon}
                                                      </div>
                                                      <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                                                            {section.title}
                                                      </h2>
                                                      <p className="text-gray-600 leading-relaxed mb-6">
                                                            {section.content}
                                                      </p>
                                                      {/* <ul className="space-y-3">
                                                            {[1, 2, 3].map(
                                                                  (item) => (
                                                                        <li
                                                                              key={
                                                                                    item
                                                                              }
                                                                              className="flex items-center gap-3"
                                                                        >
                                                                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                                              <span className="text-gray-600">
                                                                                    {
                                                                                          section.title
                                                                                    }{" "}
                                                                                    key
                                                                                    benefit
                                                                                    or
                                                                                    feature
                                                                                    point{" "}
                                                                                    {
                                                                                          item
                                                                                    }
                                                                              </span>
                                                                        </li>
                                                                  )
                                                            )}
                                                      </ul> */}
                                                </div>
                                          </div>
                                          <div
                                                className={`relative ${
                                                      index % 2 === 1
                                                            ? "lg:ltr"
                                                            : ""
                                                }`}
                                          >
                                                <img
                                                      src={section.image}
                                                      alt={section.title}
                                                      className="rounded-2xl shadow-2xl w-full"
                                                />
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        {/* CTA Section */}
                        <div className="bg-green-800 rounded-2xl p-8 md:p-12 text-center mb-24">
                              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Ready to Transform Your Farming?
                              </h2>
                              <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                                    Join thousands of farmers who have already
                                    embraced sustainable farming with
                                    GreenGrow's organic solutions.
                              </p>
                              <button
                                    onClick={() => navigate("/")}
                                    className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold 
               hover:bg-green-100 transition-colors transform hover:scale-105 
               active:scale-95 shadow-lg"
                              >
                                    Explore Our Products
                              </button>
                        </div>
                  </div>
            </div>
      );
}
