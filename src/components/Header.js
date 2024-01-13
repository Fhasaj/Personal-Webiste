import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="sticky top-0 z-50 flex justify-between px-8 py-8 bg-primary text-white w-full">
            <a href="/" className="text-2xl font-mono font-bold text-accent hover:text-white">
                FH Design's
            </a>

            {/* Desktop Nav */}
            < nav className="hidden md:block" >
                <ul className="flex font-semibold">
                    <li>
                        <a href="/#about">About Me</a>
                    </li>
                    <li>
                        <a href="/#projects">My Projects</a>
                    </li>
                    <li>
                        <a href="/#hire">Hire Me</a>
                    </li>
                    <li>
                        <a href="/#contact" className="bg-accent rounded-md text-white hover:bg-white hover:text-accent">Contact Me</a>
                    </li>
                </ul>
            </nav>
            {/* Mobile Nav */}
            <nav
                className={!toggle ? "mobile-nav left-[-100%] text-lg" : "mobile-nav left-0 text-lg"}
            >
                <ul className="flex flex-col text-lg">
                <li>
                    <a href="/#about">About</a>
                </li>
                <li>
                    <a href="/#projects">Projects</a>
                </li>
                <li>
                        <a href="/#hire">Contract Me</a>
                    </li>
                <li>
                    <a href="/#contact">Contact</a>
                </li>
                </ul>
            </nav>
            {/* Toggle button */}
            <button onClick={handleToggle} className="block md:hidden z-10">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </button>

        </header>
    );
};

export default Header;