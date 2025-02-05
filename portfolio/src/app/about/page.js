"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="h-screen flex flex-col items-center justify-center bg-blue-900 text-white p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-extrabold">About Me</h1>
      <p className="text-xl mt-4 max-w-3xl text-center">
        I’m a 23-year-old embracing both the struggles and successes on my journey through the world of data science.
      </p>

      {/* Additional Details */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 text-center max-w-2xl"
      >
        <h2 className="text-4xl font-bold">👋 Introduction</h2>
        <p className="text-lg mt-2 text-gray-300">
          Hi, I’m <span className="text-white font-semibold">Lagani Patel</span>, an aspiring data science enthusiast on my journey to simplify data science for myself.
        </p>
      </motion.div>
    </motion.section>
  );
}
