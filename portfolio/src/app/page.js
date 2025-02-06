"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect'; 
// import Typed from "react-typed";



export default function Home() {
  return (
    <div className="w-full bg-navy text-white ">
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

    {/* About Me Section */}
      <section id="about" className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-800 px-6 md:px-16">
        {/* Left Side - description */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-5xl font-extrabold">About Me</h1>
          <p className="text-xl mt-4 text-gray-300">
            I’m a 23-year-old embracing both the struggles and successes on my journey through the world of data science.
          </p>
        </div>
        {/* Right Side - image */}
        <Image 
            src="/test_image.jpg"  // Change to your actual image path
            alt="Lagani Patel"
            width={300} 
            height={300} 
            className="rounded-lg shadow-lg"/>
      </section>


      {/* <section id="education" className="h-screen flex flex-col items-center justify-center bg-blue-900">
        <h1 className="text-6xl font-extrabold">Education</h1>
        <p className="text-xl mt-4">I’m pursuing a Master of Computer Science at North Carolina State University, where I’ve been diving deep into Data analytics, data science, machine learning and Software Engineering. My undergraduate studies at Pandit Deendayal Energy University in Information and Communication Technology Engineering laid a strong foundation in Data Structures, Database Management Systems, and Operating Systems.
        </p>
      </section> */}

<section id="education" className="h-screen flex flex-col md:flex-row items-center justify-center bg-blue-900 px-10 md:px-20 mb-20">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src="/education_test.jpg"  // Replace with your actual image path
            alt="Education"
            width={350} 
            height={350} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Education Details */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-4">
          <h1 className="text-5xl font-extrabold"> Education</h1>
          <p className="text-xl mt-4 text-gray-300 leading-relaxed">
          I’m pursuing a Master of Computer Science at North Carolina State University, where I’ve been diving deep into Data analytics, data science, machine learning and Software Engineering. My undergraduate studies at Pandit Deendayal Energy University in Information and Communication Technology Engineering laid a strong foundation in Data Structures, Database Management Systems, and Operating Systems.
          </p>
        </div>
      </section>



      <section id="experience" className="h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-6xl font-extrabold">💼 Experience</h1>
        <p className="text-xl mt-4">Data Scientist at NC Museum of Natural Sciences, working on AI-driven wildlife monitoring.</p>
      </section>
    </div>
  );
}
