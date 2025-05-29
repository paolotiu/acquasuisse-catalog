export default function DesktopCategories() {
  return (
    <nav className="bg-gray-300  text-white text-xs sm:text-sm md:text-base font-light tracking-widest uppercase hidden sm:grid sm:grid grid-cols-3">
      <a
        href="#"
        className="flex items-end justify-center h-40 md:h-90 lg:h-180 hover:underline" //relative
      >
        {/* image sample below */}
        {/* <span className="absolute inset-0 bg-[url('https://placehold.co/600x400?bg=cccccc&fg=555555')] bg-cover bg-center filter"></span> */}
        <span
          className="pb-4" //relative
        >
          FOR UNISEX
        </span>
      </a>
      <a
        href="#"
        className=" flex items-end justify-center h-40 md:h-90 lg:h-180 hover:underline"
      >
        {/* insert image */}
        <span className="pb-4">WOMEN'S</span>
      </a>
      <a
        href="#"
        className="flex items-end justify-center h-40 md:h-90 lg:h-180 hover:underline"
      >
        {/* insert image */}
        <span className="pb-4">MEN'S</span>
      </a>
    </nav>
  );
}
