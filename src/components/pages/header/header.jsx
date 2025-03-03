import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  const [status, setStatus] = useState(false);

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  }

  const toggleStatus = () => {
    setStatus(prevStatus => !prevStatus);
  };

  const services = [
    [
      "Complex launch",
      "Utility bills & invoices",
      "Amazon branding",
      "Categories & brands ungating service",
      "Amazon account unlock",
    ],
    [
      "Amazon listing",
      "Websites",
      "Suppliers",
      "Company registration in the USA",
      "ChatBot",
    ],
    [
      "Shipping services",
      "Private Label on Amazon",
      "Amazon reviews",
      "Gift cards",
      "Amazon advertising",
    ],
    ["UPCs", "Trademark"],
  ];

  return (
    <div>
      <div className="w-[90%] bg-[#222F3E] items-center flex flex-wrap justify-between text-[#889196] m-auto">
        <img src="/src/assets/Screenshot 2025-03-02 075410.png"  alt="" />
        <img src="/src/assets/menu (1) 1.png" className=" lg:hidden  block" alt="" />
        <div className="md:flex hidden w-[55%] items-center justify-between text-[#889196]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[orange]" : "text-[#889196]"
            }
          >
            {t("header.home")}
          </NavLink>
          <NavLink
            to="/sell"
            className={({ isActive }) =>
              isActive ? "text-[orange]" : "text-[#889196]"
            }
          >
            {t("header.sell")}
          </NavLink>
          <NavLink className="text-[#889196]" onClick={toggleStatus}>
            {t("header.servies")} <KeyboardArrowDownIcon />
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-[orange]" : "text-[#889196]"
            }
          >
            {t("header.blog")}
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "text-[orange]" : "text-[#889196]"
            }
          >
            {t("header.search")}
          </NavLink>
          <div className="flex gap-5">
            <button
              onClick={() => TranslateClick("en")}
              className={
                currentLang === "en"
                  ? "text-orange-600 font-bold p-[10px_10px] rounded-full  border-orange-600 border-[3px]"
                  : "text-[white]"
              }
            >
              EN
            </button>
            <button
              onClick={() => TranslateClick("ru")}
              className={
                currentLang === "ru"
                  ? "text-orange-600 font-bold p-[10px_10px] rounded-full  border-orange-600 border-[3px]"
                  : "text-[white]"
              }
            >
              RU
            </button>
          </div>
        </div>
      </div>
      {status && (
        <div>
            <h1 className="text-[white] ml-[68%] relative top-[25px]"><ArrowDropUpIcon/></h1>
          <div className="absolute left-0 mt-2 w-[64%] ml-[15%] h-[300px] z-10 bg-white shadow-lg border rounded p-3">
            <div className="flex justify-between absolute top-0 z-10 bg-[white]  gap-[40px]">
              {services.map((column, index) => (
                <div key={index} className="mt-[40px]">
                  {column.map((service, i) => (
                    <p
                      key={i}
                      className={`mb-[20px] ml-[20px] text-sm hover:text-orange-500 ${
                        service === "Utility bills & invoices"
                          ? "text-orange-500"
                          : "text-gray-700"
                      }`}
                    >
                      {service}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;