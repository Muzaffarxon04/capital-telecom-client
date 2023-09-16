"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import StatusModal from "@/components/StatusModal";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Head from "next/head";
import Content from "@/Localization/Content";
import { Provider } from "react-redux";
import statusReducer from "@/slices/statusReducer";
import {  store } from "src/slices/storeCart";
import { usePathname } from "next/navigation";
import {
   NextSeo,
   CorporateContactJsonLd,
   SocialProfileJsonLd,
} from "next-seo";


export default function RootLayout({ children }) {
   const statusLocal = store?.getState()?.status?.status;
const [status, setStatus] = useState(statusLocal || false);
useEffect(() => {
      
      sessionStorage.setItem("status", status);
      
   }, [status])
   
   
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
            <body>
               {pathname !== "/" && <Header type={"layout"} />}
               <StatusModal/>
               <main>{children}</main>
               <Footer />
            </body>
         </html>
      </Provider>
   );
}
