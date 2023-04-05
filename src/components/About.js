import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
    return (
        <section className="bg-secondery text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        About Me
                    </h2>
                    <p className="pb-5">
            Hi, my name is Fatlum, I am a
            full stack developer.
          </p>
          <p className="pb-5">
            I am proficient in a number of programming languages which include MERN, HTML5 + CSS, C++, C#, Python MYSQL and MongoDB.
          </p>
          <p>
          I have been actively engaged in coding since the age of 14, gaining substantial experience working on diverse projects and augmenting my skill set in the process. Driven by a passion for tackling complex challenges and expanding my knowledge base, I am dedicated to continuous self-improvement and take great pride in my strong work ethic. I would be pleased to share examples of my recent projects or invite you to review my contributions on GitHub.
 
          </p>
                </div>                    
                <div className="about-img">
                    <img src={AboutImg}
                    alt="coding Something"
                    className="lgw-[80%] md:ml-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;