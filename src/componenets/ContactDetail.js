
import Form from "../componenets/Form"
import Contact from "../componenets/Contact"

const ContactDetail=()=>{
    return (
        <>
         <div className=" w-full flex bg-form rounded-3xl">
            <Contact/>
            <Form/>
         </div>
         <div className="">
         <iframe 
          title="map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.6076853247228!2d72.84558678224059!3d19.24100063132094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e095555555%3A0xd5af546c5348e8ec!2sClub%20Aquaria%20Enterprises!5e0!3m2!1sen!2sin!4v1709996724852!5m2!1sen!2sin" 
         width="100%" height="600" style={{border:"0"}}  loading="lazy" ></iframe>

         </div>
        </>
    )
}
 export default ContactDetail;