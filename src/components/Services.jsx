import React from "react";
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { MdImportantDevices } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
const data = [
  {
    icon: <FaReact />,
    title: "Frontend",
    desc: "A set of technologies focused on creating the visual and interactive aspects of a website or application, including responsive layouts,dynamic content rendering, and seamless user experiences across different devices and browsers.",
  },
  {
    icon: <MdImportantDevices />,

    title: "Responsive Design",
    desc: `Responsive design is a technique in web development that makes websites automatically adjust to fit any screen size, whether it's a desktop, tablet, or smartphone. This ensures that users have a consistent and optimized experience, no matter what device they're using.`,
  },
  {
    icon: <TbApi />,

    title: "API",
    desc: `
An API (Application Programming Interface) is a tool that enables seamless communication between software applications, allowing them to share data and functionality efficiently. It defines protocols for integration, driving interoperability and innovation in modern software ecosystems.`,
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Depolyment",
    desc: `Skilled in deploying applications using cloud platforms and virtual private servers (VPS), ensuring reliable, scalable, and secure hosting environments for web solutions.`,
  },
  {
    image: "/depolyment.png",
    title: "Depolyment",
    desc: `Responsive design is a technique in web development that makes websites automatically adjust to fit any screen size, whether it's a desktop, tablet, or smartphone. This ensures that users have a consistent and optimized experience, no matter what device they're using.`,
  },
  {
    image: "/depolyment.png",
    title: "Depolyment",
    desc: `Responsive design is a technique in web development that makes websites automatically adjust to fit any screen size, whether it's a desktop, tablet, or smartphone. This ensures that users have a consistent and optimized experience, no matter what device they're using.`,
  },
];

function Services() {
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] mx-auto bg-[#1f242d] px-4 sm:px-14 py-6">
      <h1 className="col-span-full text-white text-2xl font-poppins font-semibold  text-center pt-2">
        Services
      </h1>
      {data.map((items, index) => (
        <div
          key={index}
          className=" rounded-lg bg-[#323946] hover:bg-[#112e42] cursor-pointer  transition-colors duration-1000 "
        >
          <div className="w-20 rounded-br-full  bg-[#112e42] h-20 py-2 px-5">
            <span className=" text-4xl  text-white ">{items?.icon}</span>
          </div>
          <h1 className="text-white text-lg font-poppins font-semibold px-4">
            {items.title}
          </h1>
          <p className="text-white font-poppins px-4 mb-3">{items.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
