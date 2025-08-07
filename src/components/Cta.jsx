import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Cta = () => {
    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className="text-xl text-purple-600" />,
            title: 'Our Location',
            text: '123 Business Street, Tech City, TC 12345'
        },
        {
            icon: <FaPhoneAlt className="text-xl text-purple-600" />,
            title: 'Phone Number',
            text: '+1 (555) 123-4567'
        },
        {
            icon: <FaEnvelope className="text-xl text-purple-600" />,
            title: 'Email Address',
            text: 'contact@example.com'
        },
        {
            icon: <FaClock className="text-xl text-purple-600" />,
            title: 'Working Hours',
            text: 'Mon - Fri: 9:00 - 18:00'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl overflow-hidden shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Column - Contact Info */}
                        <div className="p-12 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                            <p className="text-purple-100 mb-10 max-w-md">
                                Have a project in mind or want to discuss potential opportunities?
                                Feel free to reach out to us using the contact information below.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="bg-white/10 p-3 rounded-lg mr-4">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">{item.title}</h4>
                                            <p className="text-purple-100">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                                            aria-label={social}
                                        >
                                            <span className="sr-only">{social}</span>
                                            {social[0]}
                                        </a>
                                    ))}
                                </div>
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
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
            </div>
        </section>
    );
};

export default Cta;