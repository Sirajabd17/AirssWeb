import { useState } from "react";
import { StudentWinner } from "../constants/SocialMediaIcon";

const MedalWinnerCard = () => {
  let [currentIndex, setCurrentIndex] = useState(0);
  const handalChange = (val) => {
    setCurrentIndex(currentIndex+ val);
  };

  return (
    <>
      <section>
        <div className=" flex justify-between items-center ">
          <div className=" w-2/5  ">
            <div className="font-opensans mb-4 ">
              <h1 className="font-bold text-4xl text-white">Sneha Taishete</h1>
              <p className="font-normal text-sm text-MedalAddress "> Mumbai</p>
            </div>
            <div className="font-opensans ">
              <h1 className=" font-bold text-sm text-MedalAddress">
                AISM State Level{" "}
              </h1>
              <p className="font-normal text-sm  text-MedalAddress">
                {" "}
                2 Golds, National Level - 3 GoldsDISTRICT SPORTS ORGANISATION
              </p>
            </div>
            <div className="font-opensans my-6">
              <h1 className=" font-bold text-sm text-MedalAddress">
                {" "}
                Mumbai District Level{" "}
              </h1>
              <p className="font-normal text-sm text-MedalAddress ">
                {" "}
                4 Golds, Mumbai Division Level - 3 Golds, State Level - 3 Golds,
                National Level - 1 Gold, 2 Silver
              </p>
            </div>
            <div className="font-opensans mb-4">
              {" "}
              <h1 className=" font-bold text-sm text-MedalAddress">
                {" "}
                ROLLER SKATING FEDERATION OF INDIA Mumbai District Level{" "}
              </h1>
              <p className="font-normal text-sm  text-MedalAddress">
                3Golds, 1 Silver, Mumbai Division Level - 2 Golds, 2 Silver,
                State Level - 2 Golds, 1 Silver, 1 Bronze, National Level - 1
                Bronze{" "}
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
          <div className="leftImage w-2/4 ">
            {StudentWinner &&  StudentWinner.filter((data,id) => id === currentIndex).map(
                (item, index) => (
                  <div className=" " key={index}>
                    {" "}
                    <img
                      className=" w-11/12 h-2/4"
                      src={`/Image/Coachs/${item.Image}`}
                      alt="studentwinner"
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
        </div>
      </section>
    </>
  );
  };
 export default MedalWinnerCard;
