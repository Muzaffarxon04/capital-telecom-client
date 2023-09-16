
import Image from "next/image"

export default function TariffsCard({ item, localization }) {
    return (
        <div className=" mt-[50px] max-w-[300px] md:max-w-[48%] sm:max-w-[100%]  lg:max-w-[300px] w-full h-[300px] rounded-[15px] bg-[#FFF] border-[rgba(171,138,76,0.50)] border-[0.5px] shadow-[0px_0px_15px_0px_rgba(171,138,76,0.05)] flex flex-col items-center pt-[24px] pb-[50px] px-[36px]">
            <Image src={item.img} alt="img" width={80} height={80}/>
                <h3 className="font-[700] mt-[40px] text-[#0B132A] text-[25px] ">
                {item.tarif}
                </h3>
                <h6 className="font-[400] text-[#4F5665] mt-[15px] text-[20px] flex flex-col items-center">
                    {item.price}
                <small>{localization.partners.price}</small>
                </h6>
               
        </div>
    )
}
