"use client"
import { useState, useEffect } from "react";
import navbarlink from "@/constants/navbarlink";
import Link from "next/link";

const Navbar = () => {
    const [currentPath,setCurrentPath] = useState<string>("#home");
    const [openSidebar,setOpenSidebar] = useState<boolean>(false);
    const [activeNavbar,setActiveNavbar] = useState<boolean>(false);

    useEffect(() => {
    if(typeof window !== 'undefined') {
        if(window.scrollY > 100) {
             setActiveNavbar(true);
        }

        window.addEventListener('scroll' , function() {
            if(this.scrollY > 100) {
               return setActiveNavbar(true);
            }

            setActiveNavbar(false);
        });
    }

    }, [])

    return (
        <nav id="nav" className={`w-full fixed py-5 top-0 left-0 z-[999] ${activeNavbar ? "bg-white  shadow shadow-gray-300" : ""}`}>
            <div className="w-[80%] md:w-full sm:px-5 md:px-10 sm:w-full mx-auto flex items-center justify-between">
                <Link href="/">
                    <span className={`font-bold text-md ${activeNavbar ? "text-gray-800" : "text-white"}`}>Wendi.</span>
                </Link>
                <ul className={`flex ${activeNavbar ? "text-gray-800" : "text-white sm:text-gray-800"} sm:bg-white sm:h-screen sm:py-5 sm:px-5 sm:gap-y-3 sm:w-[60%] sm:transition-all sm:duration-700 sm:items-start items-center sm:flex-col gap-x-7 sm:fixed  sm:top-0 ${openSidebar ? "sm:left-0" : "sm:-left-[100%]"}`}>
                    {navbarlink.map((item,idx) => (
                        <Link href={item.path} key={idx}>
                            <span onClick={() => setCurrentPath(item.path)} className={`text-[13px] sm:text-sm font-medium ${currentPath === item.path ? "text-blue-500" : ""} transition-colors duration-100 hover:text-blue-500`}>{item.title}</span>
                        </Link>
                    ))}
                </ul>
                <button onClick={() => setOpenSidebar(!openSidebar)} className={`sm:block hidden text-md font-bold cursor-pointer ${activeNavbar ? "text-gray-800" : "text-white"}`}>
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;