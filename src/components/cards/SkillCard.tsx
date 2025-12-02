import type { PropsWithChildren } from "react"

interface SkillCardProps extends PropsWithChildren {
  icon: string;
  description: string;
}

export function SkillCard({ icon, description }: SkillCardProps) {
  return (
    <div className="w-[18.125rem] h-[20.625rem] flex flex-col justify-between border border-[#F0F4F8] rounded-lg p-8">
      <div className="w-12 h-12">
        <img 
          src={icon} 
          alt="Card Icon" 
        />
      </div>

      <div className="mt-4">
        <p className="text-xl font-medium text-left">
          {description}
        </p>
      </div>
      
    </div>
  )
}
