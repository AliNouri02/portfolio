import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { menu, close, logo } from "../assets";

const Navbar = ({ changeLanguage }) => {
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
            {t("navbar.name")} &nbsp;
            <span className="sm:block hidden"> | {t("navbar.job")}</span>
          </p>
        </Link>

        <ul className="list-none items-center hidden md:flex flex-row gap-10">
          <li
            className={`${
              active === t("navbar.about") ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(t("navbar.about"))}
          >
            <a href={`#${t("navbar.about").toLowerCase()}`}>
              {t("navbar.about")}
            </a>
          </li>
          <li
            className={`${
              active === t("navbar.work") ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(t("navbar.work"))}
          >
            <a href={`#${t("navbar.work").toLowerCase()}`}>
              {t("navbar.work")}
            </a>
          </li>
          <li
            className={`${
              active === t("navbar.contact") ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(t("navbar.contact"))}
          >
            <a href={`#${t("navbar.contact").toLowerCase()}`}>
              {t("navbar.contact")}
            </a>
          </li>

          <div className="relative  z-50 flex flex-col items-center">
            <div
              onClick={toggleDropdown}
              className="flex h-full w-full justify-center items-center cursor-pointer gap-x-3"
            >
              <p className="">{t("lang")}</p>
           
            </div>
            <div
              className={`origin-top absolute z-50 top-8  px-2 rounded-md rounded-t-none bg-app-red w-28 text-app-white ring-1 ring-black ring-opacity-5 overflow-hidden
            transition-all duration-500 ${isOpen ? "h-40 " : "h-0 "}`}
            >
              <div
                className=" py-1 my-1 black-gradient  rounded-xl"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  className="flex  justify-center mx-3 py-1 mt-3 my-2 relative cursor-pointer rounded-full duration-100 px-2"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </div>
                <div
                  className="flex justify-center mx-3 py-1 mb-3 my-2 relative cursor-pointer rounded-full duration-100 px-2"
                  onClick={() => changeLanguage("fa")}
                >
                  فارسی
                </div>
              </div>
            </div>
          </div>
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
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
              <li
                className={`${
                  active === t("navbar.about") ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(t("navbar.about"))}
              >
                <a href={`#${t("navbar.about").toLowerCase()}`}>
                  {t("navbar.about")}
                </a>
              </li>
              <li
                className={`${
                  active === t("navbar.work") ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(t("navbar.work"))}
              >
                <a href={`#${t("navbar.work").toLowerCase()}`}>
                  {t("navbar.work")}
                </a>
              </li>
              <li
                className={`${
                  active === t("navbar.contact")
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(t("navbar.contact"))}
              >
                <a href={`#${t("navbar.contact").toLowerCase()}`}>
                  {t("navbar.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
