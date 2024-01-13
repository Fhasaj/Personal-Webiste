import React from "react";
import Fiver from "../assets/FiverNORMAL.png";
import upwork from "../assets/UpworkNormal.png";

const hire = () => {
    const post = [
        {
            img: Fiver,
            title: "Create a wordpress website",
            url: "https://www.fiverr.com/fatlumhasaj/develop-a-professional-wordpress-website-and-blog",
          },
          {
            img: upwork,
            title: "Scalp pages from a website and save them to a folder or csv file",
            url: "https://www.fiverr.com/fatlumhasaj/web-scraping-data-mining-data-scraping-data-extraction-data-collection",
        },
    ];

    return (
        <section className="bg-secondery text-white px-5 py-32" id="hire">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[190px] border-indigo-600 pb-2">
                        Hire me on
                    </h2>
                    <p className="PB-8">There are a number of ways in which you can hire me the best way is to contact me at <a href="mailto:info@fhasaj.co.uk" className="font-bold text-accent hover:text-white">info@fhasaj.co.uk</a > I will then get back to you as quickly as I can. The next way is by going on to my <a href="https://www.fiverr.com/fatlumhasaj?up_rollout=true" className="font-bold text-accent hover:text-white">Fiver</a> and buying a gig see below for my most popular. Finally you can click on my <a href="https://www.upwork.com/freelancers/fatlumh" className="font-bold text-accent hover:text-white">Upwork</a> profile and send me a message there. </p>
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