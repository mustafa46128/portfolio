import Image from "next/image";
import React from "react";
// import { ReactComponent as Polygon } from "./polygon.svg";

function About() {
  return (
    <div id="about" className="">
      <div className="flex w-[80%] mx-auto items-center justify-between  bg-[#323946]  sm:px-14">
        <div className="hexagon w-full sm:w-[22%] sm:block hidden">
          <div className="hexagon-inner ">
            <div className="inner-div bottom-0">
              <Image
                src={"/home.png"}
                width={50}
                height={50}
                className="w-[200px] h-[180px] -mb-8 overflow-hidden"
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
          <p className="w-full text-[#fff] py-4 font-poppins">
            A frontend developer is a professional who specializes in crafting
            the visual and interactive elements of websites and web
            applications. They use languages like HTML, CSS, and JavaScript,
            along with frameworks such as React js,Next js , to build
            responsive, user-friendly interfaces. Their primary focus is to
            ensure that the design is translated into a functional, engaging
            experience across all devices and browsers, optimizing for both
            performance and accessibility.
          </p>
          <div>
            <button className="rounded-full bg-[#0ef] px-3 py-1 font-semibold font-poppins">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
