import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-b from-green-800 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Better with Natural Fertilizers
            </h1>
            <p className="text-lg mb-8">
              Enhance your crop yield with our premium organic fertilizers. 
              Sustainable solutions for modern agriculture.
            </p>
            <button className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold 
                     flex items-center gap-2 hover:bg-green-100 transition-colors">
              Explore Products <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80" 
              alt="Farmer in field" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}