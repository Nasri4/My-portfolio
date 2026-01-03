import React from "react";
import { motion } from "framer-motion";
import Todo from "../assets/image.png";
import PortfolioProjects from "../assets/image copy.png";
import Ecommerce from "../assets/image copy 2.png";

const Projects = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Project data
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A responsive e-commerce website built with React and Tailwind CSS.",
      link: "https://github.com/yourusername/project1",
      image: Ecommerce,
      tags: ["React", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Task Management App",
      description: "A task management app with real-time updates using Firebase.",
      link: "https://github.com/yourusername/project2",
      image: Todo,
      tags: ["React", "Firebase", "Real-Time"],
    },
    {
      title: "Portfolio Website",
      description: "A portfolio website showcasing my projects and skills.",
      link: "https://github.com/yourusername/project3",
      image: PortfolioProjects,
      tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-gray-100 dark:bg-gray-900">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293991] via-[#4b668fd0] to-[#1E2939] opacity-50 z-0 animate-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white"
        >
          Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} // Hover effect
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative z-10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;