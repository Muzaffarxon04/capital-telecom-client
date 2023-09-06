"use client"
import Intro from "@/components/sections/universities/Intro"
import UniversityLists from "@/components/sections/universities/UniversityLists";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { data } from "@/universityData";
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
export default function UniversityPage({params}) {
  const { lang } = useSelector((state) => state.localiztion);

  const { localization } = Content[lang];
const filteredData = data[lang].find((item) => item?.id == params?.univer_id);



 return (
    <div className="mt-[85px]">
       <Intro data={filteredData} />
       {/* <UniversityLists data={filteredData} /> */}
       {/* <div className="container mx-auto mb-[100px] flex items-center justify-between">
          <button className="block md:hidden rounded-lg  text-[#55B25B]  py-[10px] px-[25px] font-[600]">
             <FaArrowLeft size={24} />
          </button>
          <button className="hidden md:flex rounded-lg border border-solid border-green-500 bg-[rgba(85, 178, 91, 0.06)] text-[#55B25B] items-center  py-[10px] px-[25px] font-[600]">
             <FaArrowLeft className="mr-[15px]" /> Back
          </button>
          <div className="flex items-center gap-[15px] text-[#727271] text-center font-inter text-[18px] font-medium">
             <button className="active-page-btn">1</button>
             <button>2</button>
             <span>...</span>
             <button>1160</button>
          </div>
          <button className="hidden md:flex rounded-lg border border-solid border-green-500 bg-[rgba(85, 178, 91, 0.06)] text-[#55B25B] items-center  py-[10px] px-[25px] font-[600]">
             Forward <FaArrowRight className="ml-[15px]" />
          </button>
          <button className="block md:hidden text-[#55B25B] items-center  py-[10px] px-[25px] font-[600]">
             <FaArrowRight size={24} />
          </button>
       </div> */}
    <br/>
    </div>
 );
}
