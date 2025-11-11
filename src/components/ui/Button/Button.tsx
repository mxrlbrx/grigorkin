import { PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return (
  <button
    className="">
      {children}
  </button>
  )
}
