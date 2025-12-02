import { NavLink } from "@/components/ui/NavLink/NavLink";
import { useEffect, useState, type PropsWithChildren } from "react";

interface HeaderProps extends PropsWithChildren {
  image: string
}

export function Header({image, children}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`flex justify-between items-center px-[120px] bg-[#060606] py-[18px] fixed top-0 left-0 right-0 bg-background z-50 
      ${isScrolled ? 'opacity-90' : 'opacity-100'}`}
    >
      <img src={image} alt="GRIGORKIN" />
      
      <ul className="flex items-center gap-8">
        <NavLink href="#home">
          Главная
        </NavLink>
        <NavLink href="#skills">
          Навыки
        </NavLink>
        <NavLink href="#projects">
          Проекты
        </NavLink>
        <NavLink href="#contacts">
          Контакты
        </NavLink>
      </ul>
      {children}
    </nav>
  )
}