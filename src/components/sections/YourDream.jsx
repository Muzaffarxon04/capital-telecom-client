import { changeLanguage } from '@/slices/localizationReducer';
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


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
       user_id: "-1001914509169",
     })
   }).finally(() => {
     setName("")
     setNumber("")
   }).catch((e) => {
     console.error(e.message);
   })
 } catch (error) {
  console.error(error.message);
 }
}


  return (
    <section  className="pt-[47px] md:pt-[60px] pb-[55px]">
      <div className="container mx-auto px-[10px]">
        <h2 className="text-[#4D4D4D] text-center font-inter font-[800] md:font-extrabold text-[44px] md:text-5xl leading-[1.33333] max-w-[900px] mx-auto mb-[50px] md:mb-[30px]">
          {lang == "uz" && <>
            <span style={{ color: '#727271' }}>C</span><span style={{ color: '#55B25B' }}>O<span style={{ color: '#727271' }}>MPERA</span></span>
          </>
          }
          {localization.dream.title} {lang != "uz" && <>
            <span style={{ color: '#727271' }}>C</span><span style={{ color: '#55B25B' }}>O<span style={{ color: '#727271' }}>MPERA</span></span>
          </>
           }
        </h2>

        <p className='text-center text-[#727271] font-inter font-semibold text-[22px] leading-[1.22727 mb-[50px] md:mb-[30px]'>
          {localization.dream.subtitle}
        </p>


        <div className="flex items-center justify-center flex-wrap gap-[40px]">
          <div className="relative  w-full  lg:w-[300px]">
            <label htmlFor="name" className="text-[#55B25B] font-inter font-semibold text-xs uppercase mb-[7px] leading-[1.66667] tracking-[0.96px]">
              {localization.dream.name}
            </label>
            <input
              value={name}
              onChange={(e)=> setName(e.target.value)}
              type="text"
              id="name"
              placeholder={localization.dream.enter_your}
              className="border border-[rgb(85,178,91)] bg-white rounded-[15px] p-5 w-full focus:outline-none text-[14px] focus:border-green-500"
            />
          </div>
          <div className="relative   w-full lg:w-auto">
            <label htmlFor="phone" className="text-[#55B25B] font-inter font-semibold text-xs uppercase mb-[7px] leading-[1.66667] tracking-[0.96px]">
              {localization.dream.number}
            </label>
            <>
              {/* <div className="text-[#55B25B] pr-2">+998</div> */}
              {/* <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="tel"
                id="phone"
                placeholder="00 000 00 00"
              /> */}

              <PhoneInput
                containerClass="flex items-center  border border-[#55B25B] bg-white rounded-[15px] h-[64px] w-full focus-within:border-green-500"
                inputClass=" w-full focus:outline-none border-0 w-full"
                buttonStyle={{ display: "none", }}
                inputStyle={{paddingLeft:"20px", height:"100%", border:"none", backgroundColor:"transparent"}}
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
              
                SubmitForm()
            
              }
            }
            }
            type="button"
            className="disabled:opacity-[0.6] mt-[15px] h-[46px] w-[204px] border border-[#55B25B] bg-[#55B25B] text-white rounded-[16px] px-13 py-3  font-inter font-semibold text-base tracking-wide uppercase transition duration-300 hover:bg-white hover:text-[#55B25B] focus:outline-none"
          >
            {localization.dream.send}
          </button>
        </div>
        <p className='mt-[30px] text-center text-[#727271] font-inter font-semibold text-[14px] leading-[1.66667] tracking-[0.96px]'>
          {localization.dream.subtitle2}
</p>

      </div>

    </section>
  )
}
