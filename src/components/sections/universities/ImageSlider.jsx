import Image from "next/image"
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
    {
        img: "/china-unver.png",
       
    },
    {
        img: "/iroq-univer.png",
       
    },
    {
        img: "/egyp-univer.png",
       
    },
    {
        img: "/egyp-univer.png",
 
    },
    {
        img: "/egyp-univer.png",
     
    },

]

const renderCustomPrevButton = () => (
    <button className="custom-prev-button">
        <FaArrowLeft />
    </button>
);

const renderCustomNextButton = () => (
    <button className="custom-next-button">
        <FaArrowRight />
    </button>
);

export default function OurClients() {
    return (
        <section className="w-full mb-[50px] h-[350px] mt-[100px]">
            <div className="container mx-auto  md:px-auto ">
                <Swiper
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
                            spaceBetween: 30,
                        },
                    }}
                    loop={true}
                    className="flex  justify-center w-full h-[250px]  mb-[50px]"
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button',
                        renderPrevButton: renderCustomPrevButton,
                        renderNextButton: renderCustomNextButton,
                    }}

                >


                    {data && data.map((item, index) => (
                        <SwiperSlide className="overflow-hidden rounded-[15px] w-full md:w-[400px] h-full" key={index} >
                       
                                <Image src={item.img} alt="user" className="object-fill w-full h-full" width={400} height={250} />
                 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center items-center">
                    <button className="custom-prev-button mr-4">
                        <FaArrowLeft color="#55B25B" size={18} />
                    </button>
                    <button className="custom-next-button">
                        <FaArrowRight color="#55B25B" size={18} />
                    </button>
                </div>
            </div>



        </section>
    )
}


