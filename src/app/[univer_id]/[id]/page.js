"use client";
import Intro from "@/components/sections/universities/IntroSecond";
import { data } from "@/data";

import YourDream from "@/components/sections/YourDream";
import OurClients from "@/components/sections/OurClients";
import ImageSlider from "@/components/sections/universities/ImageSlider";
export default function UniversityPage({ params }) {
   const filteredData = data.find((item) => item?.id == params?.id);

   return (
      <div className="mt-[85px] pb-[50px]">
         <Intro data={filteredData} />
         <ImageSlider />
         <div className=" container mx-auto  flex items-center justify-between">
            <section className="w-full">
               <h3 className="my-[50px] text-[34px] font-[700] text-[#2E2E2E]">
                  Tuition at Harvard University
               </h3>
               <div
                  className="border-[1px] border-[#55B25B]"
                  style={{
                     borderRadius: "15px",
                     overflow: "hidden",
                  }}>
                  <table
                     style={{
                        width: "100%",
                        borderRadius: "15px",
                        overflow: "hidden",
                     }}
                     className=" bg-[#fff]  w-[100vh] mx-auto">
                     <thead className="text-[24px] font-[500]">
                        <tr className=" bg-[#55B25B80] text-left">
                           <th className="py-[23px] pl-[31px] border-[1px] border-l-none border-[#55B25B]">
                              Type of studies
                           </th>
                           <th className="py-[23px] pl-[31px] border-[1px]  border-l-none border-[#55B25B]">
                              Age
                           </th>
                           <th className="py-[23px] pl-[31px] border-[1px]  border-l-none border-[#55B25B]">
                              Duration
                           </th>
                           <th className="py-[23px] pl-[31px] border-[1px]  border-l-none border-[#55B25B]">
                              Average cost/year
                           </th>
                        </tr>
                     </thead>
                     <tbody className="text-[22px]">
                        <tr>
                           <td className="py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              Bachelor’s
                           </td>
                           <td className="py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              17+
                           </td>
                           <td className=" py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              4 years
                           </td>
                           <td className="py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              49,653 <b>USD</b>
                           </td>
                        </tr>
                        <tr>
                           <td className="py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              Bachelor’s
                           </td>
                           <td className="py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              17+
                           </td>
                           <td className=" py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              4 years
                           </td>
                           <td className="py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              49,653 <b>USD</b>
                           </td>
                        </tr>
                        <tr>
                           <td className="py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              Bachelor’s
                           </td>
                           <td className="py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              17+
                           </td>
                           <td className=" py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              4 years
                           </td>
                           <td className="py-[23px] pl-[31px] border-[1px] border-[#55B25B]">
                              49,653 <b>USD</b>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </section>
         </div>
         <OurClients type="inner" />
         <YourDream />
      </div>
   );
}
