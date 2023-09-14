"use client";

import StickyHeader from "@/components/header/Header";
import IntroSection from "@/components/sections/Intro";
import StartSection from "@/components/sections/Start";
import Features from "@/components/sections/Fatures";
import YourDreamSection from "@/components/sections/YourDream";


const HomePage = () => {
   return (
      <div className="flex flex-col ">
         <div
            className="
         bg-[#fff]
          bg-cover bg-center  flex flex-col">
            <StickyHeader />
            <IntroSection />
         </div>
         {/* <div className="bg-students-background bg-cover">
         <OurStudentsSection />
      </div> */}
         <div id="start" className="bg-[#fff]">
            <StartSection />
         </div>
         <div
            id="features"
            className="bg-gradient-to-b from-gray-200 to-transparent mt-[180px] md:mt-[239px]">
            <Features />
         </div>
         {/* <div
            id="review"
            className="bg-clients-background bg-cover bg-[lightgray]  bg-center">
            <OurClientsSection />
         </div> */}
         {/* <div className=" bg-white">
            <OurPartnersSection />
         </div> */}
         {/* <div className=" bg-white">
            <UniversityLists />
         </div> */}
         {/* <div id="faq" className="bg-faq-background bg-cover bg-center">
            <FaqSection />
         </div> */}
         <div id="yourdream" className="pt-[50px] bg-[#fff]">
            <YourDreamSection />
         </div>
      </div>
   );
};

export default HomePage;
