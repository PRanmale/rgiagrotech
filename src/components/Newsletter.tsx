import React from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
      return (
            <div className="py-24 bg-green-900">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                              <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                                                Stay Updated
                                          </h2>
                                          <p className="text-gray-600 mb-4">
                                                Subscribe to our newsletter for
                                                the latest farming tips, product
                                                updates, and exclusive offers.
                                          </p>
                                          <div className="flex flex-col gap-4 max-w-md md:flex-row">
                                                <input
                                                      type="email"
                                                      placeholder="Enter your email"
                                                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                                />
                                                <button className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                                                      Subscribe
                                                      <Send className="h-5 w-5" />
                                                </button>
                                          </div>
                                    </div>
                                    <div className="hidden md:block">
                                          <img
                                                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80"
                                                alt="Farming Newsletter"
                                                className="rounded-lg shadow-lg"
                                          />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
