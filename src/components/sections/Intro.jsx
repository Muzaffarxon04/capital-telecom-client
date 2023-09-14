import {  useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import Link from 'next/link';
import ReviewCard from './ReviewCard';
const IntroSection = () => {
    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang] || []

    return (
        <section className=" text-white pt-[170px] px-[15px] md:px-0 pb-[100px]">
            <div className="container bg-intro mx-auto ">
                <div className='max-w-[606px]'>
                    <h1 className="text-[38px] text-[#0B132A] md:text-[50px] lg:text-[50px] font-[500] ">
                        {localization?.intro?.title} <b className='font-[700]'> Capital Telecom.</b>
                    </h1>
                    <p className=" text-[16px]  pt-[20px] text-[#4F5665]">     
                        {localization?.intro?.bunda}
                        <b className='font-[500]'>Capital Telecom</b>
                        {localization?.intro?.subtitle}</p>
            </div>
                <div className="flex justify-start items-center md:flex-row flex-col mt-[50px] 
                md:space-x-[50px]">
                    <Link
                        href="/#yourdream"
                        className="w-[250px] flex justify-center items-center md:w-[250px] bg-[#AB8A4C]  rounded-[15px]  font-[700]  h-[60px] px-[19px] py-2 text-semibold text-white"
                    >
                        {localization.header.for_home}
                    </Link>  <Link
                        href="/#aboutus" className="w-[250px] font-[700]  flex items-center justify-center md:w-[250px] border-[1px]  h-[60px] border-[#AB8A4C] rounded-[15px] px-9 py-2 text-[#AB8A4C]"
                    >
                        {localization.header.for_business}
                    </Link>
     </div>
            <ReviewCard/>
            </div>
        </section>
    );
};

export default IntroSection;
