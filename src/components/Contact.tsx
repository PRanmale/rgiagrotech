import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import CustomMap from "../components/Map";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function Contact() {
      return (
            <div id="contact" className="py-24 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                                    Get In Touch
                              </h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                    Have questions about our products? We're
                                    here to help!
                              </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                              <div className="bg-green-50 p-8 rounded-xl">
                                    <h3 className="text-2xl font-semibold text-green-800 mb-6">
                                          Contact Information
                                    </h3>
                                    <div className="space-y-4">
                                          <div className="flex items-center gap-4">
                                                <Mail className="h-6 w-6 text-green-600" />
                                                <span className="text-gray-600">
                                                      info@rgiagrotech.com
                                                </span>
                                          </div>
                                          <div className="flex items-center gap-4">
                                                <Phone className="h-6 w-6 text-green-600" />
                                                <span className="text-gray-600">
                                                      +91 9370878260
                                                </span>
                                          </div>
                                          <div className="flex items-center gap-4">
                                                <MapPin className="h-6 w-6 text-green-600" />
                                                <span className="text-gray-600">
                                                      Shop No. 1, RGIAgroTech,
                                                      Taluka Igatpuri, Main
                                                      Road, Wadivahre,
                                                      Maharashtra 422403
                                                </span>
                                                <APIProvider
                                                      apiKey={`process.env
                                                                  .REACT_APP_GOOGLE_MAPS_API_KEY`}
                                                >
                                                      <CustomMap />
                                                </APIProvider>
                                          </div>
                                    </div>
                              </div>

                              <form className="space-y-6">
                                    <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Name
                                          </label>
                                          <input
                                                type="text"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                          />
                                    </div>
                                    <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email
                                          </label>
                                          <input
                                                type="email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                          />
                                    </div>
                                    <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Message
                                          </label>
                                          <textarea
                                                rows={4}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                          ></textarea>
                                    </div>
                                    <button
                                          type="submit"
                                          className="w-full bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                    >
                                          Send Message
                                    </button>
                              </form>
                        </div>
                  </div>
            </div>
      );
}
