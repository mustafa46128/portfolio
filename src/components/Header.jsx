import React, { useEffect, useState } from "react";
import Home from "./Home";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const nav = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="w-4/5 mx-auto bg-[#1f242d] rounded-t-lg relative">
      <div className="w-full flex justify-between items-center px-4 sm:px-14 py-4">
        <div>
          <h1 className="text-[#ededed] text-[35px] font-semibold font-poppins">
            Mustafa.
          </h1>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#ededed]">
            {isOpen ? (
              <IoClose className="w-8 h-8" />
            ) : (
              <GiHamburgerMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        <ul
          className={`md:flex gap-6 mt-2 mb-4  md:gap-6 absolute md:static md:bg-transparent bg-[#1f242d] w-full md:w-auto left-0 top-16 md:top-0 z-10 flex-col md:flex-row items-start sm:pl-14 px-4 justify-center  transition-all duration-300 ease-in ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {nav.map((items, index) => (
            <li
              onClick={() => {
                scrollToSection(items.id);
                setIsOpen(false);
              }}
              className="md:text-[#ededed]  text-white text-lg sm:text-[18px] font-[500] cursor-pointer hover:text-[#0ef] font-poppins "
              key={index}
            >
              {items.name}
            </li>
          ))}
        </ul>
      </div>
      <Home />
    </div>
  );
}

export default Header;
