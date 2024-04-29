import Features from "./Features";
const HeroSection = () => {
  return (
    <>
      <section>
        <div className=" relative ">
          <img className="" src="/Image/HeroSection.png" alt="" />
          <div className="absolute w-[574px] ml-20 mt-24   text-white  top-2">
            <h1 className="font-cairo font-bold text-6xl ">
              {" "}
              Where Fitness & Speed Skating is life.
            </h1>
            <p className=" font-semibold font-source text-4xl my-8 ">
              {" "}
              Welcome to the neighbourhood's toughest Airss academy.
            </p>
            <div className="">
              <button
                type="submit"
                className=" py-3 px-6  border border-transparent  text-white font-opensans text-base font-bold rounded-br-3xl rounded-tl-3xl rounded-bl-3xl  bg-Navbarhover  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>Book a Free Trails Demo</span>
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-black ">
          <Features />
        </div>
      </section>
    </>
  );
};
export default HeroSection;
