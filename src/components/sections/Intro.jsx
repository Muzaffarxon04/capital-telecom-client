import {  useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import Link from 'next/link';
import Image from 'next/image';

const IntroSection = () => {
    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang] || []

    return (
        <section className=" text-white pt-[110px] md:pt-[170px] px-[15px]  pb-[100px] md:px-0">
            <div className="container bg-cover mx-auto flex-col-reverse lg:flex-row  md:pl-[20px] pb-[90px] flex justify-center  md:justify-between">
                <div>
                    <div className='lg:max-w-[606px] mt-[50px] md:mt-[20px] lg:mt-0 text-center lg:text-left'>
                        <h1 className="text-[38px] text-[#0B132A] md:text-[50px] font-[500] ">
                            {localization?.intro?.title} <b className='font-[700]'> Capital Telecom </b> {localization?.intro?.bunda} 
                        </h1>
                        <p className=" text-[16px]  pt-[20px] text-[#4F5665]">
                            {localization?.intro?.subtitle}
                            <b className='font-[500]'>Capital Telecom</b>
                            {localization?.intro?.subtitle2}</p>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center md:flex-row flex-col mt-[50px] 
                md:space-x-[50px] space-y-[50px] md:space-y-0">
                        <Link
                            href="/#yourdream"
                            className="w-[250px] flex justify-center items-center md:w-[250px] bg-[#AB8A4C]  rounded-[15px]  font-[700]  h-[60px] px-[19px] py-2 text-semibold text-white shadow-[0px_25px_25px_0px_rgba(171,138,76,0.25)]"
                        >
                            {localization.header.for_home}
                        </Link>  <Link
                            href="/#aboutus" className="w-[250px] font-[700]  flex items-center justify-center md:w-[250px] border-[1px]  h-[60px] border-[#AB8A4C] rounded-[15px] px-9 py-2 text-[#AB8A4C] shadow-[0px_25px_25px_0px_rgba(171,138,76,0.25)]"
                        >
                            {localization.header.for_business}
                        </Link>
                    </div>
                </div>
                <div className='lg:max-w-[600px] w-full max-h-[382px]'>
                    <Image src="/intro-bg.png" alt="image" width={600} height={382}/>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
