import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Me from "../assets/about.jpeg"; // Ensure the path to your image is correct

const About = () => {
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

  // Skill data
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Node.js", level: 75 },
  ];

  return (
    <section id="about" className="relative py-20 bg-white dark:bg-gray-800">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293991] via-[#4b668fd0] to-[#1E2939] opacity-50 z-0 animate-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col md:flex-row items-center"
          >
            {/* Corrected image usage */}
            <img
              src={Me} // Use the imported image variable directly
              alt="Profile"
              className="w-48 h-48 rounded-full shadow-lg"
            />
            <div className="mt-4 md:mt-0 md:ml-8">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm a full-stack developer with 3+ years of experience building scalable and user-friendly web applications. I specialize in React, Node.js, and modern JavaScript frameworks.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Skills
                </h3>
                <div className="mt-4 space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-gray-800 dark:text-white">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-2 bg-blue-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Connect with Me
                </h3>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="https://github.com/Nasri4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nasri-x4-35292a349/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://x.com/Nasri_xi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;