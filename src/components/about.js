import React from 'react';
import aboutImg from '../assets/aboutimg.jpg'; // Make sure this image exists
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="bg-black text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
                
                {/* Image */}
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={aboutImg}
                        alt="Abdul Rahuman"
                        className="rounded-3xl shadow-2xl w-full max-w-sm object-cover"
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-violet-500 mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I'm <span className="text-white font-semibold">Abdul Rahuman</span>, a Full stack developer passionate about building modern, accessible, and user-friendly websites and web applications.
                        I specialize in React, Tailwind CSS, and clean UI/UX design.
                    </p>

                    <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 text-gray-300 text-left max-w-md mx-auto md:mx-0">
                        <h3 className="text-violet-400 text-xl font-semibold">Core Skills</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>HTML5, CSS3, JavaScript</li>
                            <li>React.js, Tailwind CSS</li>
                            <li>Responsive Design & UI/UX</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
