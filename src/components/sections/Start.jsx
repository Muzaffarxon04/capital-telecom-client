import TariffsCard from './TariffsCard';
import {  useSelector } from 'react-redux';
import Content from "@/Localization/Content";
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
            tarif: "ECONOM+",
            price: "119 000",
            daytime_speed: "200",
            night_speed: "100",
            bonuses: ["Unlimited traffic", "200*Mbps in TAS-IX"]
        },
        {
            tarif: "COMFORT+",
            price: "229 000",
            daytime_speed: "300",
            night_speed: "600",
            bonuses: ["Unlimited traffic", "200*Mbps in TAS-IX"]
        },
        {
            tarif: "PRO+",
            price: "309 000",
            daytime_speed: "400",
            night_speed: "700",
            bonuses: ["Unlimited traffic", "200*Mbps in TAS-IX"]
        }
    ],
    [
        {
            tarif: "ECONOM+",
            price: "119 000",
            daytime_speed: "200",
            night_speed: "100",
            bonuses: ["Unlimited traffic", "200*Mbps in TAS-IX"]
        },
        {
            tarif: "COMFORT+",
            price: "229 000",
            daytime_speed: "300",
            night_speed: "600",
            bonuses: ["Unlimited traffic", "200*Mbps in TAS-IX"]
        },
        {
            tarif: "PRO+",
            price: "309 000",
            daytime_speed: "400",
            night_speed: "700",
            bonuses: ["Unlimited traffic", "200*Mbps in TAS-IX"]
        }
    ],
    [
        {
            tarif: "ECONOM+",
            price: "119 000",
            daytime_speed: "200",
            night_speed: "100",
            bonuses: ["Unlimited traffic", "200*Mbps in TAS-IX"]
        },
        {
            tarif: "COMFORT+",
            price: "229 000",
            daytime_speed: "300",
            night_speed: "600",
            bonuses: ["Unlimited traffic", "200*Mbps in TAS-IX"]
        },
        {
            tarif: "PRO+",
            price: "309 000",
            daytime_speed: "400",
            night_speed: "700",
            bonuses: ["Unlimited traffic", "200*Mbps in TAS-IX"]
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


export default function YourDream() {

    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];



    return (
        <section id="start" className='pt-[100px]'>
        
            <div className="container mx-auto px-[10px] element-box">
                <h2 className="text-[#0B132A] text-center  font-[500] md:font-[500] text-[54px]  max-w-[900px] mx-auto mb-[20px] md:mb-[20px]">

                    {localization.dream.title}

                </h2>

                <p className='text-center text-[#4F5665] max-w-[730px] mx-auto  font-[400] text-[24px]'>
                    {localization.dream.subtitle}
                </p>
           
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
                                <SwiperSlide key={index} className={`bg-[#fff] `} >
                                    <div className='md:px-[70px]'>
                                        {item.map((el, index) => (<>
                                            <TariffsCard localization={localization} key={index} item={el} lang={lang} />
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
