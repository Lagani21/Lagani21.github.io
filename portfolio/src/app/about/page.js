"use client"; 
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container max-w-4xl mx-auto p-6 space-y-12"
    >
      {/* Title Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-500">About Me</h1>
        <p className="text-lg text-gray-500 mt-2">
          I’m a 23-year-old embracing both the struggles and successes on my journey through the world of data science.
        </p>
      </section>

      {/* Introduction */}
      <section>
        <h2 className="text-3xl font-bold text-gray-300"> Introduction</h2>
        <p className="text-lg text-gray-400 mt-2">
          Hi, I’m <span className="text-white font-semibold">Lagani Patel</span>, an aspiring data science enthusiast on my journey to simplify data science for myself.
        </p>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-3xl font-bold text-gray-300"> Education</h2>
        <p className="text-lg text-gray-400 mt-2">
          I’m pursuing a <span className="font-semibold text-white">Master of Computer Science</span> at <span className="font-semibold text-white">North Carolina State University</span>, diving deep into **Data analytics, data science, machine learning, and software engineering**.
        </p>
        <p className="text-lg text-gray-400 mt-2">
          My undergraduate studies at <span className="font-semibold text-white">Pandit Deendayal Energy University</span> in **Information and Communication Technology Engineering** built a strong foundation in **Data Structures, Database Management Systems, and Operating Systems**.
        </p>
      </section>

      {/* Professional Experience */}
      <section>
        <h2 className="text-3xl font-bold text-gray-300"> Professional Experience</h2>

        {/* Data Scientist - NC Museum of Natural Sciences */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-400">Data Scientist | NC Museum of Natural Sciences</h3>
          <p className="text-lg text-gray-400 mt-2">
          I’m currently working as a Data Scientist at the NC Museum of Natural Sciences, where we’re developing AI-driven solutions to improve wildlife monitoring across the United States. Our goal is to create an automated system capable of processing tens of thousands of camera trap images collected from diverse environments nationwide.
We use libraries like TensorFlow, PyTorch, and OpenCV to build scalable models that detect and classify mammals with high accuracy. By integrating AI into our workflow, we’re reducing the need for manual processing and improving detection across large datasets. One of the key aspects of our work involves depth estimation models, which help researchers understand animal positions relative to their habitat. This allows for more accurate population density analysis and provides deeper insights into wildlife distribution.
Beyond image recognition, we focus on designing robust data processing workflows that handle the unique challenges of large-scale ecological datasets. Automating these processes not only saves time but also ensures more consistent and reliable wildlife monitoring.           </p>
        </div>

        {/* Machine Learning Engineer - NC State University */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-400">Machine Learning Engineer | NC State University</h3>
          <p className="text-lg text-gray-400 mt-2">
          Previously, I worked as a Machine Learning Engineer in the Mechanical and Aerospace Engineering Department at NC State University, where I focused on developing machine learning models for predicting thermal conductivity profiles. Our goal was to enhance simulation accuracy by leveraging machine learning algorithm and automating data-driven workflows.

To achieve this, I utilized MATLAB’s API Engine with Python to generate over 30,000 data points, significantly streamlining the data simulation process. By implementing machine learning models using Regression algorithms and ensemble learning, I improved predictive accuracy while optimizing computational efficiency. These improvements helped reduce processing time and made thermal modeling more scalable and precise.

Beyond model development, I worked on refining data processing workflows to ensure seamless integration with existing research tools, enabling a more automated and efficient approach to material behavior analysis.
          </p>
        </div>

        {/* Software Engineering Intern - CaringHumans */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-400">Software Engineering Intern | CaringHumans</h3>
          <p className="text-lg text-gray-400 mt-2">
          As a Software Engineering Intern at CaringHumans, I worked on developing and optimizing a platform that connects NDIS participants with verified support workers across Australia. My primary focus was enhancing the user experience through frontend development while integrating API-driven functionalities to support dynamic interactions.

On the frontend, I worked extensively with HTML5, CSS3, and JavaScript frameworks to implement responsive design principles, ensuring accessibility across mobile, tablet, and desktop devices. I optimized page layouts, improved interactive elements, and enhanced UI consistency to provide a seamless experience for users.

In addition, I contributed to RESTful API development, allowing for real-time caregiver profile viewing, booking management, and secure user authentication. By working closely with backend engineers, I helped ensure seamless data flow between the frontend and backend, resulting in a more efficient and scalable platform.

          </p>
        </div>
      </section>
      </motion.div>
  );
}
