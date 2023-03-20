import React from "react";

const Contact = () => {
    return(
        <section className="bg-secondery px-5 py-32" id="contact">
        <div className="text-center md:w-[60%] mx-auto text-white">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
            Contact Me
          </h2>
          <p class="pb-5">
            Some text here
          </p>
          <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
            <form action="#">
            <div class="pt-2 pb-5">
                <input type="text" name="name" placeholder="Full Name" class="shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-lg text-left pl-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[100%] h-[50px]"/>
            </div>
            <div class="pt-2 pb-5">
                <input type="email" name="email" placeholder="Email" class="shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-lg text-left pl-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[100%] h-[50px]"/>
            </div>
            <div class="pt-2 pb-5">
                <textarea id="message" rows="6" placeholder="Enter your message" class="shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-lg text-left pl-5 pt-2 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[100%] h-[50%]"/>
            </div>
            <button type="submit" id="send-email" class="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-6 hover:bg-transparent">
                Send Message
            </button>
            </form>
            <div>
                <p>
                <p className="py-2">
            <span className="font-bold">Email:</span> coderamrin@gmail.com
          </p>
          <p className="py-2">
            <span className="font-bold">Phone:</span> +88 01624-890723
          </p>
                </p>
            </div>
          </div>
       

        </div>
      </section>
    );
};

export default Contact;