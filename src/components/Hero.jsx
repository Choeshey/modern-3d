import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden ">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white-900/80 via-slate-50-900 to-slate-100-900/80"></div>
                <div className="absolute inset-0 bg-gradient-to-r bg-cover bg-center mix-blend-overlay"></div>
            </div>

            {/* Content */}
            <div className="container relative z-10 px-6 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Column - Text Content */}
                    <div className="lg:w-1/2">
                        <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Transform Your <span className="text-purple-600">Digital Presence</span>
                        </h1>
                        <p className="text-xl text-gray-900 mb-10 max-w-lg">
                            We create stunning digital experiences that drive results and leave lasting impressions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 !text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:!text-teal-50 shadow-lg">
                                Get Started
                            </button>
                            <button className="px-8 py-4 bg-white/10 text-gray-900 font-semibold rounded-lg hover:bg-gray-100/20 transition-all duration-300 backdrop-blur-sm  border border-gray-600/20">
                                Learn More
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[var(--surface)] dark:bg-[var(--background)] rounded-lg">
                            {[
                                { number: '10K+', label: 'Projects' },
                                { number: '98%', label: 'Satisfaction' },
                                { number: '5★', label: 'Rating' }
                            ].map((stat, index, array) => (
                                <div
                                    key={index}
                                    className={`
                bg-[var(--background)] dark:bg-[var(--surface)] 
                backdrop-blur-sm p-4 rounded-lg 
                border border-[var(--text-muted)]/20
                ${index < array.length - 1 ? 'sm:border-r-2 sm:border-[var(--text)]/20' : ''}
            `}
                                >
                                    <div className="text-2xl font-bold text-[var(--text)] mb-1">{stat.number}</div>
                                    <div className="text-gray-500 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="lg:w-1/2 mt-12 lg:mt-0">
                        <div className="relative">
                            <img 
                                src="./images/heroimg1.png"
                                alt="Digital Transformation"
                                className="w-full h-auto max-h-[600px] object-cover"
                            />
                            {/* Bottom Blur Effect */}
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-90 rounded-b-2xl"></div>
                            {/* Decorative Blobs */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute -top-6 -left-6 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;