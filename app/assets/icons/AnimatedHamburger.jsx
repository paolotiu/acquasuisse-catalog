export default function AnimatedHamburger({ className, active, onClick }) {
  return (
    <div className={`w-[20px] relative transition duration-500 ease-in-out cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span className={
        "h-1/10 bg-white rounded-full absolute transition-all duration-250 ease-in-out"
        + (active ? " top-2/5 w-0 left-1/2" : " w-[20px] top-0 left-0")
      }></span>
      <span className={
        "w-[20px] h-1/10 bg-white rounded-full absolute left-0 top-2/5 transition-all duration-250 ease-in-out"
        + (active ? " rotate-45" : "")
      }></span>
      <span className={
        "w-[20px] h-1/10 bg-white rounded-full absolute left-0 top-2/5 transition-all duration-250 ease-in-out"
        + (active ? " -rotate-45" : "")
      }></span>
      <span className={
        "h-1/10 bg-white rounded-full absolute transition-all duration-250 ease-in-out"
        + (active ? " top-2/5 w-0 left-1/2" : " w-[20px] top-4/5 left-0")
      }></span>
    </div>
  );
}
