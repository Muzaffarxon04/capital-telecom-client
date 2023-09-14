import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { changeLanguage } from '@/slices/localizationReducer';
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";

const StickyHeader = ({ type }) => {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLang, setIsLang] = useState(false);
    const dispatch = useDispatch();

    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const langs = ["ru", "uz", "en"]



    return (
        <>
            <header
                className={`fixed w-full h-[88px]  top-0 z-50 py-[17px] lg:py-[17px]  flex items-center justify-between ${type || scrolled ? 'scrolled-header bg-white shadow-mds' : 'lg:bg-[transparent]  bg-white '
                    }`}
              
            >
                <div className="container header-container lg:max-w-[1440px] mx-auto py-1 md:py-1 px-4 md:px-6 flex items-center justify-between">
                    <div className="lg:hidden">
                        <button className="w-[30px] text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
                            {isMenuOpen ? <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.25 8.75L8.75 21.25M8.75 8.75L21.25 21.25" stroke="#55B25B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> : <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_227_545)">
                                    <path d="M23 10.5414H1C0.447715 10.5414 0 10.9704 0 11.4997C0 12.029 0.447715 12.4581 1 12.4581H23C23.5523 12.4581 24 12.029 24 11.4997C24 10.9704 23.5523 10.5414 23 10.5414Z" fill="#55B25B" />
                                    <path d="M23 10.3914H1C0.370952 10.3914 -0.15 10.8817 -0.15 11.4997C-0.15 12.1178 0.370952 12.6081 1 12.6081H23C23.629 12.6081 24.15 12.1178 24.15 11.4997C24.15 10.8817 23.629 10.3914 23 10.3914Z" stroke="white" stroke-opacity="0.5" stroke-width="0.3" />
                                    <path d="M23 3.83362H1C0.447715 3.83362 0 4.26268 0 4.79195C0 5.32122 0.447715 5.75028 1 5.75028H23C23.5523 5.75028 24 5.32122 24 4.79195C24 4.26268 23.5523 3.83362 23 3.83362Z" fill="#55B25B" />
                                    <path d="M23 3.68362H1C0.370953 3.68362 -0.15 4.17388 -0.15 4.79195C-0.15 5.41002 0.370953 5.90028 1 5.90028H23C23.629 5.90028 24.15 5.41002 24.15 4.79195C24.15 4.17388 23.629 3.68362 23 3.68362Z" stroke="white" stroke-opacity="0.5" stroke-width="0.3" />
                                    <path d="M23 17.25H1C0.447715 17.25 0 17.6791 0 18.2083C0 18.7376 0.447715 19.1667 1 19.1667H23C23.5523 19.1667 24 18.7376 24 18.2083C24 17.6791 23.5523 17.25 23 17.25Z" fill="#55B25B" />
                                    <path d="M23 17.1H1C0.370952 17.1 -0.15 17.5903 -0.15 18.2083C-0.15 18.8264 0.370952 19.3167 1 19.3167H23C23.629 19.3167 24.15 18.8264 24.15 18.2083C24.15 17.5903 23.629 17.1 23 17.1Z" stroke="white" stroke-opacity="0.5" stroke-width="0.3" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_227_545">
                                        <rect width="24" height="23" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

}
                            
                        </button>
                    </div>
                    <div className="text-lg md:text-xl font-semibold">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt=" Logo"
                                width={176}

                                height={46}
                                priority
                            /></Link>
                    </div>

                    <div className='flex items-center  '>

                        <div className={`absolute  w-full mb-[50px] overflow-y-auto  left-0 top-[86px] shadow-md bg-white flex lg:hidden text-center text-[28px] font-[700] pt-[90px]  space-y-[50px]  ${isMenuOpen ? ' h-[95vh] pb-[70px] flex flex-col' : 'hidden'}`}>
                            <Link onClick={() => {
                                setIsMenuOpen(false)
                            }} href="/#aboutus" className={`text-[#4D4D4D] hover:text-[#55B25B]`}>{localization.header.aboutus}</Link>
                            <Link onClick={() => {
                                setIsMenuOpen(false)
                            }} href="/#start" className={`text-[#4D4D4D] hover:text-[#55B25B]`}>{localization.header.serivses}</Link>
                            <Link onClick={() => {
                                setIsMenuOpen(false)
                            }} href="/#faq" className={`text-[#4D4D4D] hover:text-[#55B25B]`}>{localization.header.faq}</Link>
                            {/* <div className={` group relative z-50 flex items-center justify-center  text-[#4D4D4D] hover:text-[#55B25B]`}>
                                {localization.header.universities}
                            <FaChevronDown className='ml-[5px]' size={14} />
                                <div className='hidden group-hover:block overflow-y-auto  text-[#4D4D4D] min-w-[216px] absolute  z-50 top-[0] bg-white rounded-lg border border-solid border-[rgba(85, 178, 91, 0.50)] shadow-md'>
                                    <div className='px-[20px] py-[17px]'>
                                        <h3 className="text-[#4D4D4D] font-inter font-[600] text-[16px] leading-5">                                    {localization.header.popular}
                                        </h3>
                                        <div className='flex flex-col gap-[20px] mt-[20px]'>
                                            {data && data[lang || "uz"].map((item, index) => (
                                                <Link onClick={() => {
                                                    setIsMenuOpen(false)
                                                }} className='text-[#4D4D4D] text-[16px] font-[400]' href={`/${item.id}`} key={item.id}>
                                                    {item.country}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='pt-[12px] pb-[15px] px-[20px] flex items-center border-t-[1px] border-[#55B25B80] border-solid font-[600]'>
                                        All countries <FaArrowRight size={12} className='text-[#55B25B] ml-[5px]' />
                                    </div> 
                                </div>
                            </div> */}
                            {/* <Link onClick={() => {
                                setIsMenuOpen(false)
                            }} href="/#review" className={`text-[#4D4D4D] hover:text-[#55B25B]`}>{localization.header.reviews}</Link> */}
                            <Link onClick={() => {
                                setIsMenuOpen(false)
                            }} href="/contacts" className={`text-[#4D4D4D] hover:text-[#55B25B] `}>{localization.header.contacts}</Link>
                            <div className='flex items-center justify-center'>
                                <button
                                    onClick={() => {
                                        setIsMenuOpen(false)
                                    }} 
                                    className="lg:hidden inline-block bg-green-500  border-white border-[1px] rounded-[10px] p-[15px] text-white"
                                >
                                    {localization.apply_university}
                                </button>
                            </div>
                        </div>

                        <div className={`hidden lg:flex space-x-[40px] mx-[80px] `}>
                            <Link  href="/#aboutus" className={` flex items-center justify-center py-[30px]  ${type || scrolled ? 'text-[#4D4D4D] hover:text-[#55B25B]' : 'text-[#4F5665] hover:text-[#4D4D4D]'}`}>{localization.header.aboutus}</Link>
                            <Link href="#start" className={` flex items-center justify-center py-[30px]  ${type || scrolled ? 'text-[#4D4D4D] hover:text-[#55B25B]' : 'text-[#4F5665] hover:text-[#4D4D4D]'}`}>{localization.header.serivses}</Link>
                            <Link href="/#faq" className={` flex items-center justify-center py-[30px]  ${type || scrolled ? 'text-[#4D4D4D] hover:text-[#55B25B] ' : 'text-[#4F5665] hover:text-[#4D4D4D]'}`}>{localization.header.faq}</Link>
                            {/* <div className={` group relative z-50 flex items-center justify-center py-[30px] ${type || scrolled ? 'text-[#4D4D4D] hover:text-[#55B25B]' : 'text-[#4F5665] hover:text-[#4D4D4D]'}`}>{localization.header.universities}<FaChevronDown className='ml-[5px]' size={14} />
                                <div className='hidden group-hover:block  text-[#4D4D4D] min-w-[216px] absolute  z-50 top-[80px] bg-white rounded-lg border border-solid border-[rgba(85, 178, 91, 0.50)] shadow-md'>
                                    <div className='px-[20px] py-[17px]'>
                                        <h3 className="text-gray-700 font-inter font-semibold text-base leading-5">                                    {localization.header.popular}
</h3>   
                                        <div className='flex flex-col gap-[20px] mt-[20px]'>
                                            {data && data[lang || "uz"].map((item, index) => (
                                                <Link className='hover:text-[#55B25B]' href={`/${item.id}`} key={index}>
                                                    {item.country}
                                                </Link>
                                            ))}
</div>
                                    </div>
                                    <div className='pt-[12px] pb-[15px] px-[20px] flex items-center border-t-[1px] border-[#55B25B80] border-solid font-[600]'>
                                        All countries <FaArrowRight size={12} className='text-[#55B25B] ml-[5px]' />
                                    </div> 
                            </div>
                            </div> */}
                            
                      
                            <Link href="/contacts" className={` flex items-center justify-center py-[30px]  ${type || scrolled ? 'text-[#4D4D4D] hover:text-[#55B25B]' : 'text-[#4F5665] hover:text-[#4D4D4D]'}`}>{localization.header.contacts}</Link>
                            <Link href="/contacts" className={` flex items-center justify-center py-[30px]  ${type || scrolled ? 'text-[#4D4D4D] hover:text-[#55B25B]' : 'text-[#4F5665] hover:text-[#4D4D4D]'}`}>{localization.header.add_service}</Link>
                        </div>
                    
                        <Link
                            href="/#yourdream"
                            className="hidden lg:flex items-center justify-center  bg-[#fff] border-none border-[#AB8A4C] rounded-[50px] px-[25px]   h-[45px] font-[500] text-[#0B132A] "
                        >
                            {localization.header.for_home}


                        </Link>
                        <Link
                            href="/#yourdream"
                            className="hidden lg:flex items-center justify-center  bg-[#fff] border font-[500] border-[#AB8A4C] rounded-[50px] px-[25px]   h-[45px] text-[#AB8A4C] "
                        >
                            {localization.header.for_business}
                        </Link>
                        <div className='w-[49px] bg-[#fff] border border-solid border-[#AB8A4C] rounded-[10px] px-[6px] pb-[6px] pt-[3px]   md:ml-[20px] flex flex-col text-center gap-[5px]'
                        >

                            <div onClick={() => setIsLang(!isLang)} className='flex items-center gap-[6px]'><Image src={`/${lang}.png`} alt='flag' width={19} height={19} /><FaChevronDown color='55B25B' /></div>
                            {isLang && langs ? langs.filter(el => el != lang).map((item, index) => (<div key={index} onClick={(e) => {
                                dispatch(changeLanguage({ type: item }))
                                setIsLang(false)
                            }}><Image src={`/${item}.png`} alt='flag' width={19} height={19} /></div>

                            ))
                                : null}

                        </div>
                    </div>
                </div>

            </header>

        </>
    );
};

export default StickyHeader;
