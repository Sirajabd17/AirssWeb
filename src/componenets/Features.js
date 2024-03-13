import { FeatureIcon } from "../constants/SocialMediaIcon"

const Features=()=>{

    return(
        <>
         <section className=" bg-white">
        <div  className="bg-black rounded-bl-[60px]  rounded-br-[60px] flex justify-between  px-16 pb-10"> { FeatureIcon.map((data,id)=>(
              
          <div  className="  bg-featurecard w-[304px] h-48 p-8 text-white rounded-tl-xl rounded-bl-xl rounded-br-xl" key={id}>
             <div className="flex space-x-2">
             <img src={`/Image/siteLogo/${data.icon}`} alt="featureIcon"/>
            <h1 className="font-cairo font-bold text-base mb-3 hover:text-Navbarhover" >{data.achivement}</h1>
             </div>
            <p className=" font-opensans font-semibold text-sm text-gray-400">{data.description}</p>
          </div>    
        
        ))
                

            }

        </div>

         </section>
         
        </>
    )
}
export default Features;