import type { PropsWithChildren } from "react";

interface ContentCardProps extends PropsWithChildren {
  title?: React.ReactNode;
  icon?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  description: string;
}

export function ContentCard({
  title,
  icon = "/star-solid.svg",
  fullWidth = false,
  fullHeight = false,
  description,
  children
}: ContentCardProps) {
  return (
    <div className={`${fullWidth ? 'w-full' : 'w-[105rem]'} ${fullHeight ? 'min-h-full' : 'min-h-[30rem]'} p-12 bg-[#0E0E0E] border border-[#F0F4F8] rounded-lg flex flex-col justify-between`}>
      
      <div className="flex items-center justify-between w-full">
        <h2 className="!text-5xl font-bold">
          {title}
        </h2>
        
        <img 
          src={icon}
          alt="Звезда" 
          className="w-12 h-12" 
        />
      </div>

      <p className="text-left text-white text-[2rem] leading-relaxed">
        {description}
      </p>
      {children}
    </div>
  )
}