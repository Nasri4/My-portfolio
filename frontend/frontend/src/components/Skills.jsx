import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const Skills = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Skill data with icons and proficiency levels
  const skills = [
    { name: "React", icon: <SiReact size={24} />, level: 90 },
    { name: "JavaScript", icon: <SiJavascript size={24} />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} />, level: 80 },
    { name: "Node.js", icon: <SiNodedotjs size={24} />, level: 75 },
    { name: "MongoDB", icon: <SiMongodb size={24} />, level: 70 },
    { name: "Git", icon: <SiGit size={24} />, level: 85 },
    { name: "HTML", icon: <SiHtml5 size={24} />, level: 95 },
    { name: "CSS", icon: <SiCss3 size={24} />, level: 90 },
  ];

  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-gray-800">
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
          Skills
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} // Hover effect
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative z-10"
            >
              <div className="flex items-center space-x-4">
                <div className="text-blue-500 dark:text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-2 bg-blue-500 rounded-full"
                  ></motion.div>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {skill.level}% Proficiency
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;