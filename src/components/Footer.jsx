import React from "react";
import { PiCopyrightThin } from "react-icons/pi";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
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
    <div className="w-[90%] lg:w-4/5 mx-auto bg-[#1f242d]">
      <div className="w-full flex-col justify-center items-center text-center px-4 sm:px-14 pt-10 ">
        <div>
          <h1 className="text-[#ededed] text-[35px] font-semibold font-poppins">
            Mustafa.
          </h1>
        </div>

        <ul
          className={`  flex  gap-2 sm:gap-4 sm:ml-10 mt-4 text-center justify-center
           
          `}
        >
          {nav.map((items, index) => (
            <li
              onClick={() => {
                scrollToSection(items.id);
              }}
              className="md:text-[#ededed] text-white text-[15px] font-medium sm:text-base sm:font-[500] cursor-pointer hover:text-[#0ef] font-poppins"
              key={index}
            >
              {items.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <Link href="https://www.facebook.com/profile.php?id=100028412898842&mibextid=ZbWKwL">
          <div className="border-[#0ef] border-2 rounded-full px-1 py-1 cursor-pointer">
            {" "}
            <FaFacebookF className="text-[#0ef] hover:text-white " />
          </div>
        </Link>

        <div className="border-[#0ef] border-2 rounded-full px-1 py-1  cursor-pointer">
          {" "}
          <FaTwitter className="text-[#0ef] hover:text-white" />
        </div>
        <div className="border-[#0ef] border-2 rounded-full px-1 py-1 cursor-pointer">
          <Link href="https://www.instagram.com/muhammadmustafa8610?utm_source=qr&igsh=MWR6aHZ4amVieDV5dQ==">
            <FaInstagramSquare className="text-[#0ef] hover:text-white" />
          </Link>
        </div>
        <div className="border-[#0ef] border-2 rounded-full px-1 py-1 cursor-pointer">
          <Link href="https://www.linkedin.com/in/muhammad-mustafa-974213255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedinIn className="text-[#0ef] hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className=" flex justify-center text-center border-b-[1px] border-white "></div>
      </div>
      <div className="flex justify-center">
        <h5 className=" flex items-center sm:text-base sm:tracking-wider font-poppins text-white">
          <span className="sm:text-xl font-poppins sm:font-semibold">
            <PiCopyrightThin />
          </span>
          2024 <span className="text-[#0ef] sm:p-1"> Mustafa </span> All Rights
          Reserved,Inc.
        </h5>
      </div>
    </div>
  );
}

export default Footer;
