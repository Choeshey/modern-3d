import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaFacebook />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaInstagram />, url: '#' }
    ];

    const quickLinks = [
        { title: 'Home', url: '#' },
        { title: 'About Us', url: '#' },
        { title: 'Services', url: '#' },
        { title: 'Portfolio', url: '#' },
        { title: 'Contact', url: '#' }
    ];

    const services = [
        { title: 'Web Design', url: '#' },
        { title: 'Web Development', url: '#' },
        { title: 'Mobile Apps', url: '#' },
        { title: 'SEO', url: '#' },
        { title: 'UI/UX Design', url: '#' }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Modern3D</h3>
                        <p className="mb-6">
                            Creating beautiful digital experiences that drive results and help businesses grow in the digital world.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        className="hover:text-purple-400 transition-colors duration-300"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.url}
                                        className="hover:text-purple-400 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                                        {service.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-purple-500 mt-1 mr-3" />
                                <span>123 Business Street, Tech City, TC 12345</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="text-purple-500 mr-3" />
                                <a href="tel:+15551234567" className="hover:text-purple-400 transition-colors duration-300">
                                    +1 (555) 123-4567
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-purple-500 mr-3" />
                                <a href="mailto:info@example.com" className="hover:text-purple-400 transition-colors duration-300">
                                    info@example.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaClock className="text-purple-500 mr-3" />
                                <span>Mon - Fri: 9:00 - 18:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-500">
                        &copy; {currentYear} Modern3D. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
                        <span>•</span>
                        <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
                        <span>•</span>
                        <a href="#" className="hover:text-purple-400 transition-colors duration-300">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;