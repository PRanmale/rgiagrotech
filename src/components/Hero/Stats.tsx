import React from "react";

const stats = [
      { value: "10K+", label: "Farmers Trust Us" },
      { value: "95%", label: "Satisfaction Rate" },
      { value: "5+", label: "States Served" },
];

export default function Stats() {
      return (
            <div className="grid grid-cols-3 gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4">
                  {stats.map((stat, index) => (
                        <div
                              key={index}
                              className="text-center text-white animate-fade-in-up"
                              style={{ animationDelay: `${index * 150}ms` }}
                        >
                              <div className="text-2xl md:text-3xl font-bold">
                                    {stat.value}
                              </div>
                              <div className="text-sm md:text-base opacity-80">
                                    {stat.label}
                              </div>
                        </div>
                  ))}
            </div>
      );
}
