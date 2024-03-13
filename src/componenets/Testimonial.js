import TestimonialCard from "./TestimonialCard";
const Testimonial=()=>{
    return(
        <>
          <div className="bg-testinomialBg pb-14 ">
            <div className="px-36 pt-10 mb-24 flex  justify-between">
              <div className="text-white   flex flex-col">
                <h1 className="font-cairo font-bold text-5xl">
                   Testimonial
                </h1> 
                <p className="font-source font-normal text-xl  text-white opacity-60  "> Don't just take our word for it - see what actual users of our service<br/>have to say about their experience.</p>
                </div>
                <div className=" ">
                <div className="button  flex gap-4" >
                 <button className=" bg-testinomialCard p-6 rounded-md">
                  <img src="/Image/Testimonial/LeftArrow.svg" alt="arrow img"/>
                 </button>
                 <button className="bg-testinomialCard p-6 rounded-md">
                  <img src="/Image/Testimonial/RightArrow.svg" alt="arrow img"/>
                 </button>
                </div>
                </div>
            </div>
            <div className="pl-20">
                <TestimonialCard/>
            </div>

              

          </div>

        
        </>
    )
}
export default Testimonial;