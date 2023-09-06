import {  useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import Link from 'next/link';

const IntroSection = () => {
    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang] || []

    return (
        <section className="text-white pt-[110px] px-[15px] md:px-0 pb-[62px] md:pt-[200px] md:py-200">
            <div className="container mx-auto text-center">
                <h1 className="text-[38px] shadow-text md:text-4xl lg:text-5xl font-bold md:mb-4 tracking-tight">
                    {localization?.intro?.title}
                </h1>
                <p className="font-inter text-[28px] md:text-3xl font-medium leading-10 text-center bg-gradient-to-r from-yellow-200 to-yellow-200 bg-clip-text text-white-900 pt-[20px] md:p-3">     {localization?.intro?.bunda} <span className="text-[#ffffff]">C</span><span className='text-[#55B25B]'>O<span className="text-[#ffffff]">MPERA </span> </span>
               { localization?.intro?.subtitle}</p>
                <div className="flex justify-center items-center md:flex-row flex-col mt-[50px] md:mt-75 
               space-y-[24px] md:space-y-0  md:space-x-50">
                    <Link
                        href="/#yourdream"
                        className="w-[222px] flex justify-center items-center md:w-[222px] bg-green-500  rounded-[15px] h-[65px] px-[19px] py-2 text-semibold text-white"
                    >
                        {localization?.intro?.btn}
                    </Link>  <Link
                        href="/#aboutus" className="w-[222px]  flex items-center justify-center md:w-[222px] border-[1px]  h-[65px] border-white rounded-[15px] px-9 py-2 text-white"
                    >
                        {localization?.header?.aboutus}
                    </Link>
     </div>
            </div>
      
        </section>
    );
};

export default IntroSection;
