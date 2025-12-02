interface CustomPaginationProps {
  totalSlides: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
  activeIcon: string;
  inactiveIcon: string;
  className?: string;
}

export function CustomPagination({
  totalSlides,
  activeIndex,
  onDotClick,
  activeIcon,
  inactiveIcon,
  className = ''
}: CustomPaginationProps) {
  return (
    <div>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`
            w-4 h-4
            bg-center bg-no-repeat
            transition-all duration-300 hover:scale-125
            ${index === activeIndex 
              ? 'bg-[url(/public/ui/pagination_active.svg)]' 
              : 'bg-[url(/public/ui/pagination.svg)]'
            }
          `}
          aria-label={`${index + 1}`}
        >
        </button>
      ))}
    </div>
  );
}
