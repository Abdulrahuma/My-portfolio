import React from 'react';
import { motion } from 'framer-motion';
import imgp from '../assets/proimg.jpg';
import imgp2 from '../assets/proimg 2.jpg';

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with React and Tailwind CSS showcasing my projects and skills.",
        image: imgp, // use the imported local image
        github: "https://github.com/yourusername/portfolio",
        demo: "https://your-portfolio-site.netlify.app"
    },
    {
        title: "Weather App",
        description: "A React app that shows live weather data using OpenWeatherMap API.",
        image: imgp2, // use the imported local image
        github: "https://github.com/yourusername/weather-app",
        demo: "https://weather-app-demo.netlify.app"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="bg-black text-white py-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-violet-500 text-center mb-12">My Projects</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-semibold text-violet-400">{project.title}</h3>
                                <p className="text-gray-300">{project.description}</p>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-violet-300 underline"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-violet-300 underline"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
