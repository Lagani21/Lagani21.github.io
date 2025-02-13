"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold">Lagani Patel</h1>
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

      {/* Experience Section - Timeline-Based */}
      {mounted && (
        <motion.section
          id="experience"
          className="h-screen flex flex-col items-center justify-center text-black bg-[#7586A9] px-10 md:px-20 pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <h1 className="text-6xl font-extrabold text-black">Experience</h1>
          <div className="relative w-full max-w-4xl mt-10">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-[95%]"></div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {/* 1. Small Card with 2025 on Left */}
              <motion.div
                className="flex w-full items-center justify-start relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* Small Transparent Card */}
                <div className="absolute left-[45%] top-1/2 transform -translate-x-1/2 -translate-y-[20%] bg-transparent text-white rounded-lg w-20 h-20 flex items-center justify-center z-10">
                  <span className="text-lg font-bold">2025</span>
                </div>
              </motion.div>

              {/* 2. Dynamic Card for Data Scientist on Right */}
              <motion.div
                className="flex w-full items-center justify-end relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* Experience Card */}
                <div className="experience-card left-[50%] top-[50%] transform -translate-x-[18%] -translate-y-[0%] bg-white text-black rounded-lg shadow-lg p-5 w-[350px] h-[140px] flex flex-col justify-center transition-all duration-500 ease-in-out hover:h-[400px]">
                  <h2 className="text-xl font-bold">Data Scientist - NC Museum of Natural Sciences</h2>
                  <p className="text-gray-600 text-sm">Oct 2024 - Present</p>
                  <div className="details opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[200px] mt-4">
                    <p className="text-gray-500">
                      Developed AI models for species recognition, collaborated with conservationists to analyze ecological patterns, and optimized data pipelines for large-scale image processing.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 3. Dynamic Card for Event Manager on Left */}
              <motion.div
                className="flex w-full items-center justify-start relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* Experience Card */}
                <div className="experience-card left-[50%] top-[50%] transform -translate-x-[-18%] -translate-y-[10%] bg-white text-black rounded-lg shadow-lg p-5 w-[350px] h-[140px] flex flex-col justify-center transition-all duration-500 ease-in-out hover:h-[400px]">
                  <h2 className="text-xl font-bold">Event Manager - NC State University</h2>
                  <p className="text-gray-600 text-sm">2022 - Present</p>
                  <div className="details opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[200px] mt-4">
                    <p className="text-gray-500">
                      Coordinated large-scale university events, handled logistics, supervised event staff, and implemented marketing strategies to increase attendance.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 4. Small Card with 2024 on Right */}
              <motion.div
                className="flex w-full items-center justify-start relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* Small Transparent Card */}
                <div className="absolute left-[55%] top-[80%] transform -translate-x-[50%] -translate-y-[120%] bg-transparent text-white rounded-lg w-20 h-20 flex items-center justify-center z-10">
                  <span className="text-lg font-bold">2024</span>
                </div>
              </motion.div>

              {/* 5. Dynamic Card for Software Engineer Intern on Right */}
              <motion.div
                className="flex w-full items-center justify-end relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* Experience Card */}
                <div className="experience-card left-[50%] top-[50%] transform -translate-x-[18%] -translate-y-[30%] bg-white text-black rounded-lg shadow-lg p-5 w-[350px] h-[140px] flex flex-col justify-center transition-all duration-500 ease-in-out hover:h-[400px]">
                  <h2 className="text-xl font-bold">Software Engineering Intern - Tech Startup</h2>
                  <p className="text-gray-600 text-sm">Summer 2021</p>
                  <div className="details opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[200px] mt-4">
                    <p className="text-gray-500">
                      Designed and built REST APIs, optimized database queries, implemented CI/CD pipelines, and collaborated in Agile development sprints.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 6. Small Card for 2023 on Left */}
              <motion.div
                className="flex w-full items-center justify-start relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* Small Transparent Card */}
                <div className="absolute left-[45%] top-1/2 transform -translate-x-1/2 -translate-y-[100%] bg-transparent text-white rounded-lg w-20 h-20 flex items-center justify-center z-10">
                  <span className="text-lg font-bold">2023</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Education Section */}
      <motion.section id="education" className="h-screen flex flex-col md:flex-row items-center justify-center bg-[#2C4678] px-10 md:px-20 pb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}>
        <div className="relative group md:mr-10">
          <Image
            src="/education_test.jpg"
            alt="University 2"
            width={400}
            height={300}
            className="rounded-lg shadow-lg transition duration-300 group-hover:opacity-75"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-10">
          <h1 className="text-5xl font-extrabold text-white">Education</h1>
          <p className="text-xl mt-4 text-gray-300">
            I’m pursuing a Master of Computer Science at North Carolina State University, where I’ve been diving deep into Data Analytics, Data Science, Machine Learning, and Software Engineering. My undergraduate studies at Pandit Deendayal Energy University in Information and Communication Technology Engineering laid a strong foundation in Data Structures, Database Management Systems, and Operating Systems.
          </p>
        </div>
      </motion.section>
      
      {/* abeyond code section */}
      <motion.section
        id="beyond code"
        className="h-screen flex flex-col md:flex-row items-center justify-center bg-[#7586A9] px-6 md:px-16 pb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-white">Beyond Code</h1>
          <p className="text-xl mt-4 text-gray-300">
            I’m a 23-year-old embracing both the struggles and successes on my journey through the world of data science.
          </p>
          <p className="text-xl mt-4 text-gray-300">
            Tech is a big part of my life, but beyond coding, I find joy in many different things. I am a part-time event manager at our university's Student Union and have managed over 100 events, making sure everything runs smoothly.
          </p>
          <p className="text-xl mt-4 text-gray-300">
            I like photography and enjoy learning about filmmaking, with <span className="font-semibold text-white">Mike Flanagan</span> being my recent favorite director.
          </p>
          <p className="text-xl mt-4 text-gray-300">
            Cooking is another passion—I love trying new recipes and finding creative ways to meet my protein goals as a vegetarian. I also enjoy reading poetry and discovering new stories. Whether it’s planning an event, capturing a moment, or experimenting in the kitchen, I love exploring creativity in different ways.
          </p>
        </div>

        {/* Image/Video Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/test_image.jpg"
            alt="Lagani Patel"
            width={350}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>


      </motion.section>

    </div>
  );
}