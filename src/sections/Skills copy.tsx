import { ContentCard } from "@/components/cards/ContentCard";
import { SkillCard } from "@/components/cards/SkillCard";

export function Skills() {
  return (
    <section className="flex items-start justify-between gap-[120px] mt-24 h-120" id="home">
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
        <div className="flex justify-items-start mt-12 gap-8">
          <SkillCard 
            icon="/skillCardIcons/html.svg"
            description="Семантическая верстка и кроссбраузерная совместимость"
          />
          <SkillCard 
            icon="/skillCardIcons/css.svg"
            description="Адаптивный дизайн, Flexbox, Grid, современная методология БЭМ"
          />
          <SkillCard 
            icon="/skillCardIcons/javascript.svg"
            description="Глубокое понимание ES6+, асинхронного программирования (Promise, async/await), работы с DOM и API"
          />
          <SkillCard 
            icon="/skillCardIcons/react.svg"
            description="Разработка компонентного UI, использование хуков (Hooks), управление состоянием (Context API, Redux Toolkit)"
          />
          <SkillCard 
            icon="/skillCardIcons/typescript.svg"
            description="Статическая типизация для масштабируемых и надежных приложений, работа с дженериками"
          />
          <SkillCard 
            icon="/skillCardIcons/typescript.svg"
            description="Статическая типизация для масштабируемых и надежных приложений, работа с дженериками"
          />
        </div>
      </ContentCard>
    </section>
  )
}
