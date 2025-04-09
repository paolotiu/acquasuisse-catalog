import { Outlet } from "react-router";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon"
import SearchIcon from "../assets/icons/SearchIcon"
import logo from "/logo.png"

export default function Navbar() {
  return (
    <>
      <nav className="bg-primary">
        <div className="flex justify-between items-center px-12.5 h-[64px]">
          <img src={logo} alt="Acquasuisse Logo" className="h-6 mt-1" />
          <SearchIcon className="stroke-white fill-none h-4" />
        </div>
        <div className="absolute top-0 w-full flex flex-row justify-center gap-9.5">
          <div className="p-2.5 w-fit flex flex-row gap-[5px] items-center group ">
            <span className="text-white uppercase font-body group-hover:underline underline-offset-6 p-2.5">Discover</span>
            <ArrowRightIcon className="fill-white rotate-90 group-hover:-rotate-90 h-3 transition-transform" />
          </div>
          <div className="p-2.5 w-fit flex flex-row gap-[5px] items-center group">
            <span className="text-white uppercase font-body group-hover:underline underline-offset-6 p-2.5">Collections</span>
            <ArrowRightIcon className="fill-white rotate-90 group-hover:-rotate-90 h-3 transition-transform" />
          </div>
          <div className="p-2.5 w-fit flex flex-row gap-[5px] items-center group">
            <span className="text-white uppercase font-body group-hover:underline underline-offset-6 p-2.5">About</span>
            <ArrowRightIcon className="fill-white rotate-90 group-hover:-rotate-90 h-3 transition-transform" />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}