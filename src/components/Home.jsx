import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Home() {
  return (
    <div className="w-full">
      <div className=" flex lg:flex-row flex-col w-full mx-auto  lg:justify-between sm:px-14 px-4">
        <div className="w-full sm:w-[70%] flex flex-col items-center pb-8 ">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl font-bold sm:py-2 text-[#fff] font-poppins ">
              {`Hello,It's Me`}
            </h1>
            <h2 className=" text-[22px] sm:text-4xl font-bold md:leading-3 sm:py-2  text-[#fff] font-poppins">
              Muhammad Mustafa
            </h2>
            <h3 className="text-xl sm:text-3xl font-bold py-1 sm:py-2 text-[#fff] font-poppins">
              {`And I'm a`}{" "}
              <span className="text-[#0ef]">Frontend Developer</span>
            </h3>
            <p className="text-base w-full text-[#fff] font-poppins ">
              {` A frontend developer builds responsive and accessible web interfaces
            using HTML, CSS, JavaScript, and frameworks like React.js and
            Next.js, ensuring seamless user experiences across devices and
            browsers.`}
            </p>
            <div className="flex gap-2 mt-4">
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
            <div className="mb-10 mt-8">
              <Link
                href="/Mustafacv2years.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button className="rounded-full bg-[#0ef] px-3 py-2 font-semibold font-poppins hover:bg-black hover:text-white">
                  Download Cv
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/4 flex justify-center sm:justify-normal">
          <div className="w-full clipped-div flex relative mb-4 sm:mt-10 justify-center ">
            <Image
              src="./home.png"
              width={100}
              height={100}
              className="image-div h-52 w-72 absolute -bottom-2 "
              alt="Home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
