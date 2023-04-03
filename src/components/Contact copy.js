import React, {useState} from "react";

const Contact = () => {
  //contact form
const [status, setStatus] = useState("Send Message");
const handleSubmit = async (e) =>{
  e.preventDefault();
  setStatus("Sending...");
  const {name, email, message} = e.target.elements;
  let details = {
    name: name.value,
    email:email.value,
    message: message.value,
  };
  let response = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
      body: JSON.stringify(details),
  });
  setStatus("Send Message");
  let result = await response.json();
  alert(result.status);
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
            <form id="contact-form" onSubmit={handleSubmit} method="post">
            <div class="pt-2 pb-5">
                <input type="text" name="name" id="name" placeholder="Full Name" class="shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-lg text-left pl-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[100%] h-[50px]" />
            </div>
            <div class="pt-2 pb-5">
                <input type="email" name="email" id="email" placeholder="Email" class="shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-lg text-left pl-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[100%] h-[50px]"/>
            </div>
            <div class="pt-2 pb-5">
                <textarea id="message" rows="6" placeholder="Enter your message" class="shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-lg text-left pl-5 pt-2 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[100%] h-[100%]"/>
            </div>
            
            <button type="submit"  class="btn bg-accent border-2 border-[#7477FF] text-white px-5 py-2 rounded-lg hover:bg-transparent">
                {status}
            </button>
            
            </form>  
          </div>
        </div>
      </section>
    );
};

export default Contact;