"use client"
import { useEffect,useState } from 'react';
import { ISkillsResponse } from '@/interfaces/skillsResponse.interface';
import { urlForImage } from '../../sanity/lib/image';
import { motion, useAnimation } from "framer-motion";
import sanityClient from '@/services/sanityClient';
import Image from 'next/image';


const SkillsSection = () => {
  const variant = {
      visible: {
        opacity:1,
        transition:{ duration:2.1 },
        x:0
      },
      hidden:{
        opacity:0,
        x:120
      }
    }

  const [skills,setSkills] = useState<ISkillsResponse[]>([]);

  const fetchSkills = async () => {
     const allSkills = await sanityClient.fetch(`*[_type == "skills"]`);
     setSkills(allSkills);
  }

  useEffect(()=>{
     fetchSkills();
  },[])

  return (
    <div  className="w-[60%] xl:w-[80%] mx-auto md:w-full md:px-10 sm:px-5">
         <div className="text-center">
                <h5 className="text-blue-500 text-sm font-semibold">Skills</h5>
                <h2 className="text-2xl font-bold mt-1 text-gray-800 uppercase">My Skills</h2>
            </div>
        <motion.div initial="hidden" whileInView="visible" variants={variant} className='w-full mt-10 grid grid-cols-3 place-content-center sm:grid-cols-1 gap-3'>
          {skills.length > 0 && skills.map((item : ISkillsResponse,idx : number) => (
            <div className='w-full bg-gray-100 flex flex-col align-self-center items-center rounded-md py-4 ' key={idx}>
              <Image src={urlForImage(item.icon).url()} width={45} height={45} alt={item.title}></Image>
              <span className='text-gray-800 font-bold text-[15px] mt-2'>{item.title}</span>
              <p className="text-[12px] text-gray-500">{item.excerpt}</p>
            </div>
          ))}
        </motion.div>
    </div>
  ) 
}

export default SkillsSection