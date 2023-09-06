import { FaArrowRight, FaPlus, FaRemoveFormat } from "react-icons/fa"
import { useState } from "react";
import { changeLanguage } from '@/slices/localizationReducer';
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";


export default function Faq() {
    const dispatch = useDispatch();

    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];



    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };


    const faqData = {
        uz: [
            {
                question: 'COMPERA qanday xizmatlarni taqdim etadi?', answer: [
                    `COMPERA xorijda o'qish sohasida professional maslahatlarni taklif etadi. Biz sizga eng mos o'quv dasturi va universitetni tanlashda yordam beramiz, shuningdek, kirish va viza olish uchun zarur hujjatlarni tayyorlashda yordam beramiz. Shuningdek, biz jo'nashdan oldin ma'lumot va yordam beramiz.
                    Talabani qabul qilishdan to ketishgacha bo'lgan barcha jarayon bizning jamoamiz tomonidan amalga oshiriladi. Xizmatlarimiz haqida batafsil ma'lumotni veb-saytimizning "Xizmatlar" sahifasida topishingiz mumkin.`
                ]
            },
            {
                question: 'Compera xizmatlarining narxi qancha?', answer: [
                    "To‘liq qo‘llab-quvvatlash paketining narxi 5 100 000 so‘m. To'lov shartnoma asosida siz uchun qulay usulda amalga oshirilishi mumkin."]
            }, {
                question: 'Turar joy va ovqatlanish qancha turadi?', answer: [
                    "Yashash va ovqatlanish narxi siz o'qishni rejalashtirgan mamlakatdagi turmush darajasiga bog'liq. Misol uchun, Buyuk Britaniyaning poytaxti Londonda turar joy, ovqatlanish va boshqa kunlik xarajatlarning o'rtacha narxi oyiga 1000 funt sterling atrofida. Buyuk Britaniyaning boshqa shaharlarida bu xarajatlar oyiga taxminan 700 funtni tashkil qiladi."
                ]
            }, {
                question: 'Ota-onam men bilan sayohat qila oladimi?', answer: [
                    "Ha, ota-onangiz sizga hamroh bo'lishi mumkin, ammo buning talablari mamlakatdan mamlakatga farq qiladi. Misol uchun, ba'zi mamlakatlarda, masalan, Singapurda, bir oygacha bo'lgan qisqa muddatlarda viza talab qilinmaydi. Boshqa mamlakatlarda, masalan, Buyuk Britaniyada, ota-onangiz turistik viza olishlari kerak."
                ]
            }, {
                question: 'O‘qish uchun to‘lovni bo‘lib-bo‘lib to‘lashim mumkinmi?', answer: [
                    "Ha, barcha universitetlarimiz o'qish to'lovini ikkiga bo'lish va har semestr boshida to'lash imkoniyatini taklif qilishadi. Biroq, Gollandiya universitetlari yil uchun to'liq to'lovni oldindan talab qiladi."
                ]
            }, {
                question: 'Yiliga necha marta murojaat qilishim mumkin?', answer: [
                    "Universitetlar odatda yiliga ikki marta ariza qabul qiladi: kuzgi semestr va bahor/qish semestrlari uchun. Buyuk Britaniyada o'quv dasturlari yiliga uch marta: sentyabr, yanvar va may oylarida boshlanadi."
                ]
            }
        ],
        ru: [
            {
                question: 'Какие услуги предоставляет COMPERA?', answer: [
                    `COMPERA предлагает профессиональные консультации в сфере обучения за границей. Мы помогаем выбрать наиболее подходящую программу обучения и университет, а также оказываем поддержку в подготовке необходимых документов для поступления и получения визы. Мы также предоставляем информацию и помощь перед отъездом. Весь процесс от поступления до отъезда студента сопровождается нашей командой. Более подробную информацию о наших услугах можно найти на странице "Услуги" на нашем сайте.`
                ]
            },
            {
                question: 'Какова стоимость услуг Compera?', answer: [
                    "Стоимость пакета полного сопровождения составляет 5 100 000 сум. Оплату можно произвести удобным для вас способом на основании заключаемого договора."]
            }, {
                question: 'Каковы расходы на проживание и питание ? ', answer: [
                    "Стоимость проживания и питания зависит от уровня жизни в стране, где вы планируете учиться. Например, в Лондоне, столице Великобритании, средние затраты на проживание, питание и другие ежедневные расходы составляют около 1000 фунтов стерлингов в месяц. В других городах Великобритании эти расходы составляют примерно 700 фунтов в месяц."
                ]
            }, {
                question: 'Могут ли мои родители путешествовать со мной?', answer: [
                    "Да, ваши родители могут сопровождать вас, однако требования к этому различаются в разных странах. Например, в некоторых странах, таких как Сингапур, виза не требуется для краткосрочного пребывания до одного месяца. В других странах, например в Великобритании, ваши родители должны получить туристическую визу."
                ]
            }, {
                question: 'Могу ли я оплатить обучение частями?', answer: [
                    "Да, все наши университеты предлагают возможность разбить оплату за обучение на две части и вносить их в начале каждого семестра. Однако голландские университеты требуют полной оплаты за год вперед."
                ]
            }, {
                question: 'Сколько раз в год я могу подать заявление?', answer: [
                    "Обычно университеты принимают заявления два раза в год: на осенний семестр и на весенний/зимний семестр. В Великобритании учебные программы начинаются три раза в год: в сентябре, январе и мае."
                ]
            }
        ],
        en: [
            {
                question: 'What services does COMPERA provide?', answer: [
                    `COMPERA offers professional advice in the field of study abroad. We help you choose the most suitable study program and university, as well as provide support in preparing the necessary documents for admission and obtaining a visa. We also provide information and assistance before departure. The entire process from admission to departure of the student is accompanied by our team. More information about our services can be found on the "Services" page of our website.`
                ]
            },
            {
                question: 'What is the cost of Compera services?', answer: [
                    "The cost of the full support package is 5,100,000 soums. Payment can be made in a convenient way for you on the basis of the contract."]
            }, {
                question: 'What are the costs for accommodation and meals?', answer: [
                    "The cost of living and meals depends on the standard of living in the country where you plan to study. For example, in London, the capital of the UK, the average cost for accommodation, meals and other daily expenses is around £1,000 per month. In other cities in the UK, these costs amount to about 700 pounds per month."
                ]
            }, {
                question: 'Can my parents travel with me?', answer: [
                    "Yes, your parents can accompany you, however the requirements for this vary from country to country. For example, in some countries, such as Singapore, a visa is not required for short stays of up to one month. In other countries, such as the UK, your parents must obtain a tourist visa."
                ]
            }, {
                question: 'Can I pay for tuition in instalments?', answer: [
                    "Yes, all of our universities offer the option to split the tuition fee into two installments and pay them at the beginning of each semester. However, Dutch universities require full payment for the year in advance."
                ]
            }, {
                question: 'How many times a year can I apply?', answer: [
                    "Universities usually accept applications twice a year: for the fall semester and for the spring/winter semester. In the UK, study programs start three times a year: in September, January and May."
                ]
            
            },
           
        ],
      }

  return (
      <section className="text-white pt-35 pb-[50px]  md:py-100">
          <div className="container mx-auto px-[10px] xl:px-[100px] md:px-0 flex flex-wrap  justify-between">
              <div className="lg:w-[425px]">
                  <h1 className="font-inter text-white text-4xl font-bold leading-[1.1] mb-[30px]"> {localization.faq.title}</h1>
                  {/* <button className="flex items-center px-[25px] py-[9px] rounded-lg border border-green-500 bg-white text-green-500 font-inter text-base font-semibold leading-5 text-center">
                      {localization.learn_more}<span className="ml-2"><FaArrowRight /></span>
                  </button> */}
              </div>
          
              
    
             
                      <div className="mt-[30px] lg:mt-0 lg:max-w-[500px] ">
                          {faqData[lang || "uz"].map((faq, index) => (
                              <div
                                  key={index}
                                  className={`mb-[15px] py-[21px] pl-[40px] pr-[12px] text-[#fff] hover:text-[#55B25B]  rounded-lg shadow-md cursor-pointer transition duration-300 bg-[#55B25B80] bg-opacity-80 backdrop-blur-[12.5px] hover:bg-[#ffffff]`}
                                  onClick={() => toggleAnswer(index)}
                              >
                                  <div className="flex justify-between">
                                      <h3 className="max-w-[90%] text-xl font-semibold mb-2">{faq.question}</h3>
                                      {activeIndex === index ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round" />
                                      </svg> : <FaPlus size={20} />}
                                    

                                      
                                </div>
                                  <ol className="list-disc pl-[20px]">
                                      {activeIndex === index && (faq.answer.map(item => (
                                          <>
                                              <li className={`${index == 0 ? " mt-[30px]" : ""} pr-[40px]`}>{item}</li>
                                          </>
                                          
                                      ))
                                      )}
                                 </ol>
                              </div>
                          ))}
                      </div>
               

          </div>

      </section>
  )
}
