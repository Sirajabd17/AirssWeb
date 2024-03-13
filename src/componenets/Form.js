import { useState } from "react";
const Form=()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation logic here
        console.log(formData);

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
      };
    
    return(
        <>
         <div className="w-3/5 bg-form">
      <form onSubmit={handleSubmit} className=" py-14 pl-20 pr-24">
        <div className="flex w-full gap-12">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-label font-popin">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-3 block w-[250px] bg-formInput rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-label font-popin">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-3  block  w-[387px] bg-formInput rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        </div>
        <div className="mt-10 mb-16">
          <label htmlFor="subject" className="block text-lg font-medium text-label font-popin">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 p-3 block  w-full  bg-formInput rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-label font-popin">
            Message
          </label>
          <textarea  
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="mt-1 p-2 block w-full resize-none  bg-formInput rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className=" py-3 px-4  flex items-center  gap-2 border border-transparent  text-white font-opensans text-base font-bold rounded-br-3xl rounded-tl-3xl rounded-bl-3xl  bg-Navbarhover  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span>Send</span>
            <img   src="/Image/siteLogo/arrowRight.svg" alt="arrow right"/>
          </button>
        </div>
      </form>
    </div>
  

        
        
        </>
    )
}

export default Form;