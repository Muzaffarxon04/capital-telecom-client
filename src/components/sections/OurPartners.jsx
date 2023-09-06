import Image from "next/image"
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
export default function OurPartners() {

  const { lang } = useSelector((state) => state.localiztion);

  const { localization } = Content[lang];


  return (
    <section className="py-[50px] md:pt-[60px]  md:pb-[100px]">
      <div className="container mx-auto ">
        <h2 className="text-[#4D4D4D] text-center font-inter font-[700] md:font-extrabold text-[44px] md:text-5xl leading-[1.33333] mx-auto mb-[60px]">
          <span className='text-[#727271]'></span><span className='text-[#55B25B]'>
            {/* Our */}
            {localization.partners.our}

            <span className='text-[#727271]'>
              {/* partners */}
              {localization.partners.title}
            </span></span>
        </h2>
        <div className="block md:hidden max-w-[1000px] max-h-[400px] w-full mx-auto h-auto">
          <Image src="/partners-mobile.png" alt="image" width={1000} height={400}/>
        </div>
        <div className="hidden md:block max-w-[1000px] max-h-[400px] w-full mx-auto h-auto">
          <Image src="/partners.png" alt="image" width={1000} height={400} />
        </div>
    
  

      </div>

    </section>
  )
}
