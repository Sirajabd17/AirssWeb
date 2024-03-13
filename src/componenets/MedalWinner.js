 import MedalWinnerCard from "./MedalWinnerCard";
import MedalWinnerCardTwo from "./MedalWinnerCardTwo";
 const MedalWinner=()=>{

    return(
        <>
        <section  id="1" className= "bg-MedalBg">
             <div className="text-white pl-16 pt-6">
              <h1 className="font-extrabold text-5xl font-cairo"> Top 10 Achievers </h1>
              <p className="font-cairo font-normal ">Being such a reliable member of our team. We appreciate your work ethic so much!</p>
             </div>
          <div className="pl-36 mt-10">
            <MedalWinnerCard/>
          </div>
          <div className="pl-36 mt-10">
            <MedalWinnerCardTwo/>
          </div>

          <div className="text-center py-12">
              <button
                type="submit"
                className=" py-3 px-6  border border-transparent  text-white font-opensans text-base font-bold rounded-br-3xl rounded-tl-3xl rounded-bl-3xl  bg-Navbarhover  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="underline">View All Achievers</span>
              </button>
            </div>
        </section>
        </>
    )
}
export default MedalWinner;