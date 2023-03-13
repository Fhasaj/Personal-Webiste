import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
    return (
        <section className="bg-secondery text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-col2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        About Me
                    </h2>
                    <p className="pb-5">
                        Some text here
                    </p>
                    <p className="pb-5">
                        Some more text here!!!
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