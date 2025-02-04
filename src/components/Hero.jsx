import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import ME from "../assets/M.png"; // Ensure the path to your image is correct

const Hero = () => {
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

  return (
    <section
      id="home"
      className="w-full min-h-lvh flex justify-around bg-gray-100 dark:bg-gray-900 pt-20 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e293991] via-[#4b668fd0] to-[#1E2939] opacity-50 animate-gradient"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center flex flex-col md:flex-row items-center justify-center relative z-10"
      >
        {/* Profile Picture */}
        <motion.div
          variants={itemVariants}
          className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-8"
        >
          <img
            src={ME} // Use the imported image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col items-center md:items-start">
          {/* Animated Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold text-gray-800 dark:text-white"
          >
            Abdisamed Nasri.
          </motion.h1>

          {/* Animated Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
          >
            Full Stack Developer | Passionate about building amazing web
            applications
          </motion.p>

          {/* Animated Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => {
              window.open("/path/to/your/resume.pdf", "_blank");
            }}
          >
            Download Resume
          </motion.button>

          {/* Social Media Links */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center space-x-6"
          >
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
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-12 animate-bounce"
          >
            <a
              href="#about"
              className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
            >
              <FaArrowDown size={24} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;