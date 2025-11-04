import { PrimaryButton } from "./PrimaryButton";
import { FixedBlur } from "./FixedBlur";


export function Hero() {
  return (
  <section className="flex flex-col items-center mt-24" id="home">
    <img 
      src="/myPhoto2.png" 
      alt="My photo" 
      className="mb-8"
    />
    <p className="mb-8 font-bold text-[2.25rem]">
      Григоркин Кирилл
    </p>
    <p className="mb-16 text-xl">
      Я занимаюсь веб-разработкой, используя современные технологии 
    </p>
    <PrimaryButton>
      Узнать подробнее
    </PrimaryButton>
    {/* <FixedBlur /> */}
  </section>
  )
}
