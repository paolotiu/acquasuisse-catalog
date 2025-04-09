import Navbar from "../components/App/Navbar"
import { useState } from "react";
import { Outlet } from "react-router";
import { menu, sitemap } from "../data/menu"
import Footer from "../components/App/Footer";

export default function Main() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <>
      <Navbar menu={menu} openBurger={openBurger} setOpenBurger={setOpenBurger} />
      <main onClick={() => setOpenBurger(false)} className="pt-[60px]">
        <Outlet />
      </main>
      <Footer sitemap={sitemap} />
    </>
  );
}