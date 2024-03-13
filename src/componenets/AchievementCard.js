import { useState } from "react"

const AchievementCard = ({ data }) => {
    let [currentIndex , setCurrentIndex]=useState(0)
  const   handalChange = (val) =>{
    setCurrentIndex( currentIndex+ val);
    }

  return (
    <>
      <div className="">
        <div className=" ">
          {data && data.filter((ele, ind)=>ind===currentIndex).map((item, id) => (
            
            <div className=" flex justify-center items-center" key={id}>
              <img
                className="w-3/5 h-2/3 "
                src={`/Image/AchievementSlider/${item.Image}`}
                alt="achiementImage"
              />

              <div className=" bg-white -ml-12 border px-6 py-16 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl ">
                <div className="button  flex justify-end gap-4">
                  <button className="bg-red-300" disabled={currentIndex<1} onClick={()=>{handalChange(-1)}}>
                    <img
                      src="/Image/Testimonial/LeftArrow.svg"
                      alt="arrow img"
                    />
                  </button>
                  <button className=" bg-red-400" disabled={currentIndex>3} onClick={()=>{handalChange(1)}}>
                    <img
                      src="/Image/Testimonial/RightArrow.svg"
                      alt="arrow img"
                    />
                  </button>
                </div>
                <div className="pr-8">
                <h1 className="font-opensans font-bold text-xl my-3">
                  {" "}
                  {item.Name}
                  {currentIndex}
                </h1>
                <p className="text-base font-normal font-opensans text-AchievementCard">
                  {item.Description}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AchievementCard;
