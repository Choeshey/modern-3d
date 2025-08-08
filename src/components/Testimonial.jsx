import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO, TechStart Inc.',
            content: 'Working with this team was an absolute pleasure. They delivered our project ahead of schedule and exceeded our expectations in every way possible.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Product Manager, InnovateX',
            content: 'The quality of work and attention to detail is outstanding. They truly understand our vision and brought it to life beautifully.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Marketing Director, BrandFlow',
            content: 'Exceptional service and communication throughout the entire process. We saw a 40% increase in engagement after implementing their solutions.',
            rating: 4,
            image: 'https://randomuser.me/api/portraits/women/68.jpg'
        }
    ];

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
            <FaStar
                key={i}
                className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} inline-block`}
            />
        ));
    };

    return (
        <section className="py-20 bg-[var(--surface)] dark:bg-[var(--background)]">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our <span className="text-purple-600">Clients Say</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-[var(--surface)] dark:bg-[var(--background)] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="mb-6 text-purple-500">
                                <FaQuoteLeft className="text-4xl opacity-20" />
                            </div>
                            <p className="text-gray-600 mb-6 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    <div className="mt-1">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: '95%', label: 'Client Satisfaction' },
                        { number: '200+', label: 'Projects Completed' },
                        { number: '50+', label: 'Happy Clients' },
                        { number: '98%', label: 'Success Rate' }
                    ].map((stat, index) => (
                        <div key={index} className="p-6 bg-[var(--surface)] dark:bg-[var(--background)] rounded-xl shadow-md">
                            <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;