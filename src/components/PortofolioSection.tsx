"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { useState,useMemo, useEffect } from "react";
import { IPortofolioResponse } from "@/interfaces/portofolioResponse.interface";
import { urlForImage } from "../../sanity/lib/image";
import { motion } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";
import sanityClient from "@/services/sanityClient";
import Slider from "react-slick";
import Link from "next/link";
import particleOptions from "@/constants/particlejs";

const PortofolioSection = () => {
  const [init,setInit] = useState<boolean>(false);
  const options:any = useMemo(()=> particleOptions, []);

  const variant = {
    visible: {
      opacity: 1,
      transition: { duration: 2.1 },
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 110,
    },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded:any = (container:any) => {
    console.log(container);
  };


  const [loading, setLoading] = useState<boolean>(true);
  const [portofolioItems, setPortofolioItems] = useState<IPortofolioResponse[]>([]);

  const fetchPortofolios = async () => {
    setLoading(true);
    try {
      const portofolios = await sanityClient.fetch(`*[_type == "portofolio"]`);

      if (portofolios) {
        setPortofolioItems(portofolios);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      return err;
    }
  };

  useEffect(() => {
    fetchPortofolios();
  }, []);


  if(!init) return null;


  return (
     <div className="w-full relative">
          <Particles
              className="absolute top-0 left-0 w-full h-full"
              particlesLoaded={particlesLoaded}
              options={options}
            />
          <div className="w-[80%] xl:w-full md:w-full py-20 xl:px-10 sm:px-5 mx-auto">
          {/* <div className="text-center">
            <h5 className="text-blue-500 z-[999] text-sm font-semibold">Portofolio</h5>
            <h2 className="text-2xl font-bold mt-1 z-[999] text-gray-800 uppercase">My Project</h2>
          </div> */}

          {loading && portofolioItems.length == 0 ? (
            <LoadingSpinner />
          ) : (
            <motion.div initial="hidden" whileInView="visible" variants={variant} className={`grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-4`}>
              {portofolioItems.map((item: IPortofolioResponse, idx: number) => (
                <div className="w-full z-[99] bg-white rounded-md shadow-lg shadow-gray-200 overflow-hidden" key={idx}>
                  <img src={urlForImage(item.thumbnail).width(700).height(500).url()} alt={item.title} className="w-full h-[300px] object-cover" />
                  <div className="py-4 px-4 bg-white">
                    <div className="flex justify-between items-center text-gray-800">
                      <h2 className="text-xl xs:text-[16px] sm:text-lg font-bold">{item?.title}</h2>
                      <Link href={item.repository} target="_blank">
                        <i className="ri-github-fill text-[18px]"></i>
                      </Link>
                      {/* ri-github-fill */}
                    </div>
                    <p className="text-[12px] text-gray-400 mt-2 xs:mt-1 mb-4">{item.excerpt}.</p>
                    <Slider className="mb-4" {...settings}>
                      {item.technology.map((item, idx) => (
                        <div className="w-full px-1">
                          <span key={idx} className="flex justify-center text-[11px] text-center bg-gray-100 text-gray-800 py-1 px-2 rounded-full font-semibold">
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </Slider>
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
          {/* <div className="w-full text-center mt-10">
            <Link href="/projects">
              <button className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-full">
                See More
              </button>
            </Link>
          </div> */}

        </div>
     </div>
  );
};

export default PortofolioSection;
