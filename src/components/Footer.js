import React from "react";
import { AiOutlineGithub, } from "react-icons/ai";
import { SiUpwork, SiFiverr } from "react-icons/si";

const Footer = () =>{
    return(
        <footer>
            <div className="py-4 text-center bg-primary text-white">
            &copy; 2023 - {new Date().getFullYear()} Fhasaj.co.uk all right reserved 
            <br />
            Made by Fatlum H with ❤️ 
        
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <div className="relative mx-auto">
                   <br></br> <a
                    href="https://github.com/Fhasaj"
                    className="pr-4 inline-block text-accent hover:text-white"
                    >
                    {" "}
                    <AiOutlineGithub size={30} />{" "}
                    </a>
                    <a
                    href="https://www.upwork.com/freelancers/fatlumh"
                    className="pr-4 inline-block text-accent hover:text-white"
                    >
                    {" "}
                    <SiUpwork size={30} />{" "}
                    </a>
                    <a
                    href="https://www.fiverr.com/fatlumhasaj?up_rollout=true"
                    className="pr-4 inline-block text-accent hover:text-white"
                    >
                    {" "}
                    <SiFiverr size={30} />{" "}
                    </a>
                    </div> 
        </div>
        </div>
        </footer>
    );
};

export default Footer;