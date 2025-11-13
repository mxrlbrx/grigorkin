import { NavLink } from "@/components/ui/NavLink/NavLink";
import { type PropsWithChildren } from "react";

interface HeaderProps extends PropsWithChildren {
  image: string
}

export function Header({image, children}: HeaderProps) {
  return (
  <nav className="flex justify-between items-center absolute top-[18px] left-[120px] right-[120px]">
    <img 
    src={image}
    alt="GRIGORKIN" 
    />
    
    <ul className="flex items-center gap-8">
      <NavLink href="#about">
        Обо мне
      </NavLink>
      <NavLink href="#experience">
        Мой опыт
      </NavLink>
      <NavLink href="#projects">
        Мои проекты
      </NavLink>
      <NavLink href="#contacts">
        Контакты
      </NavLink>
    </ul>
    {children}
  </nav>
  )
}

