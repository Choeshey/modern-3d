import React from 'react';

const About = () => {
    return (
        <section className="py-20 bg-gray-100 ">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Column - Image */}
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <img
                                src="./images/heroimg1.png"
                                alt="About Me"
                                className="w-full h-auto max-h-[600px] object-cover "
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        </div>
                    </div>

                    {/* Right Column - Text and Buttons */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About <span className="text-purple-600">Me</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            I'm a passionate developer with expertise in creating beautiful, responsive, and user-friendly web applications.
                            With years of experience in the industry, I've helped numerous clients bring their digital visions to life.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            My approach combines technical excellence with creative problem-solving to deliver exceptional results
                            that exceed expectations.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                                View Projects
                            </button>
                            <a
                                href="/path-to-cv.pdf"
                                download
                                className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300 text-center"
                            >
                                Download CV
                            </a>
                        </div>

                        {/* Skills/Highlights */}
                        <div className="mt-12 grid grid-cols-2 gap-4">
                            {[
                                { title: 'Experience', value: '5+ Years' },
                                { title: 'Projects', value: '100+' },
                                { title: 'Clients', value: '50+' },
                                { title: 'Awards', value: '10+' }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-600">{item.value}</div>
                                    <div className="text-gray-600">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;