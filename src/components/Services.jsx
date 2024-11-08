import React from "react";
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { MdImportantDevices } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
const data = [
  {
    icon: <FaReact />,
    title: "React Js",
    desc: "I create fast, interactive websites using React.js that offer smooth user experiences and responsive designs. Whether you're building a simple app or a complex platform, I ensure your site is dynamic, efficient, and visually engaging.",
  },
  {
    icon: <SiNextdotjs />,

    title: "Next Js",
    desc: `I build fast, SEO-friendly web applications using Next.js. With its server-side rendering and static site generation capabilities, I deliver highly optimized websites that load quickly, rank well, and provide a smooth, engaging user experience across all devices.

`,
  },
  {
    icon: <RiTailwindCssFill />,

    title: "Tailwind Css",
    desc: `
I design visually appealing and responsive websites using Tailwind CSS. With its utility-first approach, I can quickly build custom, flexible layouts that are optimized for performance and look great on any device`,
  },
  {
    icon: <TbApi />,
    title: "API",
    desc: `I create and integrate APIs that allow different systems and services to communicate with each other. Whether it's connecting external services or building custom solutions, I make sure your web applications run smoothly and efficiently`,
  },
  {
    icon: <MdImportantDevices />,
    title: "Responsive",
    desc: `I create responsive websites that look great and work perfectly on any device, whether it's a desktop, tablet, or mobile. My designs automatically adjust to different screen sizes for a smooth user experience`,
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Depolyment",
    desc: `I handle the deployment of websites and applications, ensuring they are successfully launched and accessible online. From setting up servers to managing updates, I make sure your site runs smoothly in a live environment`,
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
