import React, { useEffect, useState } from "react";
import { X, Star, Leaf, Truck, Package, ShoppingCart } from "lucide-react";

const disableScrollClass = `
  .no-scroll {
    overflow: hidden !important;
    height: 100vh;
  }
`;
// Products array remains the same...
const products = [
      {
            id: 1,
            name: "Organic Compost",
            description: "Rich in nutrients to boost soil fertility.",
            details: "This compost is made from 100% organic waste, providing essential nutrients for plant growth.",
            benefits: [
                  "Improves soil structure",
                  "Increases water retention",
                  "Eco-friendly and sustainable",
            ],
            image: "https://cdn.pixabay.com/photo/2023/08/08/15/15/strawberries-8177601_1280.jpg",
            price: "$15",
            rating: 4.8,
            size: "10 kg bag",
            coverage: "Up to 50 sq. ft.",
      },
      {
            id: 2,
            name: "Liquid Fertilizer",
            description: "Quick absorption formula for faster growth.",
            details: "Our liquid fertilizer is enriched with essential minerals for rapid plant development.",
            benefits: [
                  "Promotes fast growth",
                  "Easy to apply",
                  "Highly concentrated",
            ],
            image: "https://cdn.pixabay.com/photo/2023/08/08/15/15/strawberries-8177601_1280.jpg",
            price: "$20",
            rating: 4.6,
            size: "1 L bottle",
            coverage: "100 sq. ft. per liter",
      },
      {
            id: 3,
            name: "Organic Potting Mix",
            description: "Ready-to-use mix for all types of plants.",
            details: "Specially formulated for container gardening with balanced nutrients.",
            benefits: [
                  "Ideal for pots and planters",
                  "Improves drainage",
                  "Contains organic matter",
            ],
            image: "https://cdn.pixabay.com/photo/2023/08/08/15/15/strawberries-8177601_1280.jpg",
            price: "$12",
            rating: 4.7,
            size: "5 kg bag",
            coverage: "10 pots (12-inch diameter)",
      },
      {
            id: 4,
            name: "Bio-Insecticide",
            description: "Effective pest control without harmful chemicals.",
            details: "An eco-friendly solution to protect plants from pests.",
            benefits: [
                  "Non-toxic",
                  "Environmentally safe",
                  "Long-lasting protection",
            ],
            image: "https://cdn.pixabay.com/photo/2023/08/08/15/15/strawberries-8177601_1280.jpg",
            price: "$18",
            rating: 4.5,
            size: "500 ml bottle",
            coverage: "50 sq. ft.",
      },
      {
            id: 5,
            name: "Plant Growth Stimulant",
            description: "Enhances growth and increases yield.",
            details: "Boosts plant metabolism and improves resistance to stress.",
            benefits: [
                  "Strengthens plants",
                  "Increases resistance to disease",
                  "Eco-friendly",
            ],
            image: "https://cdn.pixabay.com/photo/2023/08/08/15/15/strawberries-8177601_1280.jpg",
            price: "$22",
            rating: 4.9,
            size: "500 ml bottle",
            coverage: "50 sq. ft.",
      },
      {
            id: 6,
            name: "Organic Lawn Feed",
            description: "Keeps your lawn lush and green.",
            details: "Specially designed for lawns, ensuring healthy growth.",
            benefits: [
                  "No harmful chemicals",
                  "Improves soil health",
                  "Provides slow-release nutrients",
            ],
            image: "https://cdn.pixabay.com/photo/2023/08/08/15/15/strawberries-8177601_1280.jpg",
            price: "$25",
            rating: 4.7,
            size: "5 kg bag",
            coverage: "100 sq. ft.",
      },
      {
            id: 7,
            name: "Soil Conditioner",
            description: "Restores soil vitality for healthier plants.",
            details: "Enhances soil properties for better plant growth.",
            benefits: [
                  "Balances pH",
                  "Improves aeration",
                  "Promotes root development",
            ],
            image: "https://cdn.pixabay.com/photo/2023/08/08/15/15/strawberries-8177601_1280.jpg",
            price: "$17",
            rating: 4.6,
            size: "10 kg bag",
            coverage: "50 sq. ft.",
      },
      {
            id: 8,
            name: "Organic Pesticide",
            description: "Safe and effective pest control.",
            details: "Protects plants without harming beneficial insects.",
            benefits: ["Non-toxic", "Easy to use", "Long-lasting effect"],
            image: "https://cdn.pixabay.com/photo/2023/08/08/15/15/strawberries-8177601_1280.jpg",
            price: "$19",
            rating: 4.5,
            size: "500 ml bottle",
            coverage: "50 sq. ft.",
      },
      {
            id: 9,
            name: "Plant Booster",
            description: "Stimulates growth and flowering.",
            details: "Specially formulated to boost flowering and fruit production.",
            benefits: [
                  "Encourages blooming",
                  "Increases fruit yield",
                  "Environmentally safe",
            ],
            image: "https://cdn.pixabay.com/photo/2023/08/08/15/15/strawberries-8177601_1280.jpg",
            price: "$30",
            rating: 4.9,
            size: "1 L bottle",
            coverage: "100 sq. ft.",
      },
];

export default function Products() {
      type Product = {
            id: number;
            name: string;
            description: string;
            details: string;
            benefits: string[];
            image: string;
            price: string;
            rating: number;
            size: string;
            coverage: string;
      };

      const [selectedProduct, setSelectedProduct] = useState<Product | null>(
            null
      );

      useEffect(() => {
            if (selectedProduct) {
                  document.body.classList.add("no-scroll");
            } else {
                  document.body.classList.remove("no-scroll");
            }

            // Cleanup
            return () => {
                  document.body.classList.remove("no-scroll");
            };
      }, [selectedProduct]);

      return (
            <>
                  <style>{disableScrollClass}</style>
                  <div
                        id="products"
                        className="py-24 bg-gradient-to-b from-white to-green-50"
                  >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="text-center mb-16 animate-fade-in">
                                    <span className="inline-block text-green-600 font-medium bg-green-100 px-4 py-1 rounded-full mb-4">
                                          Our Collection
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                                          Premium Organic Solutions
                                    </h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                          Discover our comprehensive range of
                                          premium organic fertilizers designed
                                          to enhance your crop yield naturally.
                                    </p>
                              </div>

                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {products.map((product, index) => (
                                          <div
                                                key={product.id}
                                                className="group bg-white rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up hover:shadow-xl"
                                                style={{
                                                      animationDelay: `${
                                                            index * 100
                                                      }ms`,
                                                }}
                                          >
                                                <div className="relative overflow-hidden aspect-[4/3]">
                                                      <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                      />
                                                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                      <button
                                                            onClick={() =>
                                                                  setSelectedProduct(
                                                                        product
                                                                  )
                                                            } // Fix: Pass the selected product
                                                            className="absolute bottom-4 left-4 bg-white text-green-800 px-6 py-2 rounded-full font-medium transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300"
                                                      >
                                                            View Details
                                                      </button>
                                                </div>
                                                <div className="p-6">
                                                      <div className="flex items-center justify-between mb-2">
                                                            <h3 className="text-xl font-semibold text-gray-900">
                                                                  {product.name}
                                                            </h3>
                                                            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                                                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                                                  <span className="text-sm font-medium text-gray-700">
                                                                        {
                                                                              product.rating
                                                                        }
                                                                  </span>
                                                            </div>
                                                      </div>
                                                      <p className="text-gray-600 mb-4 line-clamp-2">
                                                            {
                                                                  product.description
                                                            }
                                                      </p>
                                                      <div className="flex items-center justify-between">
                                                            <span className="text-2xl font-bold text-green-600">
                                                                  {
                                                                        product.price
                                                                  }
                                                            </span>
                                                            <button
                                                                  className="bg-green-600 text-white px-4 py-2 rounded-full font-medium
                           hover:bg-green-500 transition-colors flex items-center gap-2"
                                                            >
                                                                  <ShoppingCart className="h-4 w-4" />
                                                                  Add to Cart
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>

                        {/* Product Detail Modal */}
                        {selectedProduct && (
                              <div
                                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                                    onClick={() => setSelectedProduct(null)}
                              >
                                    <div
                                          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative animate-scale-up"
                                          onClick={(e) => e.stopPropagation()} // Prevent clicks within the modal from closing it
                                    >
                                          {/* Close Button */}
                                          <button
                                                onClick={() =>
                                                      setSelectedProduct(null)
                                                }
                                                className="absolute right-4 top-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-600 hover:text-gray-900 z-10
                                         transform hover:rotate-90 transition-all duration-300"
                                          >
                                                <X className="h-6 w-6" />
                                          </button>

                                          {/* Modal Image */}
                                          <div className="relative aspect-[16/9]">
                                                <img
                                                      src={
                                                            selectedProduct.image
                                                      }
                                                      alt={selectedProduct.name}
                                                      className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                      <h2 className="text-4xl font-bold mb-2">
                                                            {
                                                                  selectedProduct.name
                                                            }
                                                      </h2>
                                                      <div className="flex items-center gap-4">
                                                            <div className="flex items-center gap-1">
                                                                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                                                                  <span className="text-lg">
                                                                        {
                                                                              selectedProduct.rating
                                                                        }
                                                                  </span>
                                                            </div>
                                                            <span className="text-3xl font-bold">
                                                                  {
                                                                        selectedProduct.price
                                                                  }
                                                            </span>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Modal Content */}
                                          <div className="p-8">
                                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                      {/* Details Section */}
                                                      <div>
                                                            <p className="text-gray-600 mb-6 text-lg">
                                                                  {
                                                                        selectedProduct.details
                                                                  }
                                                            </p>
                                                            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                                                                  Key Benefits
                                                            </h3>
                                                            <ul className="space-y-3">
                                                                  {selectedProduct.benefits.map(
                                                                        (
                                                                              benefit,
                                                                              index
                                                                        ) => (
                                                                              <li
                                                                                    key={
                                                                                          index
                                                                                    }
                                                                                    className="flex items-center gap-3 text-gray-700"
                                                                              >
                                                                                    <div className="bg-green-100 p-2 rounded-full">
                                                                                          <Leaf className="h-5 w-5 text-green-600" />
                                                                                    </div>
                                                                                    <span>
                                                                                          {
                                                                                                benefit
                                                                                          }
                                                                                    </span>
                                                                              </li>
                                                                        )
                                                                  )}
                                                            </ul>
                                                      </div>

                                                      {/* Package and Coverage Info */}
                                                      <div className="space-y-6">
                                                            <div className="bg-gray-50 p-6 rounded-2xl">
                                                                  <div className="flex items-center gap-3 mb-3">
                                                                        <div className="bg-white p-2 rounded-full">
                                                                              <Package className="h-6 w-6 text-green-600" />
                                                                        </div>
                                                                        <span className="font-semibold text-gray-900">
                                                                              Package
                                                                              Size
                                                                        </span>
                                                                  </div>
                                                                  <p className="text-gray-600 text-lg">
                                                                        {
                                                                              selectedProduct.size
                                                                        }
                                                                  </p>
                                                            </div>

                                                            <div className="bg-gray-50 p-6 rounded-2xl">
                                                                  <div className="flex items-center gap-3 mb-3">
                                                                        <div className="bg-white p-2 rounded-full">
                                                                              <Truck className="h-6 w-6 text-green-600" />
                                                                        </div>
                                                                        <span className="font-semibold text-gray-900">
                                                                              Coverage
                                                                              Area
                                                                        </span>
                                                                  </div>
                                                                  <p className="text-gray-600 text-lg">
                                                                        {
                                                                              selectedProduct.coverage
                                                                        }
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* Add to Cart Button */}
                                                <button
                                                      className="w-full bg-green-600 text-white py-4 rounded-2xl font-semibold text-lg
                                         hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
                                                >
                                                      <ShoppingCart className="h-5 w-5" />
                                                      Add to Cart
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        )}
                  </div>
            </>
      );
}
