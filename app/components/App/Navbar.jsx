import { useState } from 'react';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import AnimatedHamburger from '../../assets/icons/AnimatedHamburger';
import CloseIcon from '../../assets/icons/CloseIcon';
import logo from '/logo.png';

export default function Navbar({ menu, setOpenBurger, openBurger }) {
  // const [openBurger, setOpenBurger] = useState(false);
  const [menuHover, setMenuHover] = useState(null);
  const [menuFocus, setMenuFocus] = useState(null);
  const [menuActive, setMenuActive] = useState(null);
  const [searchShow, setSearchShow] = useState(false);

  const handleHoverActive = () => {
    if (menuHover && !menuFocus) {
      return menuHover;
    } else if (!menuHover && menuFocus) {
      return menuFocus;
    } else if (menuHover && menuFocus) {
      return menuFocus;
    }
    return null;
  };

  // console.log(`hover=${menuHover}, focus=${menuFocus}, active=${menuActive}`);

  return (
    <>
      <nav className="fixed top-0 w-full">
        <div className="bg-primary flex justify-between items-center px-5 md:px-12.5 h-[60px]">
          <a href="/">
            <img src={logo} alt="Acquasuisse Logo" className="h-5 md:h-6 mt-1" />
          </a>
          <div className="flex flex-row gap-5 lg:gap-0">
            <a href="#" onClick={() => setSearchShow(!searchShow)}>
              {searchShow ? (
                <CloseIcon className="stroke-white h-4" />
              ) : (
                <SearchIcon className="stroke-white fill-none h-4" />
              )}
            </a>
            <AnimatedHamburger
              onClick={() => setOpenBurger(!openBurger)}
              active={openBurger}
              className="h-4 lg:hidden"
            />
          </div>
        </div>
        <div
          className={
            'lg:top-0 lg:flex lg:flex-row lg:text-white lg:bg-transparent lg:w-fit lg:right-1/2 lg:translate-x-1/2 lg:py-0 lg:gap-9.5 absolute gap-0 py-4 w-full bg-white text-primary flex-col justify-center' +
            (openBurger ? '' : ' hidden')
          }
        >
          {menu.map((link) => (
            <div className="lg:p-2.5 lg:w-fit px-6 w-full flex flex-col cursor-pointer group"
              onMouseEnter={() => setMenuHover(link.key)}
              onFocus={() => setMenuFocus(link.key)}
              onBlur={() => setMenuFocus(null)}
              onClick={() =>
                menuActive == link.key ? setMenuActive(null) : setMenuActive(link.key)
              }
            >
              <a
                href={link.href}
                className="flex items-center w-fit uppercase gap-2.5 text-base/5 font-body group-hover:underline group-focus:underline underline-offset-6 p-2.5"
                // onMouseLeave={() => setMenuHover("")}
              >
                <span>{link.heading}</span>
                <ArrowRightIcon className="lg:fill-white fill-primary rotate-90 group-hover:-rotate-90 group-focus:-rotate-90 h-3 transition-transform" />
              </a>
              <ul
                className={
                  'lg:hidden font-body text-base/5 uppercase px-6' +
                  (menuActive == link.key ? '' : ' hidden')
                }
              >
                {link.sublinks.map((sublink) => (
                  <li className="p-2.5">
                    <a href={sublink.href}>{sublink.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
      <nav
        className={
          'lg:flex dark:bg-gray-950 bg-white justify-center gap-12.5 px-12.5 fixed top-[60px] w-full hidden' +
          (menuHover || menuFocus ? ' py-2' : '')
        }
        onMouseLeave={() => setMenuHover('')}
      >
        {(menuHover || menuFocus) &&
          menu[handleHoverActive() - 1].sublinks.map((link) => (
            <a
              href={link.href}
              className="hover:underline underline-offset-5 dark:text-white text-primary font-body p-2.5"
            >
              {link.name}
            </a>
          ))}
      </nav>
      <div
        className={
          'fixed dark:bg-gray-950 bg-white flex items-center justify-between top-[60px] w-full px-12.5 py-4 gap-4' +
          (searchShow ? '' : ' hidden')
        }
      >
        <input
          className="font-body text-primary text-base/5 py-2.5 focus:outline-none w-full dark:text-white"
          type="text"
          placeholder="Search product..."
        />
        <SearchIcon className="fill-none dark:stroke-white stroke-primary h-4" />
      </div>
    </>
  );
}
