"use client"
import { useState, useEffect } from "react";


export default function Intro({data}) {


  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);

    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const backgroundStyle = windowSize >= 1050
    ? `url('/black-shape.png'), url('/university.png')`
    : "none";

  return (
    <section className="university-intro">
      <div style={{
        backgroundImage: backgroundStyle,
        backgroundColor: "#2E2E2E",
        backgroundSize: "69% auto, 36% 520px",
        objectFit: "contain",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "left, right",

      }} className="rounded-br-[60px]  rounded-bl-[60px] lg:min-h-[435px] w-fill ">
        <div className="container mx-auto pt-[50px] pb-[20px]  px-[15px] lg:px-0 lg:pt-[100px]">
          <h1 className='text-center lg:text-left text-white font-inter text-[50px] font-[600] lg:w-[60%]'>{data?.country}</h1>
          <p className='text-white font-inter text-[24px] font-[500] border-[#55B25B] mb-[70px] lg:mb-0 border-l-[4px] pl-[13px] lg:pl-[26px] mt-[57px] lg:w-[60%]'>{data?.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-[15px] md:px-0 mt-[100px]">
        {data?.info && data?.info?.map((item, index) => (
          <p key={index} className="text-[#2E2E2E] text-[24px]  font-inter mb-[25px]">{item.text}</p>

        ))}
      


      </div>
    </section>
  )
}
