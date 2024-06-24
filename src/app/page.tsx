'use client';

import { MdKeyboardArrowUp } from "react-icons/md";
import Button from "@/components/Buttons/button";
import Nav from "../components/nav";
import Hero from "../components/Hero";
import About from "../components/about";
import Projects from "../components/projects";
import Hire from "../components/hire";
import Contact from "../components/contact";


import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Hire />
      <Contact />
      <Footer />
      </>
      <Button
        id="top"
        Text={<MdKeyboardArrowUp />}
        className="fixed bottom-0 right-0 m-10 bg-accent text-white p-3 rounded-full text-2xl hover:bg-primary-light transition duration-300 ease-in-out"
        onClick={() =>{
          window.scrollTo({ 
            top: 0, 
            behavior: "auto"  
          });
        }}
      />
    </div>
  );
}
