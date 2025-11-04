import { NavLink } from './NavLink';

export function Header({image}) {
  return (
  <nav className="flex justify-between items-center absolute top-[18px] left-[120px] right-[120px]">
    <img 
    src={image}
    alt="GRIGORKIN" />

    <ul className="flex items-center gap-8">
      <NavLink>
        Обо мне
      </NavLink>
      <NavLink>
        Мой опыт
      </NavLink>
      <NavLink>
        Мои проекты
      </NavLink>
      <NavLink>
        Контакты
      </NavLink>
    </ul>
  </nav>
  )
}

