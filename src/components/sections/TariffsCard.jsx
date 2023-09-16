

export default function TariffsCard({ item, localization, lang }) {
    return (
        <div className=" mt-[50px] rounded-[15px] bg-[rgba(171,138,76,0.03)] border-[rgba(171, 138, 76, 0.50)] border flex flex-wrap justify-center md:justify-between items-center px-[50px] md:pl-[45px] md:pr-[60px] pb-[60px] md:pb-[30px] pt-[60px] md:pt-[23px]">
            <span className="bg-[#AB8A4C] h-[50px] rounded-[50px] flex justify-center items-center px-[27px] text-[26px] font-[700] text-[#fff] w-[201px] shadow-[0px_25px_25px_0px_rgba(171,138,76,0.25)]">{item.tarif}</span>
            <div className="flex items-center mt-[50px] md:mt-0">
                <div className=" flex flex-col items-center">
                    <div className={`flex items-center justify-center  w-[120px] h-[120px] bg-[url('/Ellipse1.png')] bg-no-repeat bg-contain`}>
                        <h3 className="font-[400] text-[#000]  text-[26px] flex flex-col items-center">
                            {item.daytime_speed}

                            <small className="text-[12px] font-[400]">Mbit/s</small>
                        </h3>
                    </div>
                    <p className="text-[10px]  mt-[8px]">{lang !== "uz" && localization.partners.our} 12:00 {lang === "uz" ? localization.partners.our : localization.partners.title} 00:00 {lang === "uz" && localization.partners.title}</p>
                </div>
                <div className="ml-[20px]  flex flex-col items-center">
                    <div className={` flex items-center justify-center  w-[120px] h-[120px] bg-[url('/Ellipse2.png')] bg-no-repeat bg-contain`}>
                        <h3 className="font-[400] text-[#000]  text-[26px] flex flex-col items-center">
                            {item.night_speed}
                            <small className="text-[12px] font-[400]">{localization.partners.mbit}</small>
                        </h3>
                    </div>
                    <p className="text-[10px]  mt-[8px]">{lang !== "uz" && localization.partners.our} 00:00 {lang === "uz" ? localization.partners.our : localization.partners.title} 07:00 {lang === "uz" && localization.partners.title}</p>
                </div>
            </div>
            <div className="flex md:flex-col space-x-[30px] md:space-x-0 my-[50px] md:my-0">
                {item?.bonuses && item?.bonuses.map((bonus, index) => (<span key={index} className="md:mb-[17px] text-[#AB8A4C] border-[0.5px] border-[#AB8A4C] bg-[#fff] text-center rounded-[5px] p-[7.5px] text-[10px] font-[400]">
                    {bonus}
                </span>))}
            </div>
            <div className="price-box">
                <h3 className="font-[600] text-[#000] text-[24px] flex flex-col items-center">
                    {item.price}

                    <small className="text-[12px] font-[500] text-[#4F5665]">{localization.partners.price}</small>
                </h3>
                <button className="mt-[20px] h-[45px] text-[#AB8A4C] border-[2px] border-[#AB8A4C] rounded-[50px] py-[10px] px-[60px] text-[16px] font-[700]">{localization.partners.select}</button>
            </div>
        </div>
    )
}
