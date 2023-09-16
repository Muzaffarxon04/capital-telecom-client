import { FaUser, FaLocationArrow, FaServer } from "react-icons/fa"

import Content from "@/Localization/Content";
import { useSelector } from 'react-redux';



export default function ReviewCard() {
    const { lang } = useSelector((state) => state.localiztion);
    
    const { localization } = Content[lang] || []

    const data = [
        {
            title: localization.about.title,
            count: "90+",
            icon: FaUser
        },
        {
            title: localization.about.text1,
            count: "90+",
            icon: FaLocationArrow

        },
        {
            title: localization.about.text,
            count: "90+",
            icon: FaServer

        },
        {
            title: localization.about.contact,
            count: "90+",
            icon: FaServer

        },
    ]

    return (
        <div className="px-[20px] md:px-0">
            <div className="container    mx-auto  md:py-[37px]  rounded-[10px] bg-[#fff] flex flex-wrap justify-center  md:justify-between items-center shadow-[0px_50px_25px_0px_rgba(13,16,37,0.05)]   md:[&>*:nth-child(3)]:border-b-0   md:[&>*:last-child]:border-0 ">
                {data && data.map((item, index) => (<>
                    <div key={index} className="flex h-[125px] items-center py-[60px] px-[49px] md:px-[90px] lg:px-[40px] border-b-2 lg:border-r-2 lg:border-b-0 border-[#EEEFF2]">
                        <div className="bg-[#FFF0D5] mr-[35px] rounded-full w-[55px] h-[55px] flex items-center justify-center text-[#AB8A4C]">
                            <item.icon size={23} />
                        </div>
                        <div>
                            <h3 className="text-[#0B132A] font-[700] text-[25px]  mb-[5px]">{item.count}</h3>
                            <h4 className="text-[20px] text-[#4F5665]">{ item.title}</h4>
                        </div>
                    </div>
                </>))}
            </div>
    </div>
    )
}
