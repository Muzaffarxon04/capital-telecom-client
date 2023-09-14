import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa"
import { data } from "@/universityData"
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";

export default function Footer() {
    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];


    return (
        <footer className="h-[117px] bg-[#F8F8F8] text-[#AFB5C0] border-t-[1px] border-[#AB8A4C]">
            <div className="container mx-auto  flex justify-between   py-[35px] md:flex-nowrap items-center flex-wrap text-center md:text-left ">
                <div className="">
                    ©  CapitalTelecom {new Date().getFullYear()}
                </div>  
                <div className="flex flex-col items-center md:items-start">
                        <Link href="/">  <Image height={46} width={176} src="/logo.png" alt="Logo" className="h-[46px] w-[176px]" /></Link>
                    </div>
              
          
                <div className="  text-[#727271] font-inter font-medium text-base leading-[1.5]">
                    <div className="flex items-center justify-center md:justify-start gap-3 ">
                        <a href="https://www.facebook.com/comperaconsulting" className="w-[39px] h-[39px] inline-flex bg-[#ffffff]  rounded-full items-center justify-center">
                            <FaFacebook color="#55B25B" size={20} />
                        </a>
                        <a href="https://www.instagram.com/compera_consulting/" className="w-[39px] h-[39px] inline-flex bg-[#ffffff]  rounded-full items-center justify-center">
                            <FaInstagram color="#55B25B" size={20} />
                        </a>   <a href="https://t.me/comperaconsulting" className="w-[39px] h-[39px] inline-flex bg-[#ffffff]  rounded-full items-center justify-center">
                            <FaTelegram color="#55B25B" size={20} />
                        </a>
                    </div>
                   
                </div>
            </div>
        </footer>

    )
}
