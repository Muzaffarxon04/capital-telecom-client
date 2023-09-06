import Image from "next/image"
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const image = {
  img1: "/user.png",
  img2: "/user.png",
  img3: "/user.png",
  img4: "/user.png",
}

const data = {
  ru: [{
    img: image.img1,
    name: "Анварбек Аскаржонов",
    bio: "Лондонского университета Брунеля",
    text: "Честно говоря, система обучения полна сюрпризов и захватывающих возможностей. У нас есть курсовые работы, которые мы регулярно отправляем во ведущие компании для выполнения. Встречи с представителями компаний разных отраслей уже стали нормой, и я нахожу это невероятно полезным и ценным опытом для себя. Такой подход вносит новизну и привносит много интересного в мою жизнь",
  },
    {
      img: image.img2,
      name: "Асал Хаитова",
      bio: "Лондонский университет Брунеля",
      text: "Всегда хотела быть самостоятельным, не боялась ответственности. Решила изменить жизнь и осуществить мечту. Видение – шотландская готика и викторианский стиль, культурные достопримечательности и необычная архитектура. В Шотландии всё нравится, учеба и студенческая жизнь.",
    },
    {
      img: image.img3,
      name: "Насриддин Ортикходжаев",
      bio: "Университет Хартфордшира.",
      text: "Мой выбор Университета Хартфордшира, заключается в том, что университет имеет прочные прямые партнерские отношения с престижными международными компаниями в каждой отрасли. Поступив в этот университет, я получил рабочую визу на 2 года.Это позволяет мне совмещать учебу и работу для самообеспечения.",
    },
    {
      img: image.img4,
      name: "Нурбек Туробов",
      bio: "Сити, Лондонский университет.",
      text: "Благодаря поддержке COMPERA я поступил в ГАРВАРДСКИЙ УНИВЕРСИТЕТ. Также был приглашен в престижные университеты Великобритании, включая Университет Глазго, Ноттингемский университет, Университет Королевы Марии и Городской университет Лондона. Однако я выбрал гибридную магистерскую программу в HARVARD University, совмещая ее с обучением в CITY UNIVERSITY OF LONDON.",
    }],
  uz: [{
    img: image.img1,
    name: "Anvarbek Asqarjonov",
    bio: "Brunel universiteti, London",
    text: "Rostini aytsam, o'quv tizimi kutilmagan hodisalar va qiziqarli imkoniyatlarga to'la. Bizda doimiy ravishda yetakchi kompaniyalarga yakunlash uchun topshiriladigan kurs ishlari bor. Turli sohalardagi kompaniyalar vakillari bilan uchrashish allaqachon odatiy holga aylangan va bu men uchun juda foydali va qimmatli tajriba deb bilaman. Bu yondashuv yangilik olib keladi va hayotimga juda ko'p qiziqarli narsalarni olib keladi.",
  },
    {
      img: image.img2,
      name: "Asal Xaitova",
      bio: "Brunel universiteti, London",
      text: "Men har doim mustaqil bo'lishni xohlardim, mas'uliyatdan qo'rqmasdim. Men hayotimni o'zgartirishga va orzuimni amalga oshirishga qaror qildim. Vizyon - Shotlandiya gotikasi va Viktoriya uslubi, madaniy diqqatga sazovor joylar va noodatiy arxitektura. Menga Shotlandiyadagi hamma narsa, o‘qish va talabalik hayoti yoqadi.",
    },
    {
      img: image.img3,
      name: "Nasriddin Ortiqxo'jaev",
      bio: "Xertfordshir universiteti",
      text: "Xertfordshir universitetini tanlaganim shundaki, universitet har bir sohada nufuzli xalqaro kompaniyalar bilan kuchli bevosita hamkorlik qiladi.Ushbu universitetga o'qishga kirib, 2 yillik ish vizasi oldim. Bu menga o'qish va ishlashni o'z-o'zini ta'minlash uchun birlashtirishga imkon beradi.",
    },
    {
      img: image.img4,
      name: "Nurbek Turobov",
      bio: "Shahar, London universiteti.",
      text: "COMPERA ko'magi tufayli men GARVARD UNIVERSITETIga o'qishga kirdim. Shuningdek, u Buyuk Britaniyaning nufuzli universitetlariga, jumladan Glazgo universiteti, Nottingem universiteti, Qirolicha Meri universiteti va London shahar universitetiga taklif qilingan. Biroq, men GARVARD universitetida gibrid magistratura dasturini tanladim va uni LONDON SHAHAR UNIVERSITETida o'qish bilan birlashtirdim.",
    }],
  en: [{
    img: image.img1,
    name: "Anvarbek Askarjonov",
    bio: "Brunel University London",
    text: "To be honest, the learning system is full of surprises and exciting possibilities. We have term papers that we regularly submit to leading companies for completion. Meeting with representatives of companies from different industries has already become the norm, and I find this an incredibly rewarding and valuable experience for me. This approach brings novelty and brings a lot of interesting things into my life.",
  },
    {
      img: image.img2,
      name: "Asal Khaitova",
      bio: "Brunel University London",
      text: "I always wanted to be independent, I was not afraid of responsibility. I decided to change my life and make my dream come true. Vision - Scottish Gothic and Victorian style, cultural attractions and unusual architecture. I like everything in Scotland, studying and student life.",
    },
    {
      img: image.img3,
      name: "Nasriddin Ortikhodzhaev",
      bio: "University of Hertfordshire",
      text: "My choice of the University of Hertfordshire is that the university has strong direct partnerships with prestigious international companies in every industry.Having entered this university, I received a work visa for 2 years. This allows me to combine study and work for self-sufficiency.",
    },
    {
      img: image.img4,
      name: "Nurbek Turobov",
      bio: "City, University of London.",
      text: "Thanks to the support of COMPERA, I got into HARVARD UNIVERSITY. He has also been invited to prestigious UK universities including the University of Glasgow, the University of Nottingham, Queen Mary University and the City University of London. However, I chose a hybrid master's program at HARVARD University, combining it with studying at CITY UNIVERSITY OF LONDON.",
    }]
  
}

const renderCustomPrevButton = () => (
  <button className="custom-prev-button">
    <FaArrowLeft />
  </button>
);

const renderCustomNextButton = () => (
  <button className="custom-next-button">
    <FaArrowRight />
  </button>
);

export default function OurClients({ type }) {

  const { lang } = useSelector((state) => state.localiztion);

  const { localization } = Content[lang];
  

  return (
    <section className={` pt-[29px]  ${type ? "pb-[26px]" : "pb-[49px]"}`}>
      <div className="container mx-auto px-[20px] md:px-auto ">
        {!type ? <h2 className="text-[#727271] font-inter font-semibold text-5xl leading-[1] tracking-[0em] text-center">
          <span style={{ color: '#727271' }}></span><span style={{ color: '#55B25B' }}>{localization.partners.our} <span style={{ color: '#727271' }}>{localization.clients.title}</span></span>
        </h2> : null}
        <Swiper
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          loop={true}
          className={`flex justify-center -[red] w-full  gap-[50px] ${type ? "mt-[50px]  h-[330px] max-w-[1050px]" : "my-[50px] max-w-[1000px]"}`}
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            prevEl: '.custom-prev-button',
            nextEl: '.custom-next-button',
            renderPrevButton: renderCustomPrevButton,
            renderNextButton: renderCustomNextButton,
          }}

        >


          {data && data[lang || "uz"].map((item, index) => (
            <SwiperSlide key={index} className="bg-red h-full">
              <CardItem key={index} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center">
          <button className="custom-prev-button mr-4">
            <FaArrowLeft color="#55B25B" size={18} />
          </button>
          <button className="custom-next-button">
            <FaArrowRight color="#55B25B" size={18} />
          </button>
        </div>
      </div>
  
        

    </section>
  )
}


function CardItem({data}) {
  return (<div className="border-[0.5px] border-solid border-[rgba(85, 178, 91, 0.30)] bg-white rounded-[15px] w-full min-h-[440px]  md:w-[305px] p-[25px]">
    <div className="flex items-center">
      <div className="rounded-full w-[60px] h-[60px] overflow-hidden">
        <Image src={data.img} alt="user" width={60} height={60}/>
      </div>
      <div className="max-w-[170px] w-full ml-[20px] ">
        <h3 className="text-[#55B25B] font-inter font-bold text-base leading-[1.75]">{data.name}</h3>
        <p className="text-[#B3B3B3] font-inter font-normal text-sm leading-[1.857]">{data.bio}</p>
      </div>
   </div>
    <p className="text-[#727271] my-[25px] font-inter italic text-xs font-normal leading-[1.769]">{data.text}</p>
  </div>)
}