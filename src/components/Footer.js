import React from "react";
import { AiOutlineTwitter, AiOutlineGithub, } from "react-icons/ai";
import { SiUpwork, SiFiverr } from "react-icons/si";

const Footer = () =>{
    return(
        <footer>
            <div className="py-4 text-center bg-primary text-white">
            &copy; 2023 Fatlum Hasaj all right reserved
        
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <div className="relative mx-auto">
                    <a
                    href="https://twitter.com/CoderAmrin"
                    className="pr-4 inline-block text-accent hover:text-white"
                    >
                    {" "}
                    <AiOutlineGithub size={30} />{" "}
                    </a>
                    <a
                    href="https://www.youtube.com/@coderamrin"
                    className="pr-4 inline-block text-accent hover:text-white"
                    >
                    {" "}
                    <AiOutlineTwitter size={30} />{" "}
                    </a>
                    <a
                    href="https://www.facebook.com/CoderAmrin/"
                    className="pr-4 inline-block text-accent hover:text-white"
                    >
                    {" "}
                    <SiUpwork size={30} />{" "}
                    </a>
                    <a
                    href="https://www.facebook.com/CoderAmrin/"
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