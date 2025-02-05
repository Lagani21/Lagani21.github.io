"use client";

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy bg-opacity-90 backdrop-blur-md p-4 text-white flex justify-center space-x-6 z-50">
      <button onClick={() => scrollToSection("home")} className="hover:underline">Home</button>
      <button onClick={() => scrollToSection("about")} className="hover:underline">About</button>
      <button onClick={() => scrollToSection("education")} className="hover:underline">Education</button>
      <button onClick={() => scrollToSection("experience")} className="hover:underline">Experience</button>
    </nav>
  );
}
