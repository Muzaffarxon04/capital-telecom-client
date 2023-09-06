"use client";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Provider } from "react-redux";
// import SSROutset from '@/slices/gate';
// import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "src/slices/storeCart";
import { usePathname } from "next/navigation";
import {
   NextSeo,
   CorporateContactJsonLd,
   FAQPageJsonLd,
   SocialProfileJsonLd,
} from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
   const pathname = usePathname();
   return (
      <Provider store={store}>
         <html lang="en">
            <Head>
               <NextSeo
                  title="Study abroad with COMPERA!"
                  titleTemplate="Compera | %s"
                  additionalMetaTags={[
                     {
                        property: "dc:creator",
                        content: "comperaconsult",
                     },
                     {
                        name: "application-name",
                        content: "Compera",
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
                        email: "info@compera.uz",
                        areaServed: "UZ",
                        availableLanguage: ["English", "Russian", "Uzbek"],
                     },
                  ]}
               />
               <FAQPageJsonLd
                  mainEntity={[
                     {
                        questionName: "What is the cost of Compera services?",
                        acceptedAnswerText:
                           "The cost of the full support package is 5,100,000 soums. Payment can be made in a convenient way for you on the basis of the contract.",
                     },
                     {
                        questionName:
                           "What are the costs for accommodation and meals?",
                        acceptedAnswerText:
                           "The cost of living and meals depends on the standard of living in the country where you plan to study. For example, in London, the capital of the UK, the average cost for accommodation, meals and other daily expenses is around £1,000 per month. In other cities in the UK, these costs amount to about 700 pounds per month.",
                     },
                     {
                        questionName: "How many times a year can I apply?",
                        acceptedAnswerText:
                           "Universities usually accept applications twice a year: for the fall semester and for the spring/winter semester. In the UK, study programs start three times a year: in September, January and May.",
                     },
                  ]}
               />
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
                  content="compera, consulting, comperaconsulting,
                     compera consulting uz,
                     Compera uz,
                     compera consult,
                     compera consulting,
                     chet elda o'qish,
                     chet elda ta'lim,
                     chet elda talim,
                     учеба за границей,
                     учеба за рубежом,
                     учеба в европе,
                     учеба в Германии,
                     учеба в США,
                     учеба в USA"
               />

               <meta
                  data-react-helmet="true"
                  name="description"
                  content="Study abroad with COMPERA"
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
               <meta name="description" content={"Study abroad with COMPERA"} />
               <meta name="title" content={"Compera"} />
               <title>Study Abroad with COMPERA</title>
            </Head>
            <body className={inter.className}>
               {pathname !== "/" && <Header type={"layout"} />}
               <main>{children}</main>
               <Footer />
            </body>
         </html>
      </Provider>
   );
}
