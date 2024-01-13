import React from "react";
import oxon from "../assets/oxon.png";
import bullingdon from "../assets/Project-helios.png";
import lightsout from "../assets/Lights Out.png";
import Python from "../assets/python.jpg";
import app from "../assets/app2.png";

const Projects = () => {
  const projects = [
    {
      img: bullingdon,
      title: "Project Helios",
      desc: " This is a CMS for a client that owns a construction company. It is built with React, Node, Express and MongoDB. It has a fully functional admin panel where the client can add, edit and delete jobs, customers and invoices. The real name has been removed for privacy reasons.",
    },

    {
      img: oxon,
      title: "OxonBuilders",
      desc: "Built with wordpress, this is a website the clent wanted to be able to edit himself. It is mobile responsive and has a contact form that sends an email to the client when a customer fills it out.",
    },
    {
      img: lightsout,
      title: "Lights Out F1",
      desc: "A single page fully responsive website built with HTML, CSS and JavaScript, that shows the current calender and the drivers standings for the current F1 season",
    },    
    {
      img: app,
      title: "Project Anubis",
      desc: "This is a mobile app both for IOS and android built with flutter. The customer wanted to be able to mange his staff by assigning them to jobs and tracking their location. The app also has a chat feature where the staff can communicate with each other. The real name has been removed for privacy reasons.",
    },
    {
      img: Python,
      title: "Web scraping for images and data",
      desc: "This is a web scraper built with python and beautify that scrapes images and data from a website and saves them to a folder. Th client wanted to be able to scrape images and data from a website and save them to a for use in a different website. The real name has been removed for privacy reasons.",
    },    
    {
      img: Python,
      title: "Web scraping for data",
      desc: "This is a web scraper built with python and beautify that scrapes data from a website and saves it to a csv file. The client wanted to be able to scrape data from a website and save it to a csv file for use in research. The real name has been removed for privacy reasons.",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5 justify-end items-end">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] sm:w-10 md:w-64 lg:w-96 xl:w-[720px] border-indigo-600 pb-2">
          Explore My Showcase of Stellar Projects!
          </h2>

          <p className="pb-5">
          Dive into the world of innovation with some of my standout projects, meticulously crafted to perfection using a blend of cutting-edge technologies. Whether you're into the seamless interactivity of React, the fluidity of Flutter, or the robustness of WordPress coupled with the data mastery of MySQL and MongoDB, these projects have it all!
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="h-auto rounded-2xl" />
              <div className="flex absolute bottom-0 sm:top-5 md:top-5 lg:top-80 p-2 mx-auto  bg-primary opacity-0 duration-500 justify-center flex-col rounded-t-lg hover:opacity-90">
                <p className="font-semibold sm:text-sm md:text-sm lg:text-lg text-wrap text-white">
                <h3 className="mb-5 text-wrap sm:text-md md:text-md lg:text-2lg font-bold border-b-[5px] border-indigo-300 lg:h-[25%] w-[70%]">{project.title}</h3>
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
