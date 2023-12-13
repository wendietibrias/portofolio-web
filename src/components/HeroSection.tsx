"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import socialicon from "@/constants/socialicon";

const HeroSection = () => {
  const variant = {
    visible: {
      opacity: 1,
      transition: { duration: 2.1 },
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -120,
    },
  };

  return (
    <motion.div initial="hidden" whileInView="visible" variants={variant} className="text-center sm:px-5 text-white w-full h-full relative flex flex-col justify-center items-center">
      <h4 className="text-2xl sm:text-2xl font-normal">Welcome,</h4>
      <h2 className="text-5xl sm:text-2xl font-medium mt-2 mb-5 xs:mb-3">
        I'am A <span className="text-blue-500 font-semibold">Fullstack Developer</span>
      </h2>
      <p className="text-[13px] sm:text-[12px] sm:mt-1 text-gray-300 mx-auto text-center w-[400px] sm:px-8  sm:w-full">I am someone who has an interest in developing a website using modern javascript frameworks.</p>
      <Link target="_blank" href="https://drive.google.com/file/d/14St4Mwv6UfHVNc-AqqmrJ1sbziRyeX8s/view?usp=sharing" download="wendi-cv" className="mt-9 xs:mt-10">
        <button className="text-white font-semibold text-sm bg-blue-500  transition-colors duration-200 rounded-full py-2 px-6 border-2 border-blue-500  hover:text-blue-500 hover:bg-transparent">Download CV</button>
      </Link>
      <ul className="absolute lg:hidden left-10 top-[50%] transition-all  translate-y-[-50%] flex flex-col gap-y-5">
        {socialicon.map((item, idx) => (
          <Link key={idx} href={item.path} className="hover:text-blue-500">
            <i className={`${item.icon} text-2xl`}></i>
          </Link>
        ))}
      </ul>
    </motion.div>
  );
};

export default HeroSection;
