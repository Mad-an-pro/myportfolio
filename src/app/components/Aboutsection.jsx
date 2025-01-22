"use client";
import React, { useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("graduation");

  const handleTabChange = (id) => setTab(id);

  return (
    <section
    id="about"
     className="text-white py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center sm:py-12 sm:px-8 lg:px-12">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/image/about.png"
            alt="About Me"
            height={500}
            width={500}
            className="rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-sm lg:text-base leading-relaxed text-center md:text-left">
            I am a dedicated problem-solver with a deep interest in software
            development, specializing in data structures and algorithms. I aim
            to channel my passion for coding into building robust, scalable, and
            impactful solutions while contributing to innovative projects and
            collaborating with like-minded professionals.
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center md:justify-start mt-6 space-x-3">
            <button
              onClick={() => handleTabChange("graduation")}
              className={`py-2 px-4 text-sm font-medium relative ${
                tab === "graduation"
                  ? "text-green-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-green-400 after:to-green-600"
                  : "text-white hover:text-green-400 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-green-400 hover:to-green-600"
              }`}
            >
              Graduation
            </button>
            <button
              onClick={() => handleTabChange("10th")}
              className={`py-2 px-4 text-sm font-medium relative ${
                tab === "10th"
                  ? "text-green-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-green-400 after:to-green-600"
                  : "text-white hover:text-green-400 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-green-400 hover:to-green-600"
              }`}
            >
              10th
            </button>
            <button
              onClick={() => handleTabChange("12th")}
              className={`py-2 px-4 text-sm font-medium relative ${
                tab === "12th"
                  ? "text-green-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-green-400 after:to-green-600"
                  : "text-white hover:text-green-400 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-green-400 hover:to-green-600"
              }`}
            >
              12th
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4 text-center md:text-left">
            {tab === "graduation" && (
              <p>SGGSIE&T, Nanded (computer science & engineering).</p>
            )}
            {tab === "10th" && <p>Prabodhan Vidyalaya, Daryapur.</p>}
            {tab === "12th" && <p>Mauli Jr College, Akola.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
