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
        <footer className="bg-[#F1F2FE4D] text-[#727271]">
            <div className="container mx-auto border-t-[0.5px] border-[#55B25B] flex justify-center  gap-[100px] py-[45px] md:flex-nowrap flex-wrap px-[30px] text-center md:text-left ">
                <div>
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/">  <Image height={38} width={147} src="/logo.png" alt="Logo" className="h-10 w-100" /></Link>
                        <div className="flex flex-col">
                            <a href="tel:+998909282244" className="text-[#55B25B] font-inter font-semibold text-base leading-[1.5] mt-[30px]"> +998 90 928 22 44</a>
                            <a href="tel:+998909332420" className="text-[#55B25B] font-inter font-semibold text-base leading-[1.5] mt-[5px]"> +998 90 933 24 20</a>
                            {/* <p className="text-[#727271] font-inter font-normal text-sm leading-[1.5]">Call Center</p> */}
                            <a href="mailto:info@compera.uz" className=" text-[#55B25B] font-inter font-semibold text-base leading-[1.5] inline-flex my-[15px]">info@compera.uz</a>
                        </div>
                    </div>
                    <p className=" text-[#55B25B] font-inter font-semibold text-base leading-[1.5]">
                        {localization.header.address}
                    </p>
               
                </div>
                <div className="col-span-1 space-y-2.5 text-[#727271] font-inter font-medium text-base leading-[1.5] flex flex-col">
                    <div className="font-semibold text-[#55B25B] mb-[16px]">{localization.header.popular}</div>
                    {data && data[lang || "uz"].map((item, index) => (
                        <Link  href={`/${item.id}`} key={item.id}>
                            {item.country}
                        </Link>
                    ))}
                </div>
                <div className=" col-span-1 space-y-2.5 text-[#727271] font-inter font-medium text-base leading-[1.5] flex flex-col">
                    <div className="font-semibold  text-[#55B25B]  mb-[16px]">{localization.header.sections}</div>
                    <Link href="/#aboutus">
                        {localization.header.aboutus}
                    </Link>
                    <Link href="/#start">
                        {localization.header.serivses}
                    </Link>
                    <Link href="/#faq">
                        {localization.header.faq}
                    </Link>
                    {/* <Link href="/">
                        {localization.header.reviews}
                    </Link> */}
                    <Link href="/contacts">
                        {localization.header.contacts}
                    </Link>
                </div>
                <div className=" col-span-1 space-y-2.5 text-[#727271] font-inter font-medium text-base leading-[1.5]">
                    <div className="flex items-center justify-center md:justify-start gap-3 ">
                        <a href="https://www.facebook.com/comperaconsulting" className="w-[39px] h-[39px] inline-flex bg-[#ffffff] border border-solid border-[#55B25B] rounded-full items-center justify-center">
                            <FaFacebook color="#55B25B" size={20} />
                        </a>
                        <a href="https://www.instagram.com/compera_consulting/" className="w-[39px] h-[39px] inline-flex bg-[#ffffff] border border-solid border-[#55B25B] rounded-full items-center justify-center">
                            <FaInstagram color="#55B25B" size={20} />
                        </a>   <a href="https://t.me/comperaconsulting" className="w-[39px] h-[39px] inline-flex bg-[#ffffff] border border-solid border-[#55B25B] rounded-full items-center justify-center">
                            <FaTelegram color="#55B25B" size={20} />
                        </a>
                    </div>
                    <p className="w-[145px] text-[#727271] font-inter font-medium text-base mx-auto md:mx-0 ">
                        “Compera Consulting”, {new Date().getFullYear()}  Terms & Conditions Privacy Policy

                    </p>
                </div>
            </div>
        </footer>

    )
}
