import React from 'react';
import HeroImg from "../assets/hero-img.png";

import { AiOutlineTwitter, AiOutlineGithub, } from "react-icons/ai";
import { SiUpwork, SiFiverr } from "react-icons/si";

const Hero = () => {
    return (
        <section className="bg-primary px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, <br/> I am <span className="text-accent">F</span>atlum<br/> a softwear developer!
                    </h1>
                    <p className="py-5">
                        I am proficient in MERN, HTML5 + CSS, C++, C# and Python
                    </p>
                    <div className="flex py-5">
                    <a
                    href="https://github.com/Fhasaj"
                    className="pr-4 inline-block text-accent hover:text-white"
                    >
                    {" "}
                    <AiOutlineGithub size={40} />{" "}
                    </a>
                    <a
                    href="https://www.upwork.com/freelancers/fatlumh"
                    className="pr-4 inline-block text-accent hover:text-white"
                    >
                    {" "}
                    <SiUpwork size={40} />{" "}
                    </a>
                    <a
                    href="https://www.fiverr.com/fatlumhasaj?up_rollout=true"
                    className="pr-4 inline-block text-accent hover:text-white"
                    >
                    {" "}
                    <SiFiverr size={40} />{" "}
                    </a>
                    </div> 
                    <a href="/#projects" className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
                        See projects
                    </a> 
                  
                </div>
                <div className="hero-img">
                    <img src={HeroImg} alt="coding illustration" className="lgw-[80%] ml-auto"/>
                </div>
            </div>
        </section>
    );
};


export default Hero;