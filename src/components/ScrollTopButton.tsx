"use client"
import { useState,useEffect } from "react";
import Link from "next/link";

const ScrollTopButton = () => {
    const [showButton,setShowButton] = useState<boolean>(false);   
    
    useEffect(() => {
        if(typeof window !== 'undefined') {
            if(window.scrollY > 150) setShowButton(true);

            window.addEventListener('scroll' , function() {
                if(this.scrollY > 150) {
                   return setShowButton(true);
                }

                setShowButton(false);
            })
        }
    },[]);

    return (
       <Link href="#home" id="scroll-top-button" className={`fixed right-10 bottom-8  ${showButton ? "block" : "hidden"}`}>
         <button className={`text-lg bg-blue-500 text-white font-semibold py-2 px-3 rounded-md `}>
            <i className="ri-arrow-up-line"></i>
         </button>
       </Link>
    )
}

export default ScrollTopButton;