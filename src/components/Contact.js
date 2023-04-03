import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const YOUR_ID = process.env.REACT_APP_YOUR_ID;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ingbh89', 'template_c7czjmr', form.current, 'gGkxmhDoFJEda5fAj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
};

    return(
        <section className="bg-secondery px-5 py-32" id="contact">
        <div className="text-center md:w-[60%] mx-auto text-white">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
            Contact Me
          </h2>
          <p class="pb-5">
            Send me a message on what you would like me to help you with and I will help. 
          </p>
          <div className="container mx-auto items-center justify-center md:justify-between" >
            <form ref={form} onSubmit={sendEmail} id="contact-form">
            <div class="pt-2 pb-5">
                <input type="text" name="user_name" id="fullName" placeholder="Full Name" class="shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-lg text-left pl-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[100%] h-[50px]" />
            </div>
            <div class="pt-2 pb-5">
                <input type="email" name="user_email" id="email" placeholder="Email" class="shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-lg text-left pl-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[100%] h-[50px]"/>
            </div>
            <div class="pt-2 pb-5">
                <textarea id="message" name="message" rows="6" placeholder="Enter your message" class="shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-lg text-left pl-5 pt-2 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[100%] h-[100%]"/>
            </div>
            
            <button type="submit" value="send" class="btn bg-accent border-2 border-[#7477FF] text-white px-5 py-2 rounded-lg hover:bg-transparent">
                Submit
            </button>
            </form>  
          </div>
        </div>
      </section>
    );
};

export default Contact;