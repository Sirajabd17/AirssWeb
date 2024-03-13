import { TestimonialData } from "../constants/SocialMediaIcon";

const TestimonialCard=()=>{

    return(
        <>
        <div >
            <div className="flex  gap-6 justify-between">
              {
                TestimonialData.map((data,id)=>(
                      <div key={id} className="w-[360px] bg-testinomialCard   px-5 py-10 text-center "> 
                         <p className="font-source text-base font-normal text-white ">{data.Review}</p>
                         <div className="grid justify-items-center  ">
                         <img  className="my-5 "src={data.Rating} alt="rating"/>
                         <img src={data.Image} alt="people"/>
                         <h1 className="  font-semibold text-lg text-white">{data.Name} </h1>
                         <h1 className=" font-normal text-sm text-white opacity-60">{data.Role}</h1>
                          </div>

                        </div>
                )
                     

                )
              }  
            </div>


        </div>
        

        </>
    )
}
export default TestimonialCard;