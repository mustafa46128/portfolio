import Image from "next/image";
import React from "react";
const imageData = [
  {
    image: "/portfolio.png",
    name: "Web Design",
    desc: "Expert in creating responsive, visually appealing websites with clean HTML and modern CSS techniques. ",
    url: "https://foodil.co/",
  },
  {
    image: "/portfolio1.png",
    name: "Web Design",
    desc: "Proficient in building responsive, scalable web designs using Tailwind CSS and Bootstrap frameworks.",
    url: "https://freedomelitefunding.com/",
  },
  {
    image: "/portfolio2.png",
    name: "Web Design",
    desc: "Skilled in developing dynamic, responsive web interfaces using JavaScript and Tailwind CSS. ",
    url: "https://corbett.cruxdevs.com/",
  },
  {
    image: "/portfolio3.png",
    name: "Web Design",
    desc: "Experienced in building interactive, responsive web applications with React.js and Tailwind CSS.",
    url: "https://www.polarpro.com/",
  },
  {
    image: "/portfolio4.png",
    name: "Web Design",
    desc: "Proficient in building high-performance, responsive web apps with Next.js and Tailwind CSS. ",
    url: "https://dev.hearingly.com/",
  },
  {
    image: "/portfolio5.png",
    name: "Web Design",
    desc: "Experienced in crafting dynamic, scalable web applications using React.js, Next.js, and Tailwind CSS.",
    url: "https://travelnoire.com/",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className=" w-[80%] mx-auto bg-[#323946] px-4 sm:px-14">
      <h1 className="text-white text-center text-[24px] font-semibold font-poppins pt-3 pb-2">
        Latest <span className="text-[#0ef]">Project</span>
      </h1>
      <p className="text-base w-full text-[#fff] font-poppins mb-6">
        Here are the projects I have developed during my more than one-year
        journey as a Front-end Developer. I concentrated on building responsive,
        user-friendly web applications for both software houses and diverse
        clients. My work as a Full Stack Developer involved optimizing
        performance, ensuring cross-browser compatibility, and delivering
        high-quality web solutions that consistently met or exceeded client
        requirements.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4 pb-6">
        {imageData.map((items, index) => (
          <div className="w-full relative group ">
            <Image
              src={items.image}
              alt={`Image ${index}`}
              width={50}
              height={80}
              className="w-full h-[170px] rounded-lg"
            />
            <div className="absolute  left-0 right-0 bottom-0 bg-gradient-to-b  from-custom-black to-custom-blue rounded-lg overflow-hidden transition-all duration-300 ease-in-out group-hover:h-full h-0 flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-white text-[20px] font-semibold font-poppins">
                  {items.name}
                </h1>
                <p className="text-white text-center text-sm font-poppins px-2">
                  {items.desc}
                </p>
                <a href={items?.url} target="_blank">
                  <h5 className="text-white font-poppins font-semibold text-[14px] mt-4">
                    {items?.url}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
