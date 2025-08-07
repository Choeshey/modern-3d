import React from 'react';

const Partnerhand = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's Work <span className="text-white">Together</span>
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-gray-100 mb-10 leading-relaxed">
                        Join our network of partners and take your business to the next level.
                        We collaborate with innovative companies to create exceptional digital experiences.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-10">
                        <button className="relative group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="relative z-10 flex items-center justify-center">
                                Join Our Partner Network
                                <svg
                                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </button>
                    </div>

                    {/* Trust Badges or Logos can be added here */}
                    <div className="mt-16 pt-8 border-t">
                        <p className="text-gray-500 mb-6">Trusted by innovative companies worldwide</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                            {['Google', 'GitHub', 'Meta', 'Flipkart'].map((company, index) => (
                                <div key={index} className="text-gray-400 font-medium">
                                    {company}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partnerhand;