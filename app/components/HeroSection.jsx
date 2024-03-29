/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import hero from "../../public/images/hero-image.png";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/Santi_Singha_Resume.pdf";
    // Trigger download
    window.open(cvUrl, "_blank");
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center sm:text-left">
          <h1 className="text-white sm:text-5xl text-4xl lg:text-6xl font-extrabold">
            <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Santi Singha", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 mt-2">
            Hey there, I'm Santi, and I'm all about bringing ideas to life on
            the web! As a full-stack developer, I love diving into both the
            front and back ends of websites.
          </p>
          <div className="">
            <button className="px-6 py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-1 py-1 sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src={hero}
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
