"use client";
import { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [hasMounted, setHasMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      const sections = ["home", "experience", "education", "beyond code"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMounted]);

  if (!hasMounted) {
    return null; // Prevents rendering until the component mounts
  }

  // Function to get navbar background color based on section
  const getNavbarColor = () => {
    switch (activeSection) {
      case "experience":
        return "bg-[#1A2A40]";
      case "education":
        return "bg-[#2C4678]";
      case "about":
        return "bg-[#7586A9]";
      case "beyond code":
        return "bg-[#C5CEE6]";
      default:
        return "bg-[#001F3F]";
    }
  };

  // Function to get navbar text color based on section
  const getNavbarTextColor = () => {
    switch (activeSection) {
      case "education":
      case "beyond code":
        return "text-black";
      default:
        return "text-white";
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 flex-none p-4 flex items-center justify-between border-none shadow-none z-50 transition-all duration-500 ${getNavbarColor()} ${getNavbarTextColor()}`}
      style={{ margin: 0, borderBottom: "none" }}
    >
      {/* Empty Spacer on Left Side */}
      <div className="flex-1"></div>

      {/* Navbar Links (Centered) */}
      <div className="flex space-x-6">
        {["home", "experience", "education", "beyond code"].map((section) => (
          <button
            key={section}
            onClick={() => {
              const target = document.getElementById(section);
              if (target) {
                window.scrollTo({
                  top: target.offsetTop - 60,
                  behavior: "smooth",
                });
              }
            }}
            className={`px-4 transition-all duration-300 ${
              activeSection === section ? "font-bold scale-105" : ""
            }`}
          >
            {section.replace("-", " ").charAt(0).toUpperCase() + section.replace("-", " ").slice(1)}
          </button>
        ))}
      </div>

      {/* Contact Section (Right Side) */}
      <div className="flex space-x-4 flex-1 justify-end pr-4">
        <a
          href="https://www.linkedin.com/in/laganipatel/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:opacity-80 transition-all duration-300 ${getNavbarTextColor()}`}
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:laganipatel@gmail.com"
          className={`hover:opacity-80 transition-all duration-300 ${getNavbarTextColor()}`}
          aria-label="Email"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </nav>
  );
}
