import Link from "next/link"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"
import { data } from "@/data"


export default function UniversityLists({ data }) {
    const univerList = data?.univsities
  return (
      <div className="container mx-auto">
          <div>
              <h2 className='text-[#3D3D3D] font-[600] text-[34px] mt-[100px] mb-[50px] text-center md:text-left'>Top <span className="text-[#55B25B]">US</span> universities</h2>
              <div className="flex justify-center gap-[20px] md:gap-0 md:justify-between flex-wrap items-center  font-inter">
                  <h3 className=" text-[#727271] text-[20px]">Items <span className="font-[700]">1-6</span> of <span className="font-[700]">6 955</span></h3>
                  <h3 className="text-[#727271] text-[20px] flex items-center ">Advanced search <FaArrowRight className="ml-[15px]" size={10}/></h3>
              </div>
              <div className='flex flex-col mt-[50px] lg:px-[80px] px-[20px]'>
                  {univerList && univerList?.map((item) => (
                      <UniversityCard data={item} key={item.id} />
              ))}
              </div>
          </div>
    </div>
  )
}


function UniversityCard({ data }) {

    return (
        <Link href={`/university/${data.id}`}>
            <div className="mb-[50px] flex flex-col md:flex-row rounded-[15px] font-inter border border-solid border-[rgba(85, 178, 91, 0.50)] bg-[rgba(85, 178, 91, 0.03)] flex text-center md:text-left">
                <div className="rounded-[15px] overflow-hidden w-full md:w-[270px]">
                    <Image src={data.img} alt={data.title} width={270} height={218} className="w-full md:w-[270px] h-full" />
               </div>
                <div className="md:pl-[49px] py-[20px] md:py-[30px] md:pr-[80px] w-full">
                    <h3 className="text-[30px] font-[600] text-[#2E2E2E]">{data.title}</h3>
                    <div className="flex justify-between flex-wrap items-center">
                        <div className="mx-auto md:mx-0">
                            <p className="text-[12px] text-[#4D4D4D]">{data.country}</p>
                            <h2 className="text-[18px] text-[#3D3D3D] py-[15px]">{data.flag}</h2>
                            <div className="flex items-center justify-center md:justify-start gap-[15px] mb-[20px] lg:mb-0">
                                {data.tags && data.tags.map((item, id) => (
                                    <span key={id} className="rounded-[5px]  text-[8px] border-solid border-green-500 border-[0.5px] bg-white py-[4px] px-[10px] text-[#4D4D4D]">{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex w-full items-center flex-col justify-center md:w-auto md:justify-start md:items-start">
                            <p className="text-[24px] font-[600] text-[#000] mb-[25px]">{data.price}</p>
                            <button className="rounded-lg border border-solid border-[rgba(85, 178, 91, 0.50)] bg-[#55B25B] h-[31px] px-[20px] text-white font-[600] text-[18px]">More</button>
                        </div>
                    </div>
                  
                </div>
            </div>
        </Link>
    )
}