import Image from "next/image"
import Connection from "./Connection"
import Content from "@/Localization/Content";
import { useSelector } from 'react-redux';

export default function Features() {

        const { lang } = useSelector((state) => state.localiztion);

        const { localization } = Content[lang] || []

    return (
        <section >
            <Connection/>
            <div id="conected" className="container  pt-[130px] mx-auto text-[#4F5665] flex items-center lg:justify-between flex-wrap justify-center text-center md:text-left">
                <div className="md:max-w-[490px] flex flex-col items-center md:items-start">
                    <h2 className="text-[#0B132A] text-[35px] font-[500]">{ localization.start.title}</h2>
                    <p className="text-[16px] my-[20px]">{localization.start.text1}</p>
                    <ul className="text-[14px] space-y-[15px] text-left mt-[30px]">
                        <li className=" relative pl-[34px]  before:bg-[url('/bx_bxs-check-circle.png')] before:w-[24px]  before:h-[24px] before:left-0 before:top-[-2px] before:absolute">{localization.start.text2}</li>
                        <li className=" relative pl-[34px]  before:bg-[url('/bx_bxs-check-circle.png')] before:w-[24px]  before:h-[24px] before:left-0 before:top-[-2px] before:absolute">{localization.start.text3}</li>
                        <li className=" relative pl-[34px]  before:bg-[url('/bx_bxs-check-circle.png')] before:w-[24px]  before:h-[24px] before:left-0 before:top-[-2px] before:absolute">{localization.start.text4}</li>
                        <li className=" relative pl-[34px]  before:bg-[url('/bx_bxs-check-circle.png')] before:w-[24px]  before:h-[24px] before:left-0 before:top-[-2px] before:absolute">{localization.start.text5}</li>

                    </ul>
                </div>
                <div className="max-w-[508px] w-full box-border mt-[50px] md:mt-0">
                    <Image src="/Illustration.png" alt="img" className="max-w-[508px] w-full" width={500} height={400} />
                </div>
            </div>
        </section>
    )
}
