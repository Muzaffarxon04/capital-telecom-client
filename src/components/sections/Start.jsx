import { FaArrowRight } from 'react-icons/fa';
import { changeLanguage } from '@/slices/localizationReducer';
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";

const StartSection = () => {
    const dispatch = useDispatch();

    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];


    return (
        <section className="text-white pt-[45px] pb-[110px]  md:py-100">
            <div className="container mx-auto flex-wrap    flex lg:justify-between justify-center xl:px-[60px] items-center md:px-0 px-[15px] ">
                <div className=" lg:w-[425px] mb-[68px] ml:m-0 md:mr-130">
                    <h1 className="text-[38px] md:text-[50px]  lg:text-[50px] font-[600] md:font-bold mb-4 ">{localization.start.title}</h1>
                    <p className="font-inter text-[20px] md:text-xl md:font-semibold leading-7 text-left pt-[40px] pb-[20px]">{localization.start.text1}</p>
                    <p className="font-inter text-[20px] md:text-xl md:font-semibold leading-7 text-left">{localization.start.text2}</p>
                </div>
                <ul className=" lg:max-w-[450px]  w-full h-auto">
                    <CardItems title={localization.start.text3} icon={<>     <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[30px] text-current transition-colors group-hover:text-green-500">
                        <path d="M17.9 1.59514C16.6688 1.20846 15.3588 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27C21.1797 27 27 21.1797 27 14C27 11.7701 26.4385 9.67128 25.4493 7.83728M20.5 5.875H20.5065M12.0501 26.8547L12.0502 23.9904C12.0502 23.8353 12.1057 23.6852 12.2067 23.5674L15.4382 19.7972C15.7038 19.4874 15.6215 19.0123 15.2672 18.8099L11.5541 16.6881C11.4532 16.6304 11.3696 16.5468 11.312 16.4459L8.8916 12.2042C8.76563 11.9835 8.52255 11.8564 8.26938 11.8789L1.08344 12.519M25.7 6.2C25.7 9.07188 23.1 11.4 20.5 14C17.9 11.4 15.3 9.07188 15.3 6.2C15.3 3.32812 17.6281 1 20.5 1C23.3719 1 25.7 3.32812 25.7 6.2ZM20.825 5.875C20.825 6.05449 20.6795 6.2 20.5 6.2C20.3205 6.2 20.175 6.05449 20.175 5.875C20.175 5.69551 20.3205 5.55 20.5 5.55C20.6795 5.55 20.825 5.69551 20.825 5.875Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></>} />
                    <CardItems title={localization.start.text4} icon={<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[30px] text-current transition-colors group-hover:text-green-500">
                        <path d="M1 27H27M5.33333 22.8753V11.876M11.1111 22.8753V11.876M16.8889 22.8753V11.876M22.6667 22.8753V11.876M25.5556 7.75131L14.6124 1.24113C14.3903 1.10895 14.2792 1.04286 14.16 1.01709C14.0547 0.994304 13.9453 0.994304 13.84 1.01709C13.7208 1.04286 13.6097 1.10895 13.3876 1.24112L2.44444 7.75131H25.5556Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
} />
                    <CardItems title={localization.start.text5} icon={<svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[30px] text-current transition-colors group-hover:text-green-500">
                        <path d="M20.5 15.5115V11.5251C20.5 11.287 20.5 11.168 20.4645 11.0629C20.4331 10.97 20.3818 10.8853 20.3144 10.8151C20.2381 10.7357 20.1338 10.6825 19.9251 10.576L14 7.55342M3.6 8.87976V17.9077C3.6 18.4009 3.6 18.6476 3.67542 18.8635C3.7421 19.0544 3.85077 19.2272 3.99309 19.3686C4.15408 19.5285 4.37385 19.6313 4.81336 19.8368L13.1334 23.7274C13.4522 23.8765 13.6116 23.951 13.7776 23.9805C13.9248 24.0065 14.0752 24.0065 14.2224 23.9805C14.3884 23.951 14.5478 23.8765 14.8666 23.7274L23.1866 19.8368C23.6261 19.6313 23.8459 19.5285 24.0069 19.3686C24.1492 19.2272 24.2579 19.0544 24.3246 18.8635C24.4 18.6476 24.4 18.4009 24.4 17.9077V8.87976M1 7.55342L13.5349 1.15899C13.7054 1.07199 13.7907 1.02849 13.8801 1.01137C13.9594 0.996209 14.0406 0.996209 14.1199 1.01137C14.2093 1.02849 14.2946 1.07199 14.4651 1.15899L27 7.55342L14.4651 13.9479C14.2946 14.0349 14.2093 14.0784 14.1199 14.0955C14.0406 14.1106 13.9594 14.1106 13.8801 14.0955C13.7907 14.0784 13.7054 14.0349 13.5349 13.9479L1 7.55342Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
 } />
                    <CardItems title={localization.start.text6} icon={<svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[30px] text-current transition-colors group-hover:text-green-500">
                        <path d="M6.77778 7.85277H14M6.77778 12.2136H18.3333M10.6543 19.6894H20.0667C22.4936 19.6894 23.707 19.6894 24.634 19.282C25.4493 18.9236 26.1122 18.3518 26.5277 17.6485C27 16.8489 27 15.8022 27 13.7088V6.9806C27 4.88719 27 3.84049 26.5277 3.04092C26.1122 2.33759 25.4493 1.76577 24.634 1.4074C23.707 1 22.4936 1 20.0667 1H7.93333C5.50644 1 4.29299 1 3.36604 1.4074C2.55067 1.76577 1.88776 2.33759 1.47231 3.04092C1 3.84049 1 4.88719 1 6.9806V22.5993C1 23.2632 1 23.5952 1.15777 23.7657C1.29499 23.9139 1.50306 24.0002 1.723 24C1.97591 23.9998 2.27641 23.7924 2.87743 23.3777L6.32309 20.9999C7.02697 20.5142 7.37891 20.2713 7.77081 20.0986C8.11851 19.9454 8.48862 19.8334 8.87109 19.7657C9.30219 19.6894 9.75289 19.6894 10.6543 19.6894Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
} />
                </ul>
            </div>

        </section>
    );
};

export default StartSection;


function CardItems(params) {
    return (
        <li className="mb-[15px] w-full py-[20px] px-[31px] flex-shrink-0 rounded-lg bg-green-20066 transition duration-300 hover:bg-[#FFFFFF] hover:bg-opacity-[75%] border border-green-200 bg-opacity-40 backdrop-blur-[12.5px] font-inter text-white hover:text-green-500 font-bold text-xl leading-7 relative group flex items-center">
            {params.icon}
            {params.title}
            {/* <span className="absolute top-1/2 right-[20px] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ">
                <FaArrowRight className="h-5 w-5 inline-block" />
            </span> */}
        </li>
    )
}