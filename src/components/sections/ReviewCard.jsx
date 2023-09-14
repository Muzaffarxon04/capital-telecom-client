import { FaUser, FaLocationArrow, FaServer } from "react-icons/fa"



export default function ReviewCard({ item }) {
    return (
        <div className="max-w-[1140px] w-full mx-auto border py-[37px] mt-[150px] rounded-[10px] bg-[#fff] flex justify-between items-center">
            <div className="flex items-center px-[90px] border-r-2 border-[#EEEFF2]">
                <div className="bg-[#FFF0D5] mr-[35px] rounded-full w-[55px] h-[55px] flex items-center justify-center text-[#AB8A4C]">
                    <FaUser size={23}/>
                </div>
                <div>
                    <h3 className="text-[#0B132A] font-[700] text-[25px]  mb-[5px]">90+</h3>
                    <h4 className="text-[20px] text-[#4F5665]">Users</h4>
               </div>
            </div>
            <div className="flex items-center  px-[90px]  border-r-2 border-[#EEEFF2]">
                <div className="bg-[#FFF0D5] mr-[35px] rounded-full w-[55px] h-[55px] flex items-center justify-center text-[#AB8A4C]">
                    <FaLocationArrow size={23} />
                </div>
                <div>
                    <h3 className=" text-[#0B132A] font-[700] text-[25px]  mb-[5px]">30+</h3>
                    <h4 className="text-[20px] text-[#4F5665]">Locations</h4>
              </div>
            </div>
            <div className="flex items-center  px-[90px] ">
                <div className="bg-[#FFF0D5] mr-[35px] rounded-full w-[55px] h-[55px] flex items-center justify-center text-[#AB8A4C]">
                    <FaServer size={23} />
                </div>
                <div>
                    <h3 className="text-[#0B132A] font-[700] text-[25px] mb-[5px]">50+</h3>
                    <h4 className="text-[20px] text-[#4F5665]">Servers</h4>
               </div>
            </div>
        </div>
    )
}
