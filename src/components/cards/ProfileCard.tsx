export function ProfileCard() {
  return (
  <div className="[w-21.875rem] h-[30rem] p-12 bg-[#060606] border border-[#F0F4F8] rounded-lg shadow-lg">
    <div className="mb-6">
      <img 
        src="/MyPhoto.png" 
        alt="My Photo" 
      />
    </div>

    <h1 className="!text-2xl !font-bold !mb-4">
      Григоркин Кирилл
    </h1>

    <p className="text-xl font-light">
      Frontend-разработчик
    </p>
  </div>)
}
