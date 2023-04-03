import React from "react";
import oxon from "../assets/oxon.png";
import bullingdon from "../assets/Bullingdon.png";
import lightsout from "../assets/Lights Out.png";

const Projects = () => {
  const projects = [
    {
      img: bullingdon,
      title: "The Bullingdon",
      desc: " This is a website for a local bar and night club in oxford. It is a static website built with HTML, CSS and JavaScript",
    },

    {
      img: oxon,
      title: "OxonBuilders",
      desc: "Both main website as well as a custom CMS for the client. Built with HTML CSS and JS for the website and React, Node, Express and MongoDB for the CRM",
    },
    {
      img: lightsout,
      title: "Lights Out F1",
      desc: "A single page fully responsive website built with HTML, CSS and JavaScript, that shows the current calender and the drivers standings for the current F1 season",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                <h3>{project.title}</h3><br></br>
                {project.desc}
                </p>

                <div className="mx-auto">
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
