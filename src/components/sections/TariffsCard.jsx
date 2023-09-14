

export default function TariffsCard({ item }) {
    return (
        <div className=" mt-[50px] rounded-[15px] bg-[rgba(171, 138, 76, 0.03)] border-[rgba(171, 138, 76, 0.50)] border flex justify-between items-center pl-[45px] pr-[60px] pb-[30px] pt-[23px]">
            <span className="bg-[#AB8A4C] h-[50px] rounded-[50px] flex justify-center items-center px-[27px] text-[26px] font-[700] text-[#fff] w-[201px]">{item.tarif}</span>
            <div className="flex items-center">
                <div className=" flex flex-col items-center">
                    <div className={`flex items-center justify-center relative bg-[#fff] z-[1] w-[120px] h-[120px] border-[8px] border-[#AB8A4C] rounded-full  before:top-[-8px] before:right-[-8px] before:bg-[#fff] before:w-[60px] before:z-[-1] before:h-[60px] before:absolute`}>
                        <h3 className="font-[400] text-[#000]  text-[26px] flex flex-col items-center">
                            {item.daytime_speed}

                            <small className="text-[12px] font-[400]">Mbit/s</small>
                        </h3>
                    </div>
                    <p className="text-[10px]  mt-[8px]">from 12:00 to 00:00</p>
                </div>
                <div className="ml-[20px]  flex flex-col items-center">
                    <div className={` flex items-center justify-center relative bg-[#fff] z-[1] w-[120px] h-[120px] border-[8px] border-[#AB8A4C] rounded-full  before:top-[-8px] before:right-[-8px] before:bg-[#fff] before:w-[121px] before:z-[-1] before:h-[60px] before:absolute`}>
                        <h3 className="font-[400] text-[#000]  text-[26px] flex flex-col items-center">
                            {item.night_speed}
                            <small className="text-[12px] font-[400]">Mbit/s</small>
                        </h3>
                    </div>
                    <p className="text-[10px] mt-[8px]">from 00:00 to 07:00</p>
                </div>
            </div>
            <div className="flex flex-col">
                {item?.bonuses && item?.bonuses.map((bonus, index) => (<span key={index} className="mb-[17px] text-[#AB8A4C] border-[0.5px] border-[#AB8A4C] text-center rounded-[5px] p-[7.5px] text-[10px] font-[400]">
                    {bonus}
                </span>))}
            </div>
            <div className="price-box">
                <h3 className="font-[600] text-[#000] text-[24px] flex flex-col items-center">
                    {item.price}

                    <small className="text-[12px] font-[500] text-[#4F5665]">sums/month</small>
                </h3>
                <button className="mt-[20px] h-[45px] text-[#AB8A4C] border-[2px] border-[#AB8A4C] rounded-[50px] py-[10px] px-[60px] text-[16px] font-[700]">Select</button>
            </div>
        </div>
    )
}
