import {  useSelector } from "react-redux";
import Content from "@/Localization/Content";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function YourDream() {
   const [name, setName] = useState("");
   const [number, setNumber] = useState("");

   const { lang } = useSelector((state) => state.localiztion);

   const { localization } = Content[lang];

   function SubmitForm() {
      try {
         fetch("https://api.aliinvest.uz/client", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               name: name,
               tel: "+" + number,
               email: "",
               text: "",
               user_id: "-4028367194",
            }),
         })
            .finally(() => {
               setName("");
               setNumber("");
            })
            .catch((e) => {
               console.error(e.message);
            });
      } catch (error) {
         console.error(error.message);
      }
   }

   return (
      <section className="pt-[50px] md:pt-[90px] pb-[50px] md:pb-[100px]">
         <div className="container mx-auto px-[10px]">
            <h2 className="text-[#0B132A] text-center  font-[500] md:font-[500] text-[54px] max-w-[900px] mx-auto mb-[20px] md:mb-[20px]">
               {localization.dream.title}
            </h2>

            <p className="text-center text-[#4F5665] max-w-[730px] mx-auto  font-[400] text-[24px]  mb-[50px] md:mb-[30px]">
               {localization.dream.subtitle}
            </p>

            <div className="flex items-center justify-center flex-wrap gap-[40px]">
               <div className="relative  w-full  lg:w-[300px]">
                  <label
                     htmlFor="name"
                     className="text-[#AB8A4C] font-inter font-semibold text-xs uppercase mb-[7px] leading-[1.66667] tracking-[0.96px]">
                     {localization.dream.name}
                  </label>
                  <input
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     type="text"
                     id="name"
                     placeholder={localization.dream.enter_your}
                     className="border border-[rgb(85,178,91)] bg-white rounded-[15px] p-5 w-full focus:outline-none text-[14px] focus:border-green-500"
                  />
               </div>
               <div className="relative   w-full lg:w-auto">
                  <label
                     htmlFor="phone"
                     className="text-[#AB8A4C] font-inter font-semibold text-xs uppercase mb-[7px] leading-[1.66667] tracking-[0.96px]">
                     {localization.dream.number}
                  </label>
                  <>
                     <PhoneInput
                        containerClass="flex items-center  border border-[#AB8A4C] bg-white rounded-[15px] h-[64px] w-full focus-within:border-green-500"
                        inputClass=" w-full focus:outline-none border-0 w-full"
                        buttonStyle={{ display: "none" }}
                        inputStyle={{
                           paddingLeft: "20px",
                           height: "100%",
                           border: "none",
                           backgroundColor: "transparent",
                        }}
                        country={"uz"}
                        value={number}
                        onChange={(e) => setNumber(e)}
                        placeholder={"enter the number"}
                     />
                  </>
               </div>
               <button
                  disabled={!name || !number}
                  onClick={() => {
                     if (name && number) {
                        SubmitForm();
                     }
                  }}
                  type="button"
                  className="disabled:opacity-[0.6] mt-[15px] h-[46px] w-[204px] border border-[#AB8A4C] bg-[#AB8A4C] text-white rounded-[16px] px-13 py-3  font-inter font-semibold text-base tracking-wide uppercase transition duration-300 hover:bg-white hover:text-[#AB8A4C] focus:outline-none">
                  {localization.dream.send}
               </button>
            </div>
            <p className="mt-[30px] text-center text-[#727271] font-inter font-[500] text-[14px] leading-[1.66667] tracking-[0.96px]">
               {localization.dream.subtitle2}
            </p>
         </div>
      </section>
   );
}
