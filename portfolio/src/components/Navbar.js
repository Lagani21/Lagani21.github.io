"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "skills", "education", "beyond-code"];
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
  }, []);

  const getNavbarColor = () => {
    switch (activeSection) {
      case "experience":
        return "bg-[#1A2A40]";
      case "education":
        return "bg-[#2C4678]";
      case "about":
        return "bg-[#7586A9]";
      case "beyond-code":
        return "bg-[#C5CEE6]";
      default:
        return "bg-[#001F3F]";
    }
  };

  const getNavbarTextColor = () => {
    switch (activeSection) {
      case "education":
      case "beyond-code":
        return "text-black"; // Match black text sections
      default:
        return "text-white"; // Default navbar text color
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 flex justify-center space-x-6 z-50 transition-all duration-500 ${getNavbarColor()} ${getNavbarTextColor()}`}>
      {["home", "experience", "skills", "education", "beyond-code"].map((section) => (
        <button
          key={section}
          onClick={() => {
            const target = document.getElementById(section);
            if (target) {
              window.scrollTo({
                top: target.offsetTop - 60, // Offset for fixed navbar
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
    </nav>
  );
}
