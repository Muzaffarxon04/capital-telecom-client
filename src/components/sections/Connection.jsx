
import Link from "next/link"
import Content from "@/Localization/Content";
import { useSelector } from 'react-redux';
export default function Connection() {
    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang] || []

  return (
     
      <div className="px-[15px] md:px-0">
          <div className="container mx-auto mt-[-145px] bg-[#fff] shadow-[0px_25px_25px_0px_rgba(13,16,37,0.10)] rounded-[10px] py-[69px] md:py-[58px] px-[24px] md:px-[70px] flex items-center justify-center lg:justify-between flex-wrap text-center  lg:text-left">
              <div className="w-[410px]">
                  <h2 className="text-[40px] text-[#0B132A] font-[500]">{localization.students.title}</h2>
                  <p className="text-[#4F5665] text-[20px] mt-[20px]">{localization.students.title2}</p>
              </div>
              <Link href="/#contact" className="mt-[50px] text-center flex items-center justify-center lg:mt-0 bg-[#AB8A4C] text-[#fff] font-[700] rounded-[10px] w-[250px] h-[60px] shadow-[0px_25px_25px_0px_rgba(171,138,76,0.25)]">{localization.students.title3}</Link>
          </div>
   </div>
          
  )
}
