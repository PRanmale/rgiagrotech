import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import CustomMap from "../components/Map";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function Contact() {
      const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [successMessage, setSuccessMessage] = useState("");
      const [errorMessage, setErrorMessage] = useState("");

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSuccessMessage("");
            setErrorMessage("");

            // Input validation
            if (!formData.name || !formData.email || !formData.message) {
                  setErrorMessage("All fields are required.");
                  setIsSubmitting(false);
                  return;
            }

            try {
                  // Replace with your backend API endpoint or email service
                  const response = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formData),
                  });

                  if (response.ok) {
                        setSuccessMessage(
                              "Your message has been sent successfully!"
                        );
                        setFormData({ name: "", email: "", message: "" }); // Reset form
                  } else {
                        setErrorMessage(
                              "Something went wrong. Please try again."
                        );
                  }
            } catch (error) {
                  setErrorMessage(
                        "Failed to send your message. Please try again."
                  );
            } finally {
                  setIsSubmitting(false);
            }
      };
      return (
            <div id="contact" className="bg-white">
                  {/* Contact Section */}
                  <div className="py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                                          Get In Touch
                                    </h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                          Have questions about our products?
                                          We're here to help!
                                    </p>
                              </div>

                              <div className="grid md:grid-cols-2 gap-12">
                                    {/* Contact Information */}
                                    <div className="bg-green-50 p-8 rounded-xl">
                                          <h3 className="text-2xl font-semibold text-green-800 mb-6">
                                                Contact Information
                                          </h3>
                                          <div className="space-y-6">
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
                                                      <MapPin className="sm:h-8 sm:w-8 h-20 w-20 text-green-600" />
                                                      <span className="text-gray-600">
                                                            Shop No. 1,
                                                            RGIAgroTech, Taluka
                                                            Igatpuri, Main Road,
                                                            Wadivahre,
                                                            Maharashtra 422403
                                                      </span>
                                                </div>
                                                {/* Map Component */}
                                                <div className="mt-6 flex">
                                                      <APIProvider
                                                            apiKey={`process.env
                                                                        .REACT_APP_GOOGLE_MAPS_API_KEY`}
                                                      >
                                                            <CustomMap />
                                                      </APIProvider>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Contact Form */}
                                    <form
                                          action="https://formspree.io/f/xayrdnlk" // Replace {form_id} with your Formspree form ID
                                          method="POST"
                                          className="space-y-6"
                                    >
                                          <div>
                                                <label
                                                      htmlFor="name"
                                                      className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                      Name
                                                </label>
                                                <input
                                                      type="text"
                                                      name="name"
                                                      id="name"
                                                      placeholder="Your Name"
                                                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                                      required
                                                />
                                          </div>
                                          <div>
                                                <label
                                                      htmlFor="email"
                                                      className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                      Email
                                                </label>
                                                <input
                                                      type="email"
                                                      name="email"
                                                      id="email"
                                                      placeholder="Your Email"
                                                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                                      required
                                                />
                                          </div>
                                          <div>
                                                <label
                                                      htmlFor="message"
                                                      className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                      Message
                                                </label>
                                                <textarea
                                                      name="message"
                                                      id="message"
                                                      rows={4}
                                                      placeholder="Your Message"
                                                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                                      required
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

                  {/* Footer */}
                  <footer className="bg-green-800 text-white py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                              <p className="text-sm">
                                    © {new Date().getFullYear()} RGIAgroTech.
                                    All rights reserved.
                              </p>
                        </div>
                  </footer>
            </div>
      );
}
