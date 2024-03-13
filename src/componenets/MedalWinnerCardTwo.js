import { useState } from "react";
import { StudentWinnerTwo } from "../constants/SocialMediaIcon";

const MedalWinnerCardTwo = () => {
  let [currentIndex, setCurrentIndex] = useState(0);
  const handalChange = (val) => {
    setCurrentIndex(currentIndex + val);
  };

  return (
    <>
      <section>
        <div className=" flex gap-14 items-center  ">
          <div className="rightimage w-2/4 ">
            {StudentWinnerTwo &&
              StudentWinnerTwo.filter((data, id) => id === currentIndex).map(
                (item, index) => (
                  <div className=" " key={index}>
                    {" "}
                    <img
                      className=" w-11/12 h-2/4"
                      src={`/Image/Coachs/${item.Image}`}
                      alt="StudentWinnerTwo"
                    />
                  </div>
                )
              )}

            <div className="button  flex justify-center gap-4">
              <button
                className="bg-red-300"
                disabled={currentIndex < 1}
                onClick={() => {
                  handalChange(-1);
                }}
              >
                <img src="/Image/siteLogo/backArrow.svg" alt="arrow img" />
              </button>
              <button
                className=" bg-red-400"
                disabled={currentIndex > 4}
                onClick={() => {
                  handalChange(1);
                }}
              >
                <img src="/Image/siteLogo/backArrow.svg" alt="arrow img" />
              </button>
            </div>
          </div>
          <div className="leftcontent w-2/5  ">
            <div className="font-opensans mb-4 ">
              <h1 className="font-bold text-4xl text-white">Anuja Bandiwadekar</h1>
              <p className="font-normal text-sm text-MedalAddress "> Mumbai</p>
            </div>
            <div className="font-opensans ">
              <p className="font-normal text-sm  text-MedalAddress">
                {" "}
                Most notable Achiever's of our team Miss. Anuja Bandiwadekar
                Skating Since 1999National Champion 2005 (SGFI & RSFI) 34
                National Medals (SGFI & RSF)RECOGNITIONShiv Chhatrapati Award
                for the best Sports Woman in Skating (Highest Sporting Award of
                Maharashtra State) STARTED SKATING AT THE AGE OF 4 YEARS AND
                SKATING FOR THE PAST 17 YEARS Was awarded Shiv Chhatrapati Award
                on 17th February 2018 in rollerSpeed skating for the year
                2015-2016. lt is the highest sports award in Maharashtra.
                <br />
                <br />
                Participated and won in 15 national level competitions and more
                than25 state level Competitions2 National championship titles34
                National medals till date70 plus state level medals11 State
                championship titles200 plus medals at various competitionsMumbai
                district champion for last 5 years in above 16 women's
                categoryMaharashtra state champion for last 3 years in above 16
                women's categoryRepresented India and secured 2 bronze and 1
                silver at open Internationals in 2011
              </p>
            </div>

            <div>
              <button
                type="submit"
                className=" py-3  flex items-center  gap-2   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="font-semibold text-base text-Navbarhover">
                  See More
                </span>
                <img src="/Image/siteLogo/RightArrow.svg" alt="arrow right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MedalWinnerCardTwo;
