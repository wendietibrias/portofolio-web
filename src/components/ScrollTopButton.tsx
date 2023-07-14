"use client"
import { useState,useEffect } from "react";
import Link from "next/link";

const ScrollTopButton = () => {
    const [showButton,setShowButton] = useState<boolean>(false);   

    const handleScrollTop = () => {
        if(typeof window !== 'undefined') {
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        }
    }
    
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
       <div id="scroll-top-button" className={`fixed right-10 bottom-8  ${showButton ? "block" : "hidden"}`}>
         <button onClick={handleScrollTop} className={`text-lg bg-blue-500 text-white font-semibold py-2 px-3 rounded-md `}>
            <i className="ri-arrow-up-line"></i>
         </button>
       </div>
    )
}

export default ScrollTopButton;