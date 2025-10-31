export function NavLink({ href, children}) {
  return (
    <a href={href}
      className="text-[#F0F4F8] hover:text-[#F8F4E6] transition-colors text-xl"
    >
      {children}
    </a>
  )
}
