import React from 'react';
import { FaSmile, FaCheckCircle } from 'react-icons/fa';

const Happyclient = () => {
    const companyLogos = [
        { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
        { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Header and Counter */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
                        <FaSmile className="text-4xl text-purple-600" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Happy <span className="text-purple-600">Clients</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        We've had the pleasure of working with amazing companies around the world
                    </p>

                    {/* Works Counter */}
                    <div className="inline-flex items-center bg-purple-50 px-6 py-3 rounded-full">
                        <FaCheckCircle className="text-purple-600 mr-2" />
                        <span className="text-xl font-semibold text-gray-800">100+ Works Completed</span>
                    </div>
                </div>

                {/* Marquee Logos */}
                <div className="relative overflow-hidden py-8">
                    <div className="flex items-center">
                        {/* First Set */}
                        <div className="flex items-center justify-around flex-shrink-0 min-w-full animate-marquee">
                            {companyLogos.map((company, index) => (
                                <div key={index} className="mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex items-center justify-around flex-shrink-0 min-w-full animate-marquee">
                            {companyLogos.map((company, index) => (
                                <div key={`duplicate-${index}`} className="mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom animation for marquee */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Happyclient;