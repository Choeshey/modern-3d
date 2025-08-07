import React from 'react';
import { contactInfo } from '../constants';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Cta = () => {
    // Create a mapping of icon names to their corresponding components
    const iconComponents = {
        FaMapMarkerAlt: FaMapMarkerAlt,
        FaPhoneAlt: FaPhoneAlt,
        FaEnvelope: FaEnvelope,
        FaClock: FaClock
    };

    return (
        <section className="py-20  bg-gradient-to-r bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-purple-100">
                    {/* Left side - Contact Info */}
                    <div className="bg-gradient-to-t from-gray-100 to-gray-50 p-12 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                        <p className="text-gray-600 mb-8">
                            Have a project in mind or want to discuss potential opportunities?
                            Feel free to reach out and let's create something amazing together.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => {
                                const IconComponent = iconComponents[item.icon];
                                return (
                                    <div key={index} className="flex items-start">
                                        <div className="bg-white/10 p-3 rounded-lg mr-4">
                                            <IconComponent className="text-xl text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 ">{item.title}</h4>
                                            <p className="text-gray-600">{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-600"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-600"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-600"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-600"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;