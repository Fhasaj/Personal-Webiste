import React from "react";
import cssProjects from "../assets/cssprojects.png";
import devlog from "../assets/devlog.png";
import getInspirred from "../assets/get-inspirred.png";
import uilogs from "../assets/uilogs.png";

const Projects = () => {
    const projects = [
        {
            img: devlog,
            title: "Devlog",
            description: "A web application that allows users to log in to their account and view their profile.",
            link: "https://devlog.herokuapp.com/",
        },
        {
            img: uilogs,
            title: "uilogs",
            description: "A web application that allows users to log in to their account and view their profile.",
            link: "https://devlog.herokuapp.com/",
        },
        {
            img: cssProjects,
            title: "cssProjects",
            description: "A web application that allows users to log in to their account and view their profile.",
            link: "https://devlog.herokuapp.com/",
        },
        {
            img: getInspirred,
            title: "getInspirred",
            description: "A web application that allows users to log in to their account and view their profile.",
            link: "https://devlog.herokuapp.com/",
        },
    ];

    return (
        <section className="projects container">
            
        </section>
    );

};
export default Projects;