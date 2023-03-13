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
            Hi, My Name Is Fatlum Hasaj. I am a
            full stack developer.
          </p>
          <p className="pb-5">
            I am proficient in a number of programming languages which include MERN, HTML5 + CSS, C++, C#, Python MYSQL and MongoDB.
          </p>
          <p>
            I am currently trying to complete a couple of server admin courses as well to better build my portfolio.
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