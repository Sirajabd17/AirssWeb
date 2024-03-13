const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-footerbg px-24 py-10">
          <div className="upperleft flex justify-between">
            <img src="Image/siteLogo/airssLogoWhite.svg " alt="" />
            <div className="upperright  ">
              <h1 className=" font-opensans font-normal text-base text-white mb-4"> Get the freshest news from us </h1>
              <div className=" flex space-x-4 ">
                <input type="text" placeholder="Your email address..." 
                
                className="px-2 rounded-lg text-base font-normal font-opensans w-[272px] placeholder-footerText"
                
                />
                <div className="">
                  <button
                    type="submit"
                    className=" py-3 px-5  flex items-center  gap-2 border border-transparent  text-white font-opensans text-base font-bold rounded-br-3xl rounded-tl-3xl rounded-bl-3xl  bg-Navbarhover  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span>Subscribe</span>
                    <img
                      src="/Image/siteLogo/arrowRight.svg"
                      alt="arrow right"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-7 bg-footerBreakLine border-0 "/>
          
          <div className="downleft flex justify-between ">
            <div className=" flex  text-center">
             <span className=" text-footerText text-xs font-normal font-opensans  border-r-[1px] border-footerText pr-6 ">Term & Conditions</span>
             <span className=" text-footerText text-xs font-normal font-opensans  border-r-[1px] border-footerText px-6 "> Private Policy</span>

             <span className=" text-footerText text-xs font-normal font-opensans  border-r-[1px] border-footerText px-6 ">Accessibility</span>

             <span className=" text-footerText text-xs font-normal font-opensans  border-r-[1px] border-footerText px-6 ">Legal</span>

             </div>
             <div className="downright ">
                <h1  className="font-opensans font-normal text-xs text-footerText"> Design with love ©JalebiDesignStudio 2023 All right reserved</h1>

             </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
