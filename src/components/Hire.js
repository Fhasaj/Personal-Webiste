import React from "react";
import Fiver from "../assets/FiverNORMAL.png";
import upwork from "../assets/UpworkNormal.png";

const hire = () => {
    const post = [
        {
            img: Fiver,
            title: "Hire me on my Fiver Gig",
            url: "https://www.fiverr.com/fatlumhasaj/creat-a-nodejs-react-or-angluar-website",
          },
          {
            img: upwork,
            title: "Hire me on my Upwork Gig",
            url: "https://www.upwork.com/services/product/development-it-a-modern-and-responsive-html-and-css-portfolio-website-1627626678874005504",
        },
    ];

    return (
        <section className="bg-primary text-white px-5 py-32" id="hire">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[190px] border-indigo-600 pb-2">
                        Hire me on
                    </h2>
                    <p className="PB-5">Here are some other place you can reach out and hire me on.</p>
                </div>
                <div></div>
            </div>
            <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
                {post.map((item)=>{
                    return (
                        <div>
                            <img src={item.img} alt={item.title} />
                            <h3 className="py-5 text-2xl">{item.title}</h3><br></br>
                            <a href={item.url} className="btn bg-accent border-2 border-[#7477FF] text-white px-4 py-2 hover:bg-transparent">Hire me..</a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default hire;