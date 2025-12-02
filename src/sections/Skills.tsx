import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ContentCard } from "@/components/cards/ContentCard";
import { SkillCard } from "@/components/cards/SkillCard";

export function Skills() {
  const skills = [
    {
      icon: "/skillCardIcons/html.svg",
      description: "Семантическая верстка и кроссбраузерная совместимость",
    },
    {
      icon: "/skillCardIcons/css.svg",
      description: "Адаптивный дизайн, Flexbox, Grid, современная методология БЭМ",
    },
    {
      icon: "/skillCardIcons/javascript.svg",
      description: "Глубокое понимание ES6+, асинхронного программирования (Promise, async/await), работы с DOM и API",
    },
    {
      icon: "/skillCardIcons/react.svg",
      description: "Разработка компонентного UI, использование хуков (Hooks), управление состоянием (Context API, Redux Toolkit)",
    },
    {
      icon: "/skillCardIcons/typescript.svg",
      description: "Статическая типизация для масштабируемых и надежных приложений, работа с дженериками",
    },
    {
      icon: "/skillCardIcons/tailwind.svg", // Используйте другую иконку
      description: "Утилитарный CSS-фреймворк для быстрой стилизации",
    },
  ];

  return (
    <section className="mt-24" id="skills">
      <div className="flex justify-center">
        <ContentCard 
          fullWidth={false}
          fullHeight={true}
          title={
            <>
              <span className="text-[#F0F4F8]">Мой</span>
              <span className="text-[#D4E86D]"> стек</span>
            </>
          }  
          description=""   
        >
          <div className="mt-12 w-full overflow-hidden">
            <Swiper 
              modules={[ Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 32
                },
              }}
            >
              {skills.map((skill, index) => 
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <SkillCard 
                      icon={skill.icon}
                      description={skill.description}
                    />
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </ContentCard>
      </div>
    </section>
  )
}