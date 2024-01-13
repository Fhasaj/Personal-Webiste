import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
    return (
        <section className="bg-secondery text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] sm:w-10 md:w-64 lg:w-96 xl:w-[620px] border-indigo-600 pb-2">
                    Meet Me: Your Full Stack Virtuoso! 
                    </h2>
                    <p className="pb-2">
                    Greetings! I'm Fatlum, a seasoned Full Stack Developer ready to turn your digital aspirations into reality.
          
          With a robust command of various programming languages and a wealth of experience, I specialize in crafting dynamic solutions that transcend boundaries.
          </p>
          <p>

 <h3 className="text-xl font-semibold mb-5 mt-8 border-b-[5px] sm:w-10 md:w-64 lg:w-96 xl:w-[360px] border-indigo-400 pb-2">My Skill Set include but not limted to:</h3>

    <ul className="mb-4 text-wrap">
        <li className="mb-3 mt-4 ml-3"> 1. Web 2.0 Mastery: Crafting web experiences that captivate and engage.</li>
        <li className="mb-3 mt-4 ml-3">2. Mobile App Maestro: Building sleek, functional, and user-friendly mobile applications.</li>
        <li className="mb-3 mt-4 ml-3">3. HTML5 + CSS Wizardry: Transforming concepts into visually stunning online masterpieces.</li>
        <li className="mb-3 mt-4 ml-3">4. Code Polyglot: Fluent in C++, C#, Python – I speak the language of innovation.</li>
        <li className="mb-3 mt-4 ml-3">5. WordPress Artistry: Translating dreams into digital landscapes with WordPress.</li>
        <li className="mb-3 mt-4 ml-3">6. Database Dynamo: Proficient in both MYSQL and MongoDB, ensuring seamless data management.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-5 mt-8 border-b-[5px] sm:w-10 md:w-64 lg:w-96 xl:w-[260px] border-indigo-400 pb-2">Why Choose Me?</h3> 

Coding isn't just a job for me; it's a lifelong passion that started at the age of 14. Over the years, I've honed my skills through diverse projects, constantly pushing my limits and embracing new challenges. My dedication to continuous improvement and a strong work ethic sets me apart. Let's collaborate and bring your ideas to life. I'm ready to tackle your challenges and contribute to your success! 
 
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