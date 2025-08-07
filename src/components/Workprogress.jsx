import React from 'react';
import { FaChartLine, FaCode, FaMobileAlt, FaGlobe } from 'react-icons/fa';

const Workprogress = () => {
    const skills = [
        {
            title: 'Digital Marketing',
            progress: 85,
            icon: <FaChartLine className="text-3xl text-purple-600" />,
            description: 'Strategic marketing solutions to boost your online presence'
        },
        {
            title: 'Web Development',
            progress: 90,
            icon: <FaCode className="text-3xl text-purple-600" />,
            description: 'Custom websites built with modern technologies'
        },
        {
            title: 'Mobile App',
            progress: 80,
            icon: <FaMobileAlt className="text-3xl text-purple-600" />,
            description: 'Engaging mobile applications for iOS and Android'
        },
        {
            title: 'Web Application',
            progress: 88,
            icon: <FaGlobe className="text-3xl text-purple-600" />,
            description: 'Powerful web applications for your business needs'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Work Progress */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                            My <span className="text-purple-600">Skills</span> & Expertise
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            With years of experience in the industry, I've developed a wide range of skills to help businesses succeed in the digital world.
                        </p>

                        {/* Progress Bars */}
                        {skills.map((skill, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700 font-medium">{skill.title}</span>
                                    <span className="text-purple-600 font-semibold">{skill.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full"
                                        style={{ width: `${skill.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
                                <p className="text-gray-600">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workprogress;