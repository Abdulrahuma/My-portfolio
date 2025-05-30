import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import heroimg from '../assets/img 2.png'; // Update with your correct image path

const Hero = () => {
    const [showContact, setShowContact] = useState(false);

    const handleContactClick = () => {
        setShowContact(!showContact);
    };

    return (
        <section
            id="home"
            className="bg-gradient-to-b from-black via-gray-900 to-black text-white pt-28 pb-20 px-6 md:px-12"
        >
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Hi, I'm <span className="text-violet-500">Abdul Rahuman</span>
                    </motion.h1>
                    <motion.h2
                        className="text-xl md:text-2xl text-violet-300 mb-6 font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        MERN Stack & Full Stack Web Developer
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-lg mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        I design and develop responsive, accessible web applications with elegant UI using modern tools like React, Tailwind, and Framer Motion.
                    </motion.p>

                    {/* Contact Button */}
                    <motion.button
                        onClick={handleContactClick}
                        whileHover={{ scale: 1.05 }}
                        className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white px-6 py-3 rounded-xl shadow-md font-semibold"
                    >
                        {showContact ? 'Hide Contact Info' : 'Contact Me'}
                    </motion.button>

                    {/* Contact Info Reveal */}
                    <AnimatePresence>
                        {showContact && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden mt-6 bg-gray-800 p-6 rounded-xl shadow-xl space-y-3 max-w-md"
                            >
                                <p><strong>Email:</strong>{' '}
                                    <a href="mailto:romanrahuman@gmail.com" className="text-violet-300 underline">
                                        romanrahuman@gmail.com
                                    </a>
                                </p>
                                <p><strong>Phone:</strong>{' '}
                                    <a href="tel:+917708820340" className="text-violet-300 underline">
                                        +91 7708820340
                                    </a>
                                </p>
                                <p>
                                    <strong>LinkedIn:</strong>{' '}
                                    <a
                                        href="https://www.linkedin.com/in/rahuman007"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-violet-300 underline"
                                    >
                                        View Profile
                                    </a>
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Scroll Down Arrow */}
                    <div className="mt-12 flex justify-center md:justify-start">
                        <a href="#about" aria-label="Scroll to About">
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="text-violet-400 hover:text-violet-300"
                            >
                                <ChevronDoubleDownIcon className="h-8 w-8" />
                            </motion.div>
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={heroimg}
                        alt="Abdul Rahuman"
                        className="rounded-3xl shadow-2xl w-full max-w-sm object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
