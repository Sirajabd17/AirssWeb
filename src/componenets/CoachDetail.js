const CoachDetail = () => {
  return (
    <>
      <section className=" relative">
        <img src="/Image/AchievementSlider/BigDivder.svg" className="absolute -top-10  -z-10" alt="divider" />
        <div className="flex justify-end mt-10 items-start ">
          <div className="main w-1/2  mt-28 ml-16">
            <div className="">
              <h1 className="font-cairo font-extrabold text-5xl mb-5">
                {" "}
                Our coaches is ready to help our skaters!
              </h1>
              <h1 className="font-opensans font-normal text-xl text-CoachDetail mb-5">
                We love what we do and we do it with passion. We value the
                experimentation of the message and smart incentives.{" "}
              </h1>
            </div>

            <div className="imagecard relative  ">
              <div className="overflow-hidden  ">
                <img
                  className="  object-cover   transition-transform duration-300 transform hover:scale-150"
                  src="/Image/Coachs/AnilCoach.svg"
                  alt=""
                />
              </div>
              <div className="Coach  flex gap-6 absolute left-10 -bottom-14  ">
                <div className="Coachname  bg-white w-72 border-t-8  shadow-md shadow-gray-200 border-Navbarhover p-5 text-center rounded-tl-3xl rounded-bl-3xl rounded-br-3xl ">
                  <h1 className=" font-opensans font-bold text-2xl">
                    Anil Pednekar
                  </h1>
                  <h1 className="font-opensans font-normal text-lg  ">
                    Chief Instructor
                  </h1>
                </div>
                <div className="rating flex mt-10 ">
                  <img src="/Image/Testimonial/RedRating.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="text-AchievementCard mt-20 ">
              <h1>
                Being a sports enthusiast, I started my skate career with a few
                very well-known and knowledgeable skate trainers in Mumbai in
                the year 1997. The excitement and fun drove me to this sport.
                After learning the basics of roller skating I took to
                competitive speed skate coaching.
              </h1>

              <p className="my-6">
                Since then I am a regular attendee in the District, State and
                National championship training kids of various age groups round
                the year to achieve their vision of getting on to the top of the
                league.
              </p>
            </div>

            <div className=" button">
              <button
                type="submit"
                className=" py-3 px-6  border border-transparent  text-white font-opensans text-base font-bold rounded-br-3xl rounded-tl-3xl rounded-bl-3xl  bg-Navbarhover  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>Book a Free Trails Demo</span>
              </button>
            </div>
          </div>
          <div className="imageleft  right-0  ">
            <img src="/Image/Coachs/AnilSir.svg " alt="" />
          </div>
        </div>
       <div>
        <img
          className=""
          src="/Image/AchievementSlider/BigDivder.svg"
          alt="divider"
          />
          </div> 
      </section>
    </>
  );
};
export default CoachDetail;
