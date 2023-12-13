"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import profile from "../assets/images/cv-profile.jpg";
import me from "../assets/images/me.jpg";

const AboutSection = () => {
  const variant = {
    visible: {
      opacity: 1,
      transition: { duration: 2.1 },
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -120,
    },
  };

  return (
    <div className="w-[65%] mx-auto md:w-full xl:w-[80%] sm:w-full lg:px-5">
      <div className="text-center">
        <h5 className="text-blue-500 text-sm font-semibold">About</h5>
        <h2 className="text-2xl font-bold mt-1 text-gray-800 uppercase">About Me</h2>
      </div>
      <motion.div initial="hidden" whileInView="visible" variants={variant} className="flex items-start sm:flex-col justify-between mt-10 sm:mt-7 gap-x-14 sm:gap-y-5">
        <div className="w-[350px] lg:w-[300px] lg:h-[300px] sm:h-[350px] sm:w-full relative h-[350px] bg-blue-500 sm:bg-transparent flex sm:justify-center rounded-md">
          <Image src={me} className="absolute sm:static sm:w-[330px] sm:h-full w-[330px] h-[360px] object-cover lg:-right-4 sm:top-0 sm:right-0 top-4 rounded-md -right-2" alt="profile cv" />
        </div>
        <div className="flex-1 flex-shrink flex-grow sm:w-full mt-3">
          <h3 className="text-xl font-semibold text-gray-800">
            Hello I'am <span className="text-blue-500">Wendi</span>
          </h3>
          <p className="text-[12px] mt-4 mb-2 text-gray-400">I am a fresh graduate from a vocational high school Kristen Immanuel Pontianak, West Kalimantan. I majored in computer and network engineering (TKJ)</p>
          <p className="text-[12px] text-gray-400">Now I'm actively looking for a job as a remote fullstack web developer. I have internship experience as a web developer for 2 months from November to the end of December 2022.</p>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-7 mt-6 lg:grid-cols-1 sm:grid-cols-1">
            <li className="flex items-center gap-x-2 ">
              <span className="text-[12px] font-medium flex items-center gap-x-2 text-gray-800">
                <i className="ri-calendar-line text-[15px]"></i>Birthday :{" "}
              </span>
              <span className="text-[12px] font-semibold text-blue-500">13 December 2004</span>
            </li>
            <li className="flex items-center gap-x-2">
              <span className="text-[12px] font-medium flex items-center gap-x-2 text-gray-800">
                <i className="ri-code-s-slash-line text-[15px]"></i>Interest :{" "}
              </span>
              <span className="text-[12px] font-semibold text-blue-500">Web Dev & Mobile Dev</span>
            </li>
            <li className="flex items-center gap-x-2">
              <span className="text-[12px] font-medium flex items-center gap-x-2 text-gray-800">
                <i className="ri-macbook-line text-[15px]"></i>Freelance :{" "}
              </span>
              <span className="text-[12px] font-semibold text-blue-500">Available</span>
            </li>
            <li className="flex items-center gap-x-2">
              <span className="text-[12px] font-medium flex items-center gap-x-2 text-gray-800">
                <i className="ri-briefcase-4-line text-[15px]"></i>Work :{" "}
              </span>
              <span className="text-[12px] font-semibold text-blue-500">Open To Work</span>
            </li>
          </ul>
          <Link target="_blank" href="https://drive.google.com/file/d/14St4Mwv6UfHVNc-AqqmrJ1sbziRyeX8s/view?usp=sharing" download="wendi-cv">
            <button className="text-white font-semibold text-[13px] bg-blue-400 py-2 px-4 rounded-md mt-7">Download CV</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
