import Image from "next/image"
import { useState } from "react";
import { Navigation, Pagination, A11y,  } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { data as datas } from "@/universityData";


const data = [
  {
    img: "/china-unver.png",
    title: "Tsinghua University",
    text: "World leader in ecology and engineering",
  },
  {
    img: "/iroq-univer.png",
    title: "Stanford University",
    text: "World leader in ecology and engineering",
  },
  {
    img: "/egyp-univer.png",
    title: "University of Edinburgh",
    text: "World leader in ecology and engineering",
  },
  {
    img: "/egyp-univer.png",
    title: "University of Edinburgh",
    text: "World leader in ecology and engineering",
  },
  {
    img: "/egyp-univer.png",
    title: "University of Edinburgh",
    text: "World leader in ecology and engineering",
  },
  
]
export default function OurStudents() {

  const { lang } = useSelector((state) => state.localiztion);

  const { localization } = Content[lang];
  const unversities = datas[lang][0]?.univsities || []


  return (
    <section className="students pt-[29px] pb-[58px]">
      <div className="container mx-auto px-[40px] md:px-auto ">
        <h2 className="text-[#3D3D3D] font-inter  font-[700] lg:text-[60px] text-[44px] md:text-5xl leading-[1] tracking-[0em] text-center max-w-[700px] mx-auto">
          <span className="text-[#3D3D3D] ">{localization.students.title} </span><span className="text-[#55B25B] ">{localization.students.title2} <span className="text-[#3D3D3D] ">{localization.students.title3}</span>?</span>

          
        </h2>
        <p className="mt-[30px] text-[#000] text-center font-inter font-normal text-[24px] md:text-[32px] leading-[1.1875]">{ localization.students.subtitle}</p>
   
          <Swiper className="mt-[28px] h-[446px] flex justify-center items-center " loop={true}
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1444: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}

            modules={[Navigation, Pagination, A11y]}
          pagination={{ clickable: true }}
            slidesPerView={3}>
          {unversities && unversities.map((item, index) => (
            <SwiperSlide className={`mb-[40px]  relative w-[300px] h-[300px]  bg-[#fff] rounded-[16px] overflow-hidden transition-transform duration-500 filter   border-solid border-[0.5px] border-[#55B25B4D] hover:h-[367px] card  `} key={index}>
                <CardItem key={index} data={item} />
          </SwiperSlide>
              ))}
          
        </Swiper>
      
      </div>
    </section>
  )
}


function CardItem({ data }) {
  return (

 <
    

    >
      <div className={`image-box overflow-hidden w-full rounded-[15px] h-[300px]`}>
        <Image
          src={data.img} // Replace with your image path
          alt="Image"
          width={300}
          height={300}
          className={`image object-cover  w-full h-full`}
        />
</div>
      <div className="hidden card-text mt-[20px] text-[#000]">
          <div className="text-white text-center mt-[15px]">
            <h3 className="text-[#55B25B] font-inter font-semibold text-[20px] leading-[38px]">{data.title }</h3>
            <p className="text-[#000] mt-[5px] font-inter font-normal text-[18px] leading-[28px]">{data.flag}</p>
          </div>
        </div>
      <h3 className="absolute card-title bottom-0 left-0 right-0 pb-[26px] px-[5px] text-[#FFF] text-center font-inter font-extrabold text-[24px] leading-[38px]">
          {data.title}
        </h3>
    </>
 
 
   
  // </div >
  )
}