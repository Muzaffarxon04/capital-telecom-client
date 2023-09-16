"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Head from "next/head";
import Content from "@/Localization/Content";
import { Provider } from "react-redux";
import { changeLanguage } from "@/slices/statusReducer";

import { persistor, store } from "src/slices/storeCart";
import { usePathname } from "next/navigation";
import {
   NextSeo,
   CorporateContactJsonLd,
   FAQPageJsonLd,
   SocialProfileJsonLd,
} from "next-seo";


export default function RootLayout({ children }) {
   const statusLocal = JSON.parse(localStorage.getItem("status")) || false
const [status, setStatus] = useState(statusLocal || false);

   
   
   const { localization } = Content[store?.getState()?.localiztion.lang || "en"] || [];

   

   const pathname = usePathname();
   return (
      <Provider store={store}>
         <html lang="en">
            <Head>
               <NextSeo
                  title="Capital Telecom"
                  titleTemplate="Capital Telecom | %s"
                  additionalMetaTags={[
                     {
                        property: "dc:creator",
                        content: "capitaltelecom",
                     },
                     {
                        name: "application-name",
                        content: "CapitalTelecom",
                     },
                  ]}
               />
               <CorporateContactJsonLd
                  url="https://comperaconsult.uz"
                  logo="https://comperaconsult.uz/_next/image?url=%2Flogo.png&w=256&q=75"
                  contactPoint={[
                     {
                        telephone: "+998909282244",
                        contactType: "call centre",
                        email: "info@capitaltelecom.uz",
                        areaServed: "UZ",
                        availableLanguage: ["English", "Russian", "Uzbek"],
                     },
                  ]}
               />
               ]
               <SocialProfileJsonLd
                  type="Organization"
                  name="Compera"
                  url="https://comperaconsult.uz"
                  sameAs={["https://www.instagram.com/compera_consulting"]}
               />
               {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/> */}
               <meta property="og:site_name" content="Compera" />
               <meta
                  name="keywords"
                  content="capital, capital telecom, telecom, capitaltelecom, telecomcapital, capitaltelecomuz"
               />
               <meta
                  data-react-helmet="true"
                  name="description"
                  content="Capital Telecom"
               />
               <link rel="shortcut icon" href="/favicon.ico" />
               <link rel="icon" href="/favicon.png" />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/favicon.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/favicon.png"
               />
               <meta name="description" content={"Capital Telecom"} />
               <meta name="title" content={"Capital Telecom"} />
               <title>Capital Telecom</title>
            </Head>
            {Boolean(statusLocal || status) ? null : (
               <div className="overflow-hidden w-full h-full  top-0 left-0  z-[60] fixed flex justify-center items-center bg-[#ffffff7e]">
                  <div className="flex text-center items-center flex-wrap justify-center font-[700] text-[22px] space-x-[62px]">
                     <button
                        onClick={() => {
                          localStorage.setItem(
                             "status",
                             JSON.stringify("home"),
                          );
                           setStatus("home")
                        }}
                        className="  bg-[#AB8A4C] border  border-[#FFF] rounded-[20px] w-[300px]  h-[75px] text-[#FFF] shadow-[0px_25px_25px_0px_rgba(171,138,76,0.25)]">
                        {localization.header.for_home}
                     </button>
                     <button
                        onClick={() => {
                           localStorage.setItem("status", 
                              JSON.stringify("ofice"),
                           );
                           setStatus("ofice");

                        }}
                        className="  bg-[#fff] border font-[500] border-[#AB8A4C] rounded-[20px] w-[300px]   h-[75px] text-[#AB8A4C] shadow-[0px_25px_25px_0px_rgba(171,138,76,0.25)]">
                        {localization.header.for_business}
                     </button>
                  </div>
               </div>
            )}
            <body>
               {pathname !== "/" && <Header type={"layout"} />}
               <main>{children}</main>
               <Footer />
            </body>
         </html>
      </Provider>
   );
}
