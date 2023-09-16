import TariffsCard from './ServicesCard';
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
    [
        {
            img:"/img6.png",
            tarif: "Calling the wizard",
            price: "119 000",
        },
        {
            img:"/img5.png",
            tarif: "Calling the wizard",
            price: "15 000",
        },
        {
            img:"/img4.png",
            tarif: "Calling the wizard",
            price: "309 000",

        },
       {
        img:"/img3.png",
            tarif: "Calling the wizard",
            price: "119 000",
        },
        {
            img:"/img2.png",
            tarif: "Calling the wizard",
            price: "15 000",
        },
        {
            img:"/img1.png",
            tarif: "Calling the wizard",
            price: "309 000",

        }
    ],
    [
        {
            img: "/img6.png",
            tarif: "Calling the wizard",
            price: "119 000",
        },
        {
            img: "/img5.png",
            tarif: "Calling the wizard",
            price: "15 000",
        },
        {
            img: "/img4.png",
            tarif: "Calling the wizard",
            price: "309 000",

        },
        {
            img: "/img3.png",
            tarif: "Calling the wizard",
            price: "119 000",
        },
        {
            img: "/img2.png",
            tarif: "Calling the wizard",
            price: "15 000",
        },
        {
            img: "/img1.png",
            tarif: "Calling the wizard",
            price: "309 000",

        }
    ],
    [
        {
            img:"/img6.png",
            tarif: "Calling the wizard",
            price: "119 000",
        },
        {
            img:"/img5.png",
            tarif: "Calling the wizard",
            price: "15 000",
        },
        {
            img:"/img4.png",
            tarif: "Calling the wizard",
            price: "309 000",

        },
       {
        img:"/img3.png",
            tarif: "Calling the wizard",
            price: "119 000",
        },
        {
            img:"/img2.png",
            tarif: "Calling the wizard",
            price: "15 000",
        },
        {
            img:"/img1.png",
            tarif: "Calling the wizard",
            price: "309 000",

        }
    ],
]



const renderCustomPrevButton = () => (
    <button className="custom-prev-button">
        <FaArrowLeft />
    </button>
);

const renderCustomNextButton = () => (
    <button className="custom-next-button ">
        <FaArrowRight />
    </button>
);


export default function Services() {

    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];



    return (
        <section>
            <div className="container mx-auto px-[10px] pb-[50px] element-box">
                <h2 className="text-[#0B132A] text-center  font-[500] md:font-[500] text-[54px]  max-w-[900px] mx-auto">

                    {localization.header.add_service}

                </h2>

           
                        <Swiper className="  flex justify-center items-center " loop={true}
                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button',
                        renderPrevButton: renderCustomPrevButton,
                        renderNextButton: renderCustomNextButton,
                    }}


                            modules={[Navigation, Pagination, A11y]}
                          pagination={{
                clickable: true
            }}
                    slidesPerView={1}>
                    {data.map((item, index) => (<>
                                <SwiperSlide key={index} >
                            <div className=' items-center justify-center md:justify-between lg:justify-center h-auto  flex flex-wrap lg:[&>*:nth-child(2n)]:mx-[70px]'>
                                        {item.map((el, index) => (<>
                                            <TariffsCard localization={localization} key={index} item={el} />
                                        </>))}
                                    </div>
                                </SwiperSlide>
                    </>))}
                        

                        </Swiper>
                <div className="flex justify-between  md:justify-end items-center mt-[60px]">
                    <button className="custom-prev-button mr-[20px]   h-[60px] w-[60px] bg-[#fff] border-[2px] border-[#AB8A4C] rounded-full flex items-center justify-center text-[#AB8A4C]">
                        <FaArrowLeft size={25} />
                    </button>
                    <button className="custom-next-button  h-[60px] w-[60px] bg-[#AB8A4C] border-[2px] border-[#AB8A4C] rounded-full flex items-center justify-center text-[#fff]">
                        <FaArrowRight size={25} />
                    </button>
                </div>
                 
            </div>

        </section>
    )
}
