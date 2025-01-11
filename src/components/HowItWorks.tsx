import React from 'react';
import { Droplets, Sun, Sprout, ThumbsUp } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to get the most out of our organic fertilizers
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Droplets className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Mix</h3>
            <p className="text-gray-600">
              Mix the fertilizer with soil according to instructions
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sun className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Apply</h3>
            <p className="text-gray-600">
              Apply the mixture around your plants' base
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sprout className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Water</h3>
            <p className="text-gray-600">
              Water thoroughly after application
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <ThumbsUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Results</h3>
            <p className="text-gray-600">
              Watch your plants thrive and grow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}