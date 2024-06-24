import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, {useState} from "react";
import Button from "./Buttons/button";

export default function Nav() {

    const [toggle, setToggle] = useState(false) as [boolean, React.Dispatch<React.SetStateAction<boolean>>];

    return (
        <>
        <header className="sticky top-0 z-50 flex justify-center px-6 py-3 bg-gradient-to-b from-slate-800 to-slate-900/80 text-white w-full">
            <a href="#" className="text-2xl mt-2 font-mono font-bold text-slate-300 hover:text-white">
                FH Design
            </a>

            {/* Desktop Nav */}
            < nav className="hidden md:block ml-[20%] mt-2" >
                <ul className="flex font-semibold">
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#projects">My Projects</a>
                    </li>
                    <li>
                        <a href="#hire">Hire Me</a>
                    </li>
                    <li>
                    <Button 
                    Text="Contact Me"
                    id="contact"
                    className="relative bottom-4 px-6 py-4"
                    onClick={()=> {window.location.href = "#contact"}}
                        />
                    </li>
                </ul>
            </nav>
            {/* Mobile Nav */}
            <nav
                className={!toggle ? "mobile-nav left-[-100%] text-xl bg-slate-500" : "mobile-nav left-0 text-xl"}
            >
                <ul className="flex flex-col text-lg text-center">
                <li
                className="py-6 hover:bg-gradient-to-b hover:from-slate-100 hover:to-slate-200 hover:text-black hover:transition hover:duration-300 hover:ease-in-out "
                >
                    <a href="/#about">About</a>
                </li>
                <li className="py-6 hover:bg-gradient-to-b hover:from-slate-100 hover:to-slate-200 hover:text-black hover:transition hover:duration-300 hover:ease-in-out ">
                    <a href="/#projects" className="">Projects</a>
                </li>
                <li className="py-6 hover:bg-gradient-to-b hover:from-slate-100 hover:to-slate-200 hover:text-black hover:transition hover:duration-300 hover:ease-in-out">  
                    <a href="/#contact">Contact</a>
                </li>
                </ul>
            </nav>
            {/* Toggle button */}
            <button onClick={() => setToggle(!toggle)} className="flex ml-[50%] md:hidden z-10">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </button>

        </header>
        
        </>
    );
}