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
    ? `url('/black-shape.png'), url(${data ? data.img : '/university.png'})`
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

      }} className="rounded-br-[60px]  rounded-bl-[60px] lg:h-[435px] w-fill ">
        <div className="container mx-auto pt-[50px]  px-[15px] lg:px-0 lg:pt-[100px]">
          <h1 className='text-white font-inter text-[16px] font-[600] w-[60%]'>{data.country}</h1>
          <h2 className='text-white font-inter text-[50px] font-[600] w-[60%]'>{data.title}</h2>
          <p className='text-white font-inter text-[24px] font-[500] border-[#55B25B] mb-[70px] lg:mb-0 border-l-[4px] pl-[13px] lg:pl-[26px] mt-[57px] lg:w-[60%]'>{data.flag}</p>
          
        </div>
      </div>
 

      <div className="container mx-auto mt-[100px]">
        <h2 className='text-[#2E2E2E] font-[700] text-[34px] mb-[50px]'>The <span className="text-[#55B25B]">History</span>  of Harvard University</h2>
        <p className="text-[#2E2E2E] text-[24px]  font-inter">Harvard has the status of the oldest university in the United States. It was founded in 1636. The educational institution was named after the pastor and philanthropist John Harvard, who bequeathed his library and part of the property to the university. Interestingly, back in 1643, a fund was created at Harvard to support research and development — one of the first in the world. Whereas in the 17th century theological sciences were mainly taught here, but by the middle of the 18th century the teaching vector shifted towards secular sciences.
       
        </p>
        <p className="text-[#2E2E2E] text-[24px]  font-inter">
          In the 19th century, the school adapted its signature crimson color, when Harvard representatives put on dark red shawls on the regatta so that they could be better seen. Since then, the crimson color has been a symbol of Harvard. At the beginning of the XX century, the college changed its status to university.
        </p>
      
     
      </div>
      </section>
  )
}
