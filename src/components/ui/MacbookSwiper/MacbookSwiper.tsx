import React, { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface MacbookSwiperProps {
  images: string[];
}

const MacbookSwiper: React.FC<MacbookSwiperProps> = React.memo(({ images }) => {
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

  return (
    <div className="min-h-screen flex items-center justify-center p-5 select-none"> {/* bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 */}
      <div className="flex flex-col items-center relative w-[1200px]">
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
              slidesPerView={1}
              loop={true}
              className="w-full h-full"
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
                stopOnLastSlide: true,
                reverseDirection: false,
                waitForTransition: true,
              }}
              speed={0} // Устанавливаем скорость 0
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
      </div>
    </div>
  );
});

MacbookSwiper.displayName = 'MacbookSwiper';

export default MacbookSwiper;