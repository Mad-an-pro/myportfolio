'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Herosection = () => {
  return (
    <section className="bg-[#121212] text-white min-screen flex items-center mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-12 w-full max-w-6xl mx-auto px-4">
        {/* Text Section */}
        <div className="col-span-7 place-self-center text-center sm:text-left mb-8 sm:mb-0"> {/* Added margin for mobile view */}
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-[#00FF41] via-[#03A63C] to-[#00FF41] bg-clip-text text-transparent">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'AI Enthusiast',
                1000,
                'Madan',
                1000,
                'Software developer',
                1000,
                'Web developer',
                1000,
                'Competitive coder',
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            Enthusiastic about creating creative projects, coding competitively, and developing software solutions.
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <button className="px-6 py-3 sm:w-fit rounded-full bg-gradient-to-r from-[#00FF41] to-[#03A63C] hover:to-[#01C936] text-white font-bold transition-transform transform hover:scale-110">
              Hire me
            </button>
            <button className="text-white sm:w-fit px-6 py-3 rounded-full bg-transparent hover:bg-[#1B1B1B] border border-[#00FF41] font-bold transition-transform transform hover:scale-110">
              Get CV
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-5 place-self-center mt-8 sm:mt-0 relative"> {/* Added top margin for mobile view */}
          <div
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative shadow-[0_0_30px_10px_#00FF41] 
            animate-pulse"
          >
            <Image
              src="/image/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
