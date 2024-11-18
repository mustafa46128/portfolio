import Image from "next/image";
import React from "react";
// import { ReactComponent as Polygon } from "./polygon.svg";

function About() {
  return (
    <div id="about" className="">
      <div className="flex w-[90%] lg:w-[80%] mx-auto items-center justify-between  bg-[#323946]  sm:px-14 ">
        <div className="hexagon w-full sm:w-[22%] sm:block hidden">
          <div className="hexagon-inner ">
            <div className="inner-div bottom-0">
              <Image
                src={"/home.png"}
                width={10}
                height={10}
                className="w-[400px] aspect-square -mb-8 overflow-hidden"
              />
            </div>
          </div>
        </div>

        <div className=" w-full px-4 sm:w-[70%] mt-10 mb-5">
          <h1 className="text-[#fff] text-[24px] font-bold font-poppins py-2">
            About <span className="text-[#0ef]">Me</span>
          </h1>
          <h3 className="text-[#fff] text-[18px] font-semibold leading-3 font-poppins">
            Frontend Developer!
          </h3>
          <p className="w-full text-[#fff] py-3 font-poppins">
            I'm Mustafa, a lead web developer from Pakistan, specializing in
            custom website development, e-commerce solutions, and website
            optimization.
          </p>
          <p className="w-full text-[#fff]  font-poppins">
            I enjoy turning complex frontend development challenges into
            seamless, user-friendly, and high-performing web experiences. My
            goal is to craft solutions that align perfectly with your brand and
            business objectives. I specialize in building responsive websites
            using modern technologies, ensuring optimal performance and a smooth
            user experience across all devices
          </p>
          <div>
            <button className="rounded-full bg-[#0ef] px-3 py-1 mt-2 font-semibold font-poppins">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
