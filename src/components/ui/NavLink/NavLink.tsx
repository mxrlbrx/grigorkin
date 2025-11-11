import { PropsWithChildren } from "react";

interface NavLinkProps extends PropsWithChildren { 
  href: string
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <li className="list-none">
      <a 
        href={href}
        onClick={onClick}
        className="text-[#F0F4F8] hover:text-[#F8F4E6] transition-colors text-xl"
      >
        {children}
      </a>
    </li>
  );
}