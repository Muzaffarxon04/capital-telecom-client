"use client";

import StickyHeader from "@/components/header/Header";
import IntroSection from "@/components/sections/Intro";
import StartSection from "@/components/sections/Start";
import Features from "@/components/sections/Fatures";
import YourDreamSection from "@/components/sections/YourDream";
import ReviewCard from "@/components/sections/ReviewCard";


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
         <div className="bg-[#fff]">
            <ReviewCard />

            <StartSection />
         </div>
         <div
            id="features"
            className="bg-gradient-to-b from-gray-200 to-transparent mt-[180px] md:mt-[239px]">
            <Features />
         </div>

         <div id="contact" className="pt-[50px] bg-[#fff]">
            <YourDreamSection />
         </div>
      </div>
   );
};

export default HomePage;
