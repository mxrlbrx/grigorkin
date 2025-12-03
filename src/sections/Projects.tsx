import { ContentCard } from "@/components/cards/ContentCard";
import { useState } from 'react';
import MacbookSwiper from '@/components/ui/MacbookSwiper/MacbookSwiper';

export function Projects() {
  const images = [
    '/images/photo1.png',
    '/images/photo2.png',
    '/images/photo3.png',
    '/images/photo4.png',
    '/images/photo5.png',
    '/images/photo6.png',
    '/images/photo7.png',
    '/images/photo8.png',
  ];

  return (
    <section className="mt-24 flex flex-col items-center" id="projects">
      <div className="flex justify-center">
        <ContentCard 
          fullWidth={false}
          fullHeight={true}
          title={
            <>
              <span className="text-[#F0F4F8]">Мои</span>
              <span className="text-[#D4E86D]"> проекты</span>
            </>
          }  
          description=""   
        >
        
        <div className="App">
          <MacbookSwiper images={images} />
        </div>
        </ContentCard>
      </div>
    </section>
  );
}