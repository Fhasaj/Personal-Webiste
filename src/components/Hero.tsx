import HeroImg from "../assets/hero-img.png";
import Image from "next/image";
import Button from "./Buttons/button";

export default function Hero() {
    return (
        <section className="bg-gradient-to-t from-slate-800 to-slate-900 px-5 text-white ">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, I am <span className="text-accent">Fatlum</span><br/> your go-to Software Engineer extraordinaire!
                    </h1>
                    <p className="py-5">
                    With a passion for innovation and a knack for turning ideas into reality, I specialise in a spectrum of cutting-edge technologies.
                    </p>
                    <Button
                    id="projects"
                    Text="See projects"
                    onClick={()=> {window.location.href = "/#projects"}}
                    className="max-sm:w-full max-sm:justify-center max-sm:items-center px-6 py-3 mr-4 hover:bg-transparent"
                    />
                </div>
                <div className="hero-img">
                    <Image 
                    className="lgw-[80%] ml-auto"
                    src={HeroImg} 
                    alt="coding illustration" 
                    />
                </div>
            </div>
        </section>
    )
}