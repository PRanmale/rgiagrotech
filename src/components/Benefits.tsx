import React from 'react';
import { Sprout, Recycle, Award, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Sprout className="h-8 w-8" />,
    title: "Sustainable Farming",
    description: "Our products support long-term soil health and sustainable agricultural practices."
  },
  {
    icon: <Recycle className="h-8 w-8" />,
    title: "Eco-Friendly",
    description: "100% biodegradable packaging and environmentally conscious production methods."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Certified Organic",
    description: "All products are certified organic and meet strict quality standards."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Improved Yields",
    description: "Proven to increase crop yields while maintaining soil integrity."
  }
];

export default function Benefits() {
  return (
    <div className="py-24 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Why Choose Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our premium organic fertilizers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto text-green-600 transform hover:rotate-12 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800 text-center mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}