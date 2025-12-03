import React, { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface MacbookSwiperProps {
  images: string[];
}

const MacbookSwiper: React.FC<MacbookSwiperProps> = React.memo(({ images }) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  const goToPrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }, []);

  const renderSlide = useCallback((image: string, index: number) => (
    <SwiperSlide key={`slide-${index}`}>
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src={image} 
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
          draggable="false"
        />
      </div>
    </SwiperSlide>
  ), []);

  const handleSlideChange = useCallback((swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-5 select-none relative">
      {/* Стрелки за MacBook */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 z-0 
                   w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 
                   backdrop-blur-sm border border-white/10 
                   flex items-center justify-center 
                   hover:bg-white/10 transition-all duration-300
                   group shadow-xl shadow-black/30"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white/80 group-hover:text-white transition-colors" 
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 z-0 
                   w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 
                   backdrop-blur-sm border border-white/10 
                   flex items-center justify-center 
                   hover:bg-white/10 transition-all duration-300
                   group shadow-xl shadow-black/30"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white/80 group-hover:text-white transition-colors" 
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* MacBook */}
      <div className="flex flex-col items-center relative w-[1200px] z-10">
        <div className="relative w-[1000px] h-[680px] bg-black rounded-t-3xl rounded-b-none 
               border-[3px] border-black overflow-hidden 
               shadow-2xl shadow-black/50 z-10">
  
          {/* Черная рамка экрана */}
          <div className="absolute inset-0 border-[12px] border-black rounded-t-3xl rounded-b-none z-10 pointer-events-none" />
          
          {/* Камера с черной рамкой как в примере */}
          <div className="bg-black w-16 h-4 absolute top-2 left-1/2 -translate-x-1/2 z-20 
                         flex items-center justify-center rounded-b-md">
            <div className="w-8 h-2 bg-gray-900 rounded-full flex items-center justify-center relative">
              <div className="w-2 h-2 rounded-full bg-gray-700" />
            </div>
          </div>
          
          {/* Контентная область с отступом от рамки */}
          <div className="absolute inset-[12px] bg-black rounded-t-2xl rounded-b-none overflow-hidden">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={1}
              loop={true}
              speed={500}
              onSlideChange={handleSlideChange}
              className="w-full h-full"
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              {images.map(renderSlide)}
            </Swiper>
          </div>
        </div>
        
        {/* Корпус MacBook */}
        <div className="relative w-full h-5 bg-gradient-to-r from-gray-400 via-white via-5% 
                       via-gray-400 via-30% via-gray-400 via-70% via-white via-95% to-gray-400 
                       rounded-b-lg shadow-lg shadow-black/30">
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-3 
               bg-gradient-to-l from-gray-800 via-gray-500 to-gray-800 
               rounded-b-md shadow-inner shadow-black/30" />
        </div>

        {/* Индикаторы слайдов */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {images.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => swiperRef.current?.swiper.slideTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-white w-6' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

MacbookSwiper.displayName = 'MacbookSwiper';

export default MacbookSwiper;