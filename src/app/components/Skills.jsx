'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const [skills] = useState([
    { imgUrl: "/skills/cpp.png", name: "C++" },
    { imgUrl: "/skills/python.png", name: "Python" },
    { imgUrl: "/skills/mysql.png", name: "SQL" },
    { imgUrl: "/skills/firebase.png", name: "Firebase" },
    { imgUrl: "/skills/openai.png", name: "openAI" },
    { imgUrl: "/skills/html.png", name: "HTML" },
    { imgUrl: "/skills/css.png", name: "CSS" },
    { imgUrl: "/skills/javascript.png", name: "JavaScript" },
    { imgUrl: "/skills/Reactjs.png", name: "React.js" },
    { imgUrl: "/skills/nodejs.png", name: "Node.js" },
    { imgUrl: "/skills/express.jpg", name: "Express.js" },
    { imgUrl: "/skills/mongo.png", name: "MongoDB" },
    { imgUrl: "/skills/git.png", name: "Git" },
    { imgUrl: "/skills/tailwind.png", name: "Tailwind CSS" },
    { imgUrl: "/skills/nextjs.png", name: "Next.js" },
  ]);

  return (
    <section 
    id="skill"
    className="hacker-skills mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-4xl font-bold mb-10 text-center">
          My Skillset
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card relative flex flex-col items-center justify-center p-6 rounded-lg bg-terminal hover:bg-terminal-active hover:scale-105 transition-all duration-1500"
              whileHover={{ rotate: 7 }}
            >
              <div className="rounded-full bg-transparent p-2 mb-4">
                <Image
                  src={skill.imgUrl}
                  alt={`${skill.name} logo`}
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <h3 className="text-sm font-medium text-[#ADB7BE]">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hacker-skills {
          min-height: 100vh;
          background-color: #181818;
          background-image: radial-gradient(circle, rgba(0, 255, 0, 0.1) 0%, transparent 70%);
          font-family: "Arial", sans-serif;
          padding: 2rem 0;
        }

        .terminal {
          background-color: #000;
          color: #0f0;
          border: 1px solid #0f0;
          border-radius: 5px;
          padding: 1rem;
        }

        .terminal-active {
          background-color: #111;
        }
      `}</style>
    </section>
  );
};

export default Skills;
