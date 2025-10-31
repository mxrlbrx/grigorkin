export function FixedBlur() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 to-transparent backdrop-blur-xl z-40">
      {/* Эллипс внизу */}
      <div className="absolute -top-50 left-1/2 transform -translate-x-1/2 w-[1920px] h-[1920px] bg-white/5 rounded-full blur-2xl"></div>
      
    </div>
  );
}