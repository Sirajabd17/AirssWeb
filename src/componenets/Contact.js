const Contact=()=>{
    return(
        <>
         <div className="w-2/5">
            <div className=" bg-contactus px-24 pt-20 pb-36 rounded-b-3xl text-white">
                <h1 className="font-cairo font-extrabold text-5xl mb-20">Contact Us</h1>
                <div className="flex gap-6">
                    <img src="/Image/contactLogo/phone.svg" alt="contact"/>
                    <h1 className="font-semibold font-opensans text-xl">+91 80807 13777</h1>
                </div>
                <div className="flex gap-6 my-16">
                    <img src="/Image/contactLogo/mail.svg" alt="contact"/>
                    <h1 className="underline  font-opensans font-semibold text-xl"> airssindia@gmail.com</h1>
                </div>
                <div className="flex gap-6">
                    <img  className=" "src="/Image/contactLogo/location.svg" alt="contact"/>
                    <h1 className="underline  font-opensans font-normal text-xl">
                    Club Aquaria Shanti Ashram, Devi Das Ln, Near St.Lawrence High School, Borivali West, Mumbai, Maharashtra 400103
                    </h1>
                </div>
               </div>
         </div>
        </>
    )
}
export default Contact;