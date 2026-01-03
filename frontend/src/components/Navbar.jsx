import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Initialize dark mode based on system preference or localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
      closeMenu();
    }
  };

  // Highlight active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 p-2 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Nasri.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className={`text-gray-800 dark:text-white hover:text-blue-500 transition-colors ${
              activeLink === "home" ? "text-blue-500" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className={`text-gray-800 dark:text-white hover:text-blue-500 transition-colors ${
              activeLink === "about" ? "text-blue-500" : ""
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className={`text-gray-800 dark:text-white hover:text-blue-500 transition-colors ${
              activeLink === "projects" ? "text-blue-500" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
            className={`text-gray-800 dark:text-white hover:text-blue-500 transition-colors ${
              activeLink === "skills" ? "text-blue-500" : ""
            }`}
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className={`text-gray-800 dark:text-white hover:text-blue-500 transition-colors ${
              activeLink === "contact" ? "text-blue-500" : ""
            }`}
          >
            Contact
          </a>
         
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-800 dark:text-white focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4 transition-all duration-300`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className={`block py-2 text-gray-800 dark:text-white hover:text-blue-500 transition-colors ${
            activeLink === "home" ? "text-blue-500" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className={`block py-2 text-gray-800 dark:text-white hover:text-blue-500 transition-colors ${
            activeLink === "about" ? "text-blue-500" : ""
          }`}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
          className={`block py-2 text-gray-800 dark:text-white hover:text-blue-500 transition-colors ${
            activeLink === "projects" ? "text-blue-500" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#skills"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("skills");
          }}
          className={`block py-2 text-gray-800 dark:text-white hover:text-blue-500 transition-colors ${
            activeLink === "skills" ? "text-blue-500" : ""
          }`}
        >
          Skills
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className={`block py-2 text-gray-800 dark:text-white hover:text-blue-500 transition-colors ${
            activeLink === "contact" ? "text-blue-500" : ""
          }`}
        >
          Contact
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;