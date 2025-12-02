import { AboutMeCard } from "@/components/cards/AboutMeCard";
import { ProfileCard } from "@/components/cards/ProfileCard";

export function Hero() {
  return (
    <section className="flex items-start justify-between mt-25 h-120" id="home">
      <ProfileCard />

      <AboutMeCard 
        fullWidth={false}
        title={
          <>
            <span className="text-[#F0F4F8]">Обо</span>
            <span className="text-[#D4E86D]"> мне</span>
          </>
        }
        description="Я занимаюсь веб-разработкой, используя современные технологии. Мне нравится разрабатывать решения для сложных задач, делая это максимально эффективно" 
      />
    </section>
  );
}
