import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
      Star,
      Truck,
      Package,
      ShoppingCart,
      ArrowLeft,
      Leaf,
} from "lucide-react";
import { products } from "../data/product";

type Language = "en" | "mr";

export default function ProductDetail() {
      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);
      const [language, setLanguage] = useState<Language>("en");
      const { id } = useParams();
      const navigate = useNavigate();
      const product = products.find((p) => p.id === Number(id));

      if (!product) {
            return (
                  <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    Product not found
                              </h2>
                              <button
                                    onClick={() => navigate("/products")}
                                    className="text-green-600 hover:text-green-700"
                              >
                                    Return to products
                              </button>
                        </div>
                  </div>
            );
      }

      const content = product[language];

      return (
            <div className="pt-16 sm:pt-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
                        {/* Header Section */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
                              <button
                                    onClick={() => navigate("/")}
                                    className="flex items-center gap-2 text-green-600 hover:text-green-700 group"
                              >
                                    <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
                                    <span className="text-sm sm:text-base">
                                          {language === "en"
                                                ? "Back to Products"
                                                : "उत्पादनांकडे परत"}
                                    </span>
                              </button>

                              <div className="flex items-center gap-2 sm:gap-3">
                                    <button
                                          onClick={() => setLanguage("en")}
                                          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                                                language === "en"
                                                      ? "bg-green-600 text-white"
                                                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                          }`}
                                    >
                                          English
                                    </button>
                                    <button
                                          onClick={() => setLanguage("mr")}
                                          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                                                language === "mr"
                                                      ? "bg-green-600 text-white"
                                                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                          }`}
                                    >
                                          मराठी
                                    </button>
                              </div>
                        </div>

                        {/* Main Content */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-scale-up">
                              <div className="flex flex-col lg:grid lg:grid-cols-2">
                                    {/* Image Section */}
                                    <div className="relative h-[300px] sm:h-[400px] lg:h-full">
                                          <img
                                                src={product.image}
                                                alt={content.name}
                                                className="w-full h-full object-cover"
                                          />

                                          {/* Mobile Price Display */}
                                          <div className="absolute bottom-4 left-4 lg:hidden">
                                                <span className="text-3xl font-bold text-white">
                                                      {product.price}
                                                </span>
                                                <span className="text-white/80 ml-2">
                                                      {language === "en"
                                                            ? "/ package"
                                                            : "/ पॅकेज"}
                                                </span>
                                          </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-4 sm:p-6 lg:p-8">
                                          <div className="mb-6">
                                                <div className="flex flex-wrap items-start gap-3 mb-3">
                                                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800">
                                                            {content.name}
                                                      </h1>
                                                      <div className="flex items-center gap-1 bg-green-50 px-2 sm:px-3 py-1 rounded-full">
                                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                                            <span className="font-semibold text-sm">
                                                                  {
                                                                        product.rating
                                                                  }
                                                            </span>
                                                      </div>
                                                </div>
                                                <p className="text-gray-600 text-sm sm:text-base">
                                                      {content.description}
                                                </p>
                                          </div>

                                          <div className="space-y-6 sm:space-y-8">
                                                {/* Product Details */}
                                                <div>
                                                      <h2 className="text-lg sm:text-xl font-semibold text-green-800 mb-3">
                                                            {language === "en"
                                                                  ? "Product Details"
                                                                  : "उत्पादन तपशील"}
                                                      </h2>
                                                      <p className="text-gray-600 text-sm sm:text-base">
                                                            {content.details}
                                                      </p>
                                                </div>

                                                {/* Benefits */}
                                                <div>
                                                      <h2 className="text-lg sm:text-xl font-semibold text-green-800 mb-3">
                                                            {language === "en"
                                                                  ? "Key Benefits"
                                                                  : "प्रमुख फायदे"}
                                                      </h2>
                                                      <ul className="space-y-2 sm:space-y-3">
                                                            {content.benefits.map(
                                                                  (
                                                                        benefit,
                                                                        index
                                                                  ) => (
                                                                        <li
                                                                              key={
                                                                                    index
                                                                              }
                                                                              className="flex items-center gap-3"
                                                                        >
                                                                              <div className="bg-green-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                                                                                    <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                                                                              </div>
                                                                              <span className="text-gray-700 text-sm sm:text-base">
                                                                                    {
                                                                                          benefit
                                                                                    }
                                                                              </span>
                                                                        </li>
                                                                  )
                                                            )}
                                                      </ul>
                                                </div>

                                                {/* Specifications */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                      <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                                                            <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                                                  <Package className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                                                                  <span className="font-semibold text-green-800 text-sm sm:text-base">
                                                                        {language ===
                                                                        "en"
                                                                              ? "Package Size"
                                                                              : "पॅकेज आकार"}
                                                                  </span>
                                                            </div>
                                                            <p className="text-gray-700 text-sm sm:text-base">
                                                                  {product.size}
                                                            </p>
                                                      </div>

                                                      <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                                                            <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                                                  <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                                                                  <span className="font-semibold text-green-800 text-sm sm:text-base">
                                                                        {language ===
                                                                        "en"
                                                                              ? "Coverage Area"
                                                                              : "कव्हरेज क्षेत्र"}
                                                                  </span>
                                                            </div>
                                                            <p className="text-gray-700 text-sm sm:text-base">
                                                                  {
                                                                        product.coverage
                                                                  }
                                                            </p>
                                                      </div>
                                                </div>

                                                {/* Desktop Price and CTA */}
                                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t">
                                                      <div className="hidden lg:block">
                                                            <span className="text-3xl sm:text-4xl font-bold text-green-600">
                                                                  {
                                                                        product.price
                                                                  }
                                                            </span>
                                                            <span className="text-gray-500 ml-2 text-sm sm:text-base">
                                                                  {language ===
                                                                  "en"
                                                                        ? "/ package"
                                                                        : "/ पॅकेज"}
                                                            </span>
                                                      </div>
                                                      <button
                                                            className="w-full sm:w-auto bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full 
                           font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 
                           transform hover:scale-105 active:scale-95"
                                                      >
                                                            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                                                            <span className="text-sm sm:text-base">
                                                                  {language ===
                                                                  "en"
                                                                        ? "Add to Cart"
                                                                        : "कार्टमध्ये जोडा"}
                                                            </span>
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
