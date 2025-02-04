import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form (you can add your logic here, e.g., send to an API)
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

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
    <section id="contact" className="relative py-20 bg-gray-100 dark:bg-gray-900">
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
          Contact
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-800 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-800 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-800 dark:text-white">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg"
                placeholder="Your Message"
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </motion.div>
          </form>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;