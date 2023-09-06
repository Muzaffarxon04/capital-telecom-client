"use client";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useDispatch, useSelector } from "react-redux";
import Content from "@/Localization/Content";

const ContactPage = () => {
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
            user_id: "-1001914509169",
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
      <section className="contact">
         <div className="container mx-auto mt-[180px] mb-[140px]">
            <div className="border mx-auto xl:w-[1200px] rounded-md bg-white bg-contact-box-send border-solid border-green-500  flex-wrap lg:flex-nowrap  shadow-xl p-[10px] lg:pr-[28px] flex items-start justify-between   ">
               <div className="bg-contact-box lg:w-[491px] min-h-[647px] pb-[36px] p-[40px] rounded-[7px] lg:mr-[17px] flex flex-col justify-between">
                  <div>
                     <h3 className="text-white font-poppins font-semibold text-[28px]">
                        {localization.about.contact}
                     </h3>
                     <p className="text-[#C9C9C9] font-poppins text-[18px] font-normal mt-[6px]">
                        {localization.about.text}
                     </p>
                  </div>
                  <br />
                  <div className="flex flex-col ">
                     <a
                        href="tel:+998 90 928 22 44"
                        className="text-white font-poppins text-16px font-normal mb-[10px]">
                        +998 90 928 22 44
                     </a>
                     <a
                        href="tel:+99890 933 24 20"
                        className="text-white font-poppins text-16px font-normal mb-[50px]">
                        +998 90 933 24 20
                     </a>
                     <a
                        href="mailto:info@compera.uz"
                        className="text-white font-poppins text-16px font-normal  mb-[50px]">
                        info@compera.uz
                     </a>
                     <p className="text-white font-poppins text-16px font-normal  mb-[50px] max-w-[288px]">
                        {localization.header.address}
                     </p>
                  </div>
                  <div className="flex items-center gap-[24px]">
                     <a
                        href="https://www.facebook.com/comperaconsulting"
                        className="w-[30px] h-[30px] inline-flex bg-[#55B25B] hover:bg-[#ffffff] border border-solid border-[#55B25B] rounded-full items-center justify-center text-[#fff] hover:text-[#55B25B]">
                        <FaFacebook size={17} />
                     </a>
                     <a
                        href="https://www.instagram.com/compera_consulting/"
                        className="w-[30px] h-[30px] inline-flex bg-[#55B25B] hover:bg-[#ffffff] border border-solid border-[#55B25B] rounded-full items-center justify-center text-[#fff] hover:text-[#55B25B]">
                        <FaInstagram size={17} />
                     </a>
                     <a
                        href="https://t.me/comperaconsulting"
                        className="w-[30px] h-[30px] inline-flex bg-[#55B25B] hover:bg-[#ffffff] border border-solid border-[#55B25B] rounded-full items-center justify-center text-[#ffffff] hover:text-[#55B25B]">
                        <FaTelegram size={17} />
                     </a>
                  </div>
               </div>
               <div className="flex mx-auto max-lg:pb-[120px]  lg:w-[60%] flex-col items-center justify-center">
                  <div className="border overflow-hidden border-solid border-green-500 h-[400px] lg:h-[258px] lg:max-w-[500px] w-full rounded-[50px] bg-lightgray my-[50px] lg:m-[50px] ">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.6672205437936!2d69.34370701283125!3d41.30151520000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef50a2bf7cb59%3A0x7c1c1ff536036a00!2z0KHQo9Cd0JTQo9Cn0J7QmiDQpNCV0Jg!5e0!3m2!1sru!2s!4v1692599446244!5m2!1sru!2s"
                        loading="lazy"
                        height="100%"
                        width="100%"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <div className="flex items-center justify-center flex-col md:flex-row w-full gap-[30px]">
                     <div className="px-[15px] w-full  md:w-[300px] md:px-0">
                        <label
                           htmlFor="name"
                           className="text-[#55B25B] font-inter font-semibold text-xs uppercase mb-[7px] leading-[1.66667] tracking-[0.96px]">
                           {localization.dream.name}
                        </label>
                        <input
                           onChange={(e) => {
                              setName(e.target.value);
                           }}
                           value={name}
                           type="text"
                           id="name"
                           placeholder={localization.dream.enter_your}
                           className="border border-[#55B25B] bg-white rounded-[15px] p-5 w-full focus:outline-none focus:border-green-500"
                        />
                     </div>
                     <div className="px-[15px] w-full  md:w-[290px] md:px-0">
                        <label
                           htmlFor="phone"
                           className="text-[#55B25B] font-inter font-semibold text-xs uppercase mb-[7px] leading-[1.66667] tracking-[0.96px]">
                           {localization.dream.number}
                        </label>
                        {/* <div className="flex  items-center border border-[#55B25B] bg-white rounded-[15px] p-5 w-full focus-within:border-green-500">
                           <div className="text-[#55B25B] pr-2">+998</div>
                           <input
                              value={number}
                              onChange={(e) => setNumber(e.target.value)}
                              type="tel"
                              id="phone"
                              placeholder="00 000 00 00"
                              className="w-full focus:outline-none"
                           />
                        </div> */}

                        <PhoneInput
                           containerClass=" border border-[#55B25B] bg-white rounded-[15px] h-[64px] w-full focus-within:border-green-500"
                           buttonStyle={{ display: "none" }}
                           inputStyle={{
                              paddingLeft: "20px",
                              height: "100%",
                              width:"300px",
                              border: "none",
                              backgroundColor: "transparent",
                           }}
                           country={"uz"}
                           value={number}
                           onChange={(e) => setNumber(e)}
                           placeholder={"00 000 00 00 "}
                        />
                     </div>
                  </div>
                  <div className="flex justify-center lg:justify-end mt-[50px] w-[100%] pr-[15px]">
                     <button
                        disabled={!name || !number}
                        onClick={() => {
                           if (name && number) {
                              SubmitForm();
                           }
                        }}
                        type="button"
                        className="disabled:opacity-[0.7] h-[46px] w-[204px] border border-[#55B25B] bg-[#55B25B] text-white rounded-lg px-13 py-3  font-inter font-semibold text-base tracking-wide uppercase transition duration-300 hover:bg-white hover:text-[#55B25B] focus:outline-none">
                        {localization.dream.send}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactPage;
