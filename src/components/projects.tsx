/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./Buttons/button";
import oxon from "../assets/oxon.png";
import bullingdon from "../assets/Project-helios.png";
import lightsout from "../assets/Lights Out.png";
import edison from "../assets/eddisonCon.png";
import customer2 from "../assets/COLOURCityDecorarting.png";
import Python from "../assets/python.png";
import app from "../assets/app.png";

export default function Projects(){
    const projects = [
        {
          img: bullingdon,
          title: "Project Helios",
          desc: " This is a CMS for a client that owns a construction company. It is built with React, Node, Express and MongoDB. It has a fully functional admin panel where the client can add, edit and delete jobs, customers and invoices. The real name has been removed for privacy reasons.",
          SearchTerms: ["React", "Node", "Express", "MongoDB", "CMS", "Admin Panel", "Construction", "Company", "Jobs", "Customers", "Invoices", "Admin Panel", "Client", "Jobs", "Customers", "Invoices"],
          Cat: ["Web Development","All"]
        },
    
        {
          img: oxon,
          title: "OxonBuilders",
          desc: "Built with wordpress, this is a website the clent wanted to be able to edit himself. It is mobile responsive and has a contact form that sends an email to the client when a customer fills it out.",
          SearchTerms: ["Wordpress", "Website", "Mobile", "Responsive", "Contact", "Form", "Email", "Client", "Customer", "Fills", "Out"],
          Cat: ["Web Development","All"]
        },
        {
          img: lightsout,
          title: "Lights Out F1",
          desc: "A single page fully responsive website built with HTML, CSS and JavaScript, that shows the current calender and the drivers standings for the current F1 season",
          Searchterms: ["HTML", "CSS", "JavaScript", "Responsive", "Website", "Single", "Page", "Current", "Calender", "Drivers", "Standings", "F1", "Season"],
          Cat: "Web Development" 
        },
        {
            img: edison,
            title: "Eddison Construction",
            desc: "A wordpress website for a construction company. The client wanted to be able to edit the website himself. It is mobile responsive and has a contact form that sends an email to the client when a customer fills it out. The real name has been removed for privacy reasons.",
            SearchTerms: ["wordpress", "website", "mobile", "responsive", "contact", "form", "email", "client", "customer", "fills", "out"],
            Cat: ["Web Development","All"]
        },   
        {
            img: customer2,
            title: "Colour City Decorating",
            desc: "A wordpress website for a construction company. The client wanted to be able to edit the website himself. It is mobile responsive and has a contact form that sends an email to the client when a customer fills it out. The real name has been removed for privacy reasons.",
            SearchTerms: ["wordpress", "website", "mobile", "responsive", "contact", "form", "email", "client", "customer", "fills", "out"],
            Cat: ["Web Development","All"]
        },    
        {
          img: Python,
          title: "Web scraping for images and data",
          desc: "This is a web scraper built with python and beautify that scrapes images and data from a website and saves them to a folder. Th client wanted to be able to scrape images and data from a website and save them to a for use in a different website. The real name has been removed for privacy reasons.",
          SearchTerms: ["Web", "Scraper", "Python", "Beautify", "Scrapes", "Images", "Data", "Website", "Saves", "Folder", "Client", "Scrape", "Images", "Data", "Website", "Save", "Website"],
          Cat: ["Web Scraping" , "All"]
        },    
        {
          img: Python,
          title: "Web scraping for data",
          desc: "This is a web scraper built with python and beautify that scrapes data from a website and saves it to a csv file. The client wanted to be able to scrape data from a website and save it to a csv file for use in research. The real name has been removed for privacy reasons.",
          SearchTerms: ["Web", "Scraper", "Python", "Beautify", "Scrapes", "Data", "Website", "Saves", "CSV", "File", "Client", "Scrape", "Data", "Website", "Save", "CSV", "File"],
          Cat: ["Web Scraping" , "All"]
        },
        {
          img: app,
          title: "Mobile app for a client",
          desc: "This is a mobile app built with flutter for a client that wanted to be able to have a mobile app for his business. The app has a login and register page, a home page, a contact page and a services page. The real name has been removed for privacy reasons.",
          SearchTerms: ["Web", "Scraper", "Python", "Beautify", "Scrapes", "Data", "Website", "Saves", "CSV", "File", "Client", "Scrape", "Data", "Website", "Save", "CSV", "File"],
          Cat: ["Mobile Development" , "All"]
        },
        {
          img: Python,
          title: "Inventory Management System",
          desc: "This is a inventory management system that was built with qt and C++ for a client that wanted to be able to manage his inventory. The system has a login page, a home page, a add product page, a remove product page and a view product page. The real name has been removed for privacy reasons.",
          SearchTerms: ["Inventory", "Management", "System", "Qt", "C++", "Client", "Manage", "Inventory", "System", "Login", "Page", "Home", "Page", "Add", "Product", "Page", "Remove", "Product", "Page", "View", "Product", "Page"],
          Cat: ["Application Development" , "All" ]
        },
      ];

    const filterProjects = (category:any) => {
        // var filteredProjects: any[] = [];
        // if (category === "All") {
        //   return projects;
        // }else{
        // filteredProjects = projects.filter((project) => project.Cat === category);
        // // return filteredProjects;
        // }
        // console.log(filteredProjects);
        var filteredProjects = projects.filter((project) => project.Cat === category);
        return filteredProjects;
        // console.log(category);
      };
      return (
        <section 
        id="projects"
        className="bg-secondery text-white px-5 py-32" 
        >
          <div className="container mx-auto grid md:grid-cols-2 items-end md:justify-between">
            <div className="about-info  justify-end items-end">
              <h2 className="text-4xl font-bold mb-5 border-b-[5px] sm:w-10 md:w-64 lg:w-96 xl:w-[720px] border-indigo-600 pb-2">
              Explore My Showcase of Stellar Projects!
              </h2>
    
              <p className="pb-5">
              Dive into the world of innovation with some of my standout projects, meticulously crafted to perfection using a blend of cutting-edge technologies. Whether you're into the seamless interactivity of React, the fluidity of Flutter, or the robustness of WordPress coupled with the data mastery of MySQL and MongoDB, these projects have it all!
              </p>
            </div>
    
            <div className="about-img"></div>
          </div>

        <div className="max-sm:hidden flex justify-center mb-5 ">
          <Button 
            id="All" 
            Text="Show All" 
            className="px-3 py-3 mr-4"
            onClick={filterProjects("All")} 
          />
          <Button
            id="Web Development"
            Text="Web Development"
            className="px-3 py-3 mr-4"
            onClick={filterProjects("Web Development")}
            />
          <Button
            id="Mobile Development"
            Text="Mobile Development"
            className="px-3 py-3 mr-4"
            onClick={filterProjects("Mobile Development")}
            />
          <Button
            id="Web Scraping"
            Text="Web Scraping"
            className="px-3 py-3"
            onClick={filterProjects("Web Scraping")}
            />
        </div>

    
          <div className="projects container mx-auto grid md:grid-cols-3 gap-10">


            {projects.map((project, i) => {
              return (
                  <div className="relative" key={i}>
                          <Image
                              src={project.img}
                              alt={project.title}
                              className="h-[90%] rounded-2xl" 
                            />
                          <div className="flex absolute bottom-[10%] sm:top-5 md:top-5 lg:top-80 pl-4 pr-4 mx-auto bg-slate-700 opacity-0 duration-500 justify-center flex-col rounded-xl hover:opacity-90">
                              <p className=" sm:text-sm md:text-sm lg:text-lg text-wrap text-slate-300">
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
}