"use client";

import StickyHeader from "@/components/header/Header";
import IntroSection from "@/components/sections/Intro";
import AboutSection from "@/components/sections/About";
import StartSection from "@/components/sections/Start";
import FaqSection from "@/components/sections/Faq";
import YourDreamSection from "@/components/sections/YourDream";
import OurPartnersSection from "@/components/sections/OurPartners";
import OurClientsSection from "@/components/sections/OurClients";
import OurStudentsSection from "@/components/sections/OurStudents";

const HomePage = () => {
   return (
      <div className="flex flex-col ">
         {/* bg-mountain-background */}
         <div
            className="
         bg-[#fff]
          bg-cover bg-center  flex flex-col">
            <StickyHeader />
            <IntroSection />
         </div>
         {/* <div
            id="aboutus"
            className="bg-about-background bg-cover bg-center  flex flex-col">
            <AboutSection />
         </div>
         <div className="bg-students-background bg-cover">
         <OurStudentsSection />
      </div> */}
      <div id="start" className="bg-[#fff]">
         <StartSection />
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
