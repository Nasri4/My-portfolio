import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

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
      setErrors({});
      setSending(true);
      setStatusMessage("");

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      if (!serviceId || !templateId || !publicKey) {
        setSending(false);
        setStatusMessage(
          "EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env"
        );
        return;
      }

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent", response.status, response.text);
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setShowPopup(true);
        })
        .catch((err) => {
          console.error("Email send error", err);
          setStatusMessage("Failed to send message. Please try again later.");
        })
        .finally(() => setSending(false));
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
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-white">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg"
                placeholder="Your Name"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg"
                placeholder="Your Email"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg"
                placeholder="Your Message"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              ></textarea>
              {errors.message && (
                <p id="message-error" className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center"
                disabled={sending}
                aria-busy={sending}
              >
                <FaPaperPlane className="mr-2" />
                {sending ? "Sending..." : "Send Message"}
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

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4 shadow-xl"
          >
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                <FaPaperPlane className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Thank you for your message. I'll get back to you soon.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;