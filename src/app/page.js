"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center pt-0 mt-0">
        <h1 className="text-6xl font-extrabold">Lagani Patel</h1>
        <div className="text-2xl mt-4 flex items-center">
          <span>I build </span>
          <span className="text-blue-400 font-bold ml-2">
            <ReactTyped
              strings={[
                "intelligent systems.",
                "interactive applications.",
                "data-driven solutions.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
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
                <div className="experience-card group left-[50%] top-[50%] transform -translate-x-[18%] -translate-y-[0%] bg-white text-black rounded-lg shadow-lg p-5 w-[350px] h-[140px] flex flex-col justify-center transition-all duration-500 ease-in-out hover:h-[500px]">
                  <h2 className="text-xl font-bold">Data Scientist - NC Museum of Natural Sciences</h2>
                  <p className="text-gray-600 text-sm">Oct 2024 - Present</p>
                  <div className="details opacity-0 max-h-0 overflow-y-auto transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[400px] mt-4">
                    <p className="text-gray-500 text-sm">
                      I’m currently working as a Data Scientist at the NC Museum of Natural Sciences, where we’re developing AI-driven solutions as part of the Snapshot USA project to improve wildlife monitoring across the United States. Our goal is to create an automated system capable of processing tens of thousands of camera trap images collected from diverse environments nationwide.

                      We use libraries like TensorFlow, PyTorch, and OpenCV to build scalable models that detect and classify mammals with high accuracy. A key focus of our work is estimating depth and localizing mammals within these images, allowing researchers to analyze their position relative to their habitat. By integrating AI into our workflow, we’re reducing the need for manual processing and improving detection across large datasets. These advancements enable more precise population density analysis and provide deeper insights into wildlife distribution.

                      Beyond image recognition, we focus on designing robust data processing workflows that address the unique challenges of large-scale ecological datasets. Automating these processes not only saves time but also ensures more consistent and reliable wildlife monitoring, ultimately supporting conservation efforts through data-driven insights.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 3. Dynamic Card for Machine Learning Engineer on Left */}
              <motion.div
                className="flex w-full items-center justify-start relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* Experience Card */}
                <div className="experience-card group left-[50%] top-[50%] transform -translate-x-[-18%] -translate-y-[10%] bg-white text-black rounded-lg shadow-lg p-5 w-[350px] h-[140px] flex flex-col justify-center transition-all duration-500 ease-in-out hover:h-[500px]">
                  <h2 className="text-xl font-bold">Machine Learning Engineer - Dept. of NC State University</h2>
                  <p className="text-gray-600 text-sm">Feb 2024 - August 2024</p>
                  <div className="details opacity-0 max-h-0 overflow-y-auto transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[400px] mt-4">
                    <p className="text-gray-500 text-sm">
                      Previously, I worked as a Machine Learning Engineer in the Mechanical and Aerospace Engineering Department at NC State University, where I focused on developing machine learning models for predicting thermal conductivity profiles. I utilized MATLAB’s API Engine with Python to generate over 30,000 data points, significantly streamlining the data simulation process. By implementing machine learning models using Regression algorithms and ensemble learning, I improved predictive accuracy while optimizing computational efficiency. These improvements helped reduce processing time and made thermal modeling more scalable and precise.
                      Beyond model development, I worked on refining data processing workflows to ensure seamless integration with existing research tools, enabling a more automated and efficient approach to material behavior analysis.
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
                <div className="experience-card group left-[50%] top-[50%] transform -translate-x-[18%] -translate-y-[30%] bg-white text-black rounded-lg shadow-lg p-5 w-[350px] h-[140px] flex flex-col justify-center transition-all duration-500 ease-in-out hover:h-[500px]">
                  <h2 className="text-xl font-bold">Software Engineering Intern - CaringHumans</h2>
                  <p className="text-gray-600 text-sm">Jan 2023 - May 2023</p>
                  <div className="details opacity-0 max-h-0 overflow-y-auto transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[400px] mt-4">
                    <p className="text-gray-500 text-sm">
                      As a Software Engineering Intern at CaringHumans, I worked on developing and optimizing a platform that connects NDIS participants with verified support workers across Australia. My primary focus was enhancing the user experience through frontend development while integrating API-driven functionalities to support dynamic interactions.
                      On the frontend, I worked extensively with HTML5, CSS3, and JavaScript frameworks to implement responsive design principles, ensuring accessibility across mobile, tablet, and desktop devices. I optimized page layouts, improved interactive elements, and enhanced UI consistency to provide a seamless experience for users.
                      In addition, I contributed to RESTful API development, allowing for real-time caregiver profile viewing, booking management, and secure user authentication. By working closely with backend engineers, I helped ensure seamless data flow between the frontend and backend, resulting in a more efficient and scalable platform.
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

      {/* Skills Section
      <motion.section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-start text-black bg-[#2C4678] px-10 md:px-20 pb-20 pt-10 md:pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <h1 className="text-6xl font-extrabold text-white">Skills</h1>

         Skills Grid (3 Columns)
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl w-full">

           Column 1: Data Analytics 
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Data Analytics</h2>
            <ul className="text-gray-700">
              <li><span className="font-semibold">Tools:</span> Tableau, SAS, PySpark</li>
              <li><span className="font-semibold">Libraries:</span> Pandas, NumPy, Beautiful Soup</li>
              <li><span className="font-semibold">Languages:</span> SQL, R</li>
              <li><span className="font-semibold">Collaboration:</span> JIRA, Agile/Scrum</li>
            </ul>
          </div>

           Column 2: Machine Learning 
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Machine Learning</h2>
            <ul className="text-gray-700">
              <li><span className="font-semibold">Frameworks & Libraries:</span> TensorFlow, PyTorch, Scikit-learn, Keras, NLTK, OpenCV, Large Language Models (LLMs)</li>
              <li><span className="font-semibold">Languages:</span> Python, MATLAB</li>
              <li><span className="font-semibold">Tools:</span> Streamlit</li>
            </ul>
          </div>

           Column 3: Software Engineering 
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Software Engineering</h2>
            <ul className="text-gray-700">
              <li><span className="font-semibold">Programming Languages:</span> Python, C/C++, SQL, HTML/CSS</li>
              <li><span className="font-semibold">Frameworks & Libraries:</span> React.js, Node.js, Express.js, Angular.js, Flask, Django, Selenium, Next.js</li>
              <li><span className="font-semibold">DevOps & Cloud:</span> Docker, Kubernetes, AWS, Jenkins</li>
              <li><span className="font-semibold">Version Control & Collaboration:</span> Git, GitHub, JIRA, Jenkins, Agile/Scrum</li>
            </ul>
          </div>

        </div>
      </motion.section> */}


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

      {/* beyond code section */}
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