import { AchievementMission } from "../constants/SocialMediaIcon";

import AchievementCard from "./AchievementCard";
const Achievement = () => {
  return (
    <>
    <div className="relative">
     <img className=" "src="/Image/AchievementSlider/Divider.svg "  alt="divider"/>
      <section className="main px-16 pb-16 pt-8">
        
        <div className="heading absolute top-12 ">
          
         
          <h1 className="font-cairo font-extrabold text-5xl  mb-5 ">Who we are</h1>
         
          
          <h1 className=" font-normal text-base font-opensans  text-AchievementCard mb-1 ">AIRSS stands for <span className="text-Navbarhover text-base font-opensans font-bold "> Anils Institute of Roller & Speed Skating. </span></h1>
          <h1  className="font-normal text-base font-opensans text-AchievementCard ">A premiere training institute in the field of Roller & Speed Skating providing the best of the trainings & tips for the Do's & Don'ts on & off skate in and around Mumbai.</h1>
        </div>
      
      <div className="slider flex justify-center " >
        <div className="">
        {/* <div className="  overflow-hidden relative  flex">
          {
            AchievementMission.map((data,id)=>(
                <div key={id} className=" " >

                     <img  className= "" src={`/Image/AchievementSlider/${data.Image}`} alt="achiementImage"/>
                     <div className="w-[572px] h-[300px] border px-6 py-16 ">
                     <h1 className="font-opensans font-bold text-xl"> {data.Name}</h1>
                     <p className="text-base font-normal font-opensans text-AchievementCard">{data.Description}</p>
                    </div>
                  
                    </div>
               
            ))
          }


        </div> */}
        <AchievementCard data={AchievementMission}/>

      </div>

      </div>
      </section>
      </div>
    </>
  );
};
export default Achievement;
