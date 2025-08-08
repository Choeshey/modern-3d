import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { projects } from '../constants/index.js';

const Portfolia = () => {

    return (
        <section className="py-20 bg-[var(--surface)] dark:bg-[var(--background)]">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        My <span className="text-purple-600">Portfolio</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Check out some of my recent projects and work
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-[var(--surface)] dark:bg-[var(--background)] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[var(--surface)] dark:border-[var(--background)]"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-[var(--surface)] dark:bg-[var(--background)] text-purple-600 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href="#"
                                    className="inline-flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors duration-300"
                                >
                                    Learn More
                                    <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolia;