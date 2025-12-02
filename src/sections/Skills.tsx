import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ContentCard } from "@/components/cards/ContentCard";
import { SkillCard } from "@/components/cards/SkillCard";
import { useState } from 'react';
import { CustomPagination } from '@/components/ui/Pagination/CustomPagination';

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

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
      icon: "/skillCardIcons/tailwindcss.svg",
      description: "Быстрая верстка с использованием утилитарного подхода, кастомизация конфигурации",
    },
    {
      icon: "/skillCardIcons/vite.svg",
      description: "Использую для создания быстрых и оптимизированных проектов с молниеносным HMR",
    },
    {
      icon: "/skillCardIcons/nodejs.svg",
      description: "Создание серверной логики, REST API, работа с базами данных и внешними сервисами",
    },
    {
      icon: "/skillCardIcons/git.svg",
      description: "Ветвление, пулл-реквесты, знание популярных практик Git Flow для командной работы",
    },
    {
      icon: "/skillCardIcons/figma.svg",
      description: "Работа с макетами, извлечение ресурсов и взаимодействие с дизайнерами на этапе разработки",
    },
  ];

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handlePaginationClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index)
    }
  };

  return (
    <section className="mt-24 flex flex-col items-center" id="skills">
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
          <div className="mt-12 mb-12 w-full overflow-hidden">
            <Swiper 
              onSwiper={setSwiperInstance}
              spaceBetween={30}
              slidesPerView={3}
              onSlideChange={handleSlideChange}
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

          <CustomPagination
            totalSlides={6}
            activeIndex={activeIndex}
            onDotClick={handlePaginationClick}
            activeIcon='/pagination/pagination_active.svg'
            inactiveIcon='/pagination/pagination.svg'
          />
        </ContentCard>
      </div>
    </section>
  );
}