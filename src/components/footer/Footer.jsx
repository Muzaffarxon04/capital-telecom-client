import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";

export default function Footer() {
    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];


    return (
        <footer className="md:h-[117px] bg-[#F8F8F8] text-[#AFB5C0] border-t-[1px] border-[#AB8A4C]">
            <div className="container mx-auto  flex justify-between flex-col md:flex-row  py-[60px] md:py-[35px] md:flex-nowrap items-center flex-wrap text-center md:text-left">
                <p className="order-last md:order-first">
                    ©  CapitalTelecom {new Date().getFullYear()}
                </p>
                <div className=" flex flex-col items-center md:items-start">
                    <Link href="/">  <Image height={46} width={176} src="/logo.png" alt="Logo" className="h-[46px] w-[176px]" /></Link>
                </div>
                <div className="  text-[#727271] font-inter font-medium text-base leading-[1.5]">
                    <div className="flex items-center justify-center md:justify-start gap-3 my-[50px] md:my-0 ">
                        <a href="https://www.facebook.com/comperaconsulting" className=" shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[39px] h-[39px] inline-flex bg-[#ffffff]  rounded-full items-center justify-center">
                            <FaFacebook color="#55B25B" size={20} />
                        </a>
                        <a href="https://www.instagram.com/compera_consulting/" className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  w-[39px] h-[39px] inline-flex bg-[#ffffff]  rounded-full items-center justify-center">
                            <FaInstagram color="#55B25B" size={20} />
                        </a>   <a href="https://t.me/comperaconsulting" className="w-[39px] h-[39px] inline-flex bg-[#ffffff]  rounded-full items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                            <FaTelegram color="#55B25B" size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>

    )
}
