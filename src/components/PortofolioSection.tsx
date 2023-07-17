"use client"
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { IPortofolioResponse } from "@/interfaces/portofolioResponse.interface";
import { urlForImage } from "../../sanity/lib/image";
import sanityClient from "@/services/sanityClient";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

const PortofolioSection = () => {
  const variant = {
      visible: {  
        opacity:1,
        transition:{ duration:2.1 },
        y:0
      },
      hidden: {
         opacity:0,
         y:110
      }
  }
 
  const [loading,setLoading] = useState<boolean>(true);
  const [portofolioItems,setPortofolioItems] = useState<IPortofolioResponse[]>([]);
   
  const fetchPortofolios = async () => {
     setLoading(true);
     try {
       const portofolios = await sanityClient.fetch(`*[_type == "portofolio"]`);

       if(portofolios) {
          setPortofolioItems(portofolios);
          setLoading(false);
       }

     } catch(err) {
        setLoading(false);
        return err;
     }
  }

  useEffect(()=>{
    fetchPortofolios();
  },[])

  return (
    <div className='w-[80%] md:w-full md:px-10 sm:px-5 mx-auto'>
         <div className="text-center">
              <h5 className="text-blue-500 text-sm font-semibold">Portofolio</h5>
              <h2 className="text-2xl font-bold mt-1 text-gray-800 uppercase">My Project</h2>
          </div>

          {loading && portofolioItems.length == 0 ? (
             <LoadingSpinner/>
          ) : (
            <motion.div initial="hidden" whileInView="visible" variants={variant} className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            {portofolioItems.map((item : IPortofolioResponse, idx : number) => (
              <div className="w-full bg-white rounded-md shadow-lg shadow-gray-200 overflow-hidden" key={idx}>
                 <img src={urlForImage(item.thumbnail).width(700).height(500).url()} alt={item.title} className="w-full h-[300px]" />
                 <div className="py-4 px-4 bg-white">
                  <div className="flex justify-between items-center text-gray-800">
                    <h2 className="text-xl font-bold">{item?.title}</h2>
                    <Link href={item.repository} target="_blank"><i className="ri-github-fill text-[18px]"></i></Link>
                  {/* ri-github-fill */}
                  </div>
                  <p className="text-[12px] text-gray-400 mt-1 mb-4">{item.excerpt}.</p>
                  <div className="grid grid-cols-4 sm:grid-cols-3 gap-2 mb-4">
                    {item.technology.map((item, idx) => (
                       <span key={idx} className="text-[11px] text-center bg-gray-100 text-gray-800 py-1 px-2 rounded-full font-semibold">{item.title}</span>
                    ))}
                  </div>
                  {item.website && (
                     <Link href={`${item.website}`} target="_blank">
                      <span className="flex items-center text-[12px] ml-1 font-semibold gap-x-2 text-blue-500">
                        See Website
                       <i className="ri-arrow-right-line"></i>
                      </span>
                   </Link>
                  )}
                 </div>
              </div>
            ))}
          </motion.div>
          )}
    </div>
  )
}

export default PortofolioSection