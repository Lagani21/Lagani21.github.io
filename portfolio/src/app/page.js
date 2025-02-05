"use client";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect'; 
// import Typed from "react-typed";



export default function Home() {
  return (
    <div className="w-full bg-navy text-white">
      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold">Lagani Patel</h1>
        {/* Typing Effect - FIXED HTML STRUCTURE */}
        <div className="text-2xl mt-4 flex items-center">
          <span>I build </span>
          <span className="text-blue-400 font-bold ml-2">
            <Typewriter
              options={{
                strings: ["intelligent systems.", "interactive applications.", "data-driven solutions."],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </span>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about" className="h-screen flex flex-col items-center justify-center bg-blue-900">
        <h1 className="text-6xl font-extrabold">About Me</h1>
        <p className="text-xl mt-4">I’m a 23-year-old embracing both the struggles and successes on my journey through the world of data science.</p>
      </section>

      <section id="education" className="h-screen flex flex-col items-center justify-center bg-gray-800">
        <h1 className="text-6xl font-extrabold">🎓 Education</h1>
        <p className="text-xl mt-4">I’m pursuing a Master of Computer Science at North Carolina State University.</p>
      </section>

      <section id="experience" className="h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-6xl font-extrabold">💼 Experience</h1>
        <p className="text-xl mt-4">Data Scientist at NC Museum of Natural Sciences, working on AI-driven wildlife monitoring.</p>
      </section>
    </div>
  );
}
