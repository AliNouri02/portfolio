import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logo } from "../assets";

const Navbar = ({changeLanguage}) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src="/logo.svg" alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Ali Nouri &nbsp;
            <span className="sm:block hidden"> | Web Dev</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <div className="relative h-full w-28 z-50 ">
            <div
              onClick={toggleDropdown}
              className="flex h-full w-full justify-center items-center cursor-pointer gap-x-3"
            >
              <p className="">{t("lang")}</p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="h-7 2xl:h-8 mt-2"
                  viewBox="0 0 100 125"
                  enableBackground="new 0 0 100 100"
                  xmlSpace="preserve"
                >
                  <path
                    className="cls-2"
                    d="M67.1,8.5l-0.1-0.2c-7.6-3.1-15.9-4.1-24.1-2.7l0.1,0.1c-4.8,0.8-9.5,2.3-14,4.7c-3.7,1.9-7,4.3-9.8,7l0-0.1  C14,22.2,10.1,28.1,7.8,34.7c0,0.1,0,0.1-0.1,0.2c-0.2,0.6-0.4,1.2-0.6,1.8c0,0.1,0,0.1-0.1,0.2c-0.2,0.7-0.4,1.3-0.6,2  c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.5-0.2,1-0.4,1.5c-0.1,0.4-0.1,0.7-0.2,1.1c0,0.3-0.1,0.5-0.1,0.8c-0.1,0.4-0.1,0.9-0.2,1.3  c0,0.2,0,0.3-0.1,0.5C4.3,53.2,5.8,62.5,10.3,71C21.9,93,49,101.4,71,89.8S101.3,51,89.7,29.1C84.6,19.4,76.5,12.3,67.1,8.5z   M88.6,29.7c2.3,4.4,3.8,9,4.5,13.7l-1.4-1.3l-0.5,3.1l-4,0.5l-4.4-5.9l0.4-2.8L81.6,35l-1.2-8.3l-0.8-4.6l-2.7-2l-1.2-1.4l2.4-1.3  l-3.9-2.9L71,13.9l-2.4-3.3C76.9,14.5,84,21,88.6,29.7z M29.6,11.5c4.7-2.5,9.7-4,14.8-4.7l2.5,2L46,11.2l4.4,4.3l0.3,2l3.4,0.3  l-2.2,1.9L46,18.1l-6.8,8.1l-2.8,3.6l-0.1,4.3l-2.7-3.6l-7.1,2.1l-3.2,4.9l1.2,3.3l5.4-0.8l3.1,3.4l-0.4,3.2l2.8,0.7l4.1-2.2  l7.1,1.8l6.7,2.7l5.6,0.1l2.9,4.9l6.4,2.2l5.2,3.9l-2.9,3.9l-3.3,8.3l-4.1,0.8l-1.7,4.8l-6.3,5.2l-4.1,0.8l-1.4,3.9l0.1,2.6l2.2,1.2  l-4.7-1.2l-1.6-3.1l0.7-13.6L45,70l-4.7-2.8l-3.6-5.8l0-10.6l-3-1.1l-3.4-1.9l-1.6-2.6l-3.1-1.8l-2,0.8l-5.7-4.7l-2.8-4.9l-0.7-7.8  l3.5-6.4l0-0.1C21.2,16.9,25.1,13.9,29.6,11.5z"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`origin-top absolute z-50  px-2 rounded-md rounded-t-none bg-app-red w-full text-app-white ring-1 ring-black ring-opacity-5 overflow-hidden
            transition-all duration-500 ${isOpen ? "h-40 " : "h-0 "}`}
            >
              <div
                className=""
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="flex justify-center h-2 bg-white rounded-b-full "></div>
                <div
                  className="flex  justify-center mx-3 py-1 mt-3 my-2 relative cursor-pointer rounded-full duration-100 hover:bg-red-900 px-2"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </div>
                <div
                  className="flex justify-center mx-3 py-1 my-2 relative cursor-pointer rounded-full duration-100 hover:bg-red-900 px-2"
                  onClick={() => changeLanguage("fa")}
                >
                  العربی
                </div>
                <div
                  className="flex justify-center mx-3 py-1 mb-3 my-2 relative cursor-pointer rounded-full duration-100 hover:bg-red-900 px-2"
                  onClick={() => changeLanguage("fa")}
                >
                  فارسی
                </div>
              </div>
            </div>
          </div>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
