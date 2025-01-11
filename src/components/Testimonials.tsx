import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
      {
            id: 1,
            name: "John Smith",
            role: "Commercial Farmer",
            content: "RGIAgroTech's fertilizers have increased my crop yield by 40%. The results are incredible!",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
      },
      {
            id: 2,
            name: "Sarah Johnson",
            role: "Organic Farm Owner",
            content: "Finally, a truly organic fertilizer that delivers on its promises. My plants have never looked better.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      },
      {
            id: 3,
            name: "Michael Chen",
            role: "Greenhouse Manager",
            content: "The customer support is exceptional, and the products are even better. Highly recommended!",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      },
];

export default function Testimonials() {
      return (
            <div className="py-24 bg-green-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    What Our Customers Say
                              </h2>
                              <div className="flex justify-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                          <Star
                                                key={i}
                                                className="h-6 w-6 text-yellow-400 fill-current"
                                          />
                                    ))}
                              </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                              {testimonials.map((testimonial) => (
                                    <div
                                          key={testimonial.id}
                                          className="bg-white rounded-xl p-6 shadow-xl relative"
                                    >
                                          <Quote className="absolute top-4 right-4 h-8 w-8 text-green-200" />
                                          <div className="flex items-center gap-4 mb-4">
                                                <img
                                                      src={testimonial.image}
                                                      alt={testimonial.name}
                                                      className="w-16 h-16 rounded-full object-cover"
                                                />
                                                <div>
                                                      <h3 className="font-semibold text-green-800">
                                                            {testimonial.name}
                                                      </h3>
                                                      <p className="text-gray-600 text-sm">
                                                            {testimonial.role}
                                                      </p>
                                                </div>
                                          </div>
                                          <p className="text-gray-600 italic">
                                                {testimonial.content}
                                          </p>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
}
