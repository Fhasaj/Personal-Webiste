import { AiOutlineGithub, } from "react-icons/ai";
import { SiUpwork, SiFiverr } from "react-icons/si";

export default function Footer() {

    return(
        <footer className="bg-gradient-to-t from-slate-900 to-slate-800">    
<div className="py-10 grid grid-cols-2 grid-rows-1 text-white divide-x divide-solid divide-white ">
    <div className="max-sm:text-center md:text-center lg:pl-4 ">
        &copy; 2023 - {new Date().getFullYear()} Fhasaj.co.uk all right reserved 
    </div>
    <div className="pl-6 max-sm:text-center md:text-center pr-4">
        <nav className="flex-col space-y-4">
            <a href="/#about" className="hover:text-indigo-400 m-2">About Me</a>
            <a href="/#projects" className="hover:text-indigo-400 m-2">My Projects</a>
            <a href="/#hire" className="hover:text-indigo-400 m-2">Hire Me</a>
            <a href="/#contact" className="hover:text-indigo-400">Contact Me</a>
        </nav>
    </div>
</div>
    <div className=""></div>
        <div className="py-2 text-center text-white">
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
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
            <br/> 
        </div>
            <div className="text-center text-base font-medium font-mono">
            Made by Fatlum H with ❤️ 
            </div>
        </div>
        </footer>
    );

}