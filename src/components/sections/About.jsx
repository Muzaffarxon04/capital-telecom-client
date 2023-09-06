import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"
import { changeLanguage } from '@/slices/localizationReducer';
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";

export default function About() {

    const dispatch = useDispatch();

    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];

  return (
      <div className="text-dark my-[50px] lg:my-0 lg:pt-125 lg:pb-130 lg:py-125">
          <div className="container mx-auto  flex items-center flex-wrap lg:flex-nowrap max-xl:justify-between  text-center px-[15px]">
              <div className=" border-solid border-[0.5px] border-[rgba(85, 178, 91, 0.15)] bg-white rounded-[15px] shadow-md w-full lg:w-[396px] xl:w-[40%]   py-[35px] px-[42px]  lg:mr-100">
                  <h2 className="text-[36px] md:text-3xl font-[700] md:font-semibold font-inter text-left leading-11 text-green-500 tracking-tight">
                      {localization.about.title} 
                  </h2>
                  <p className="font-inter text-sm font-light leading-6 tracking-wider text-left py-20">{ localization.about.text1}</p>
                
                  {/* <div className="flex justify-center mt-30 ">
                      <button className="flex items-center px-6 py-3.5 rounded-lg border h-[36px] md:h-auto border-green-500 bg-green-500 text-white font-inter text-base font-semibold leading-5 text-center">
                          {localization.learn_more} <span className="ml-2"><FaArrowRight /></span>
                      </button>
                  </div> */}
              </div>
              <div className="flex items-center justify-center mt-[50px] overflow-hidden lg:mt-0 min-[1024px]:max-w-[500px]  max-h-[410px] w-full h-full rounded-[15px] xl:min-w-[50%]">
                  <Image src="/students.png" alt="image" width={683} height={310}/>
              </div>
          </div>

      </div>
  )
}
