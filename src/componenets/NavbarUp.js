import { SocialMediaIcon } from "../constants/SocialMediaIcon";
const NavbarUp = () => {
  
  return (
    <>
      <header className="bg-bgNavbar flex justify-between px-[72px] py-5 font-cairo ">
        <div className="flex  gap-12 ">
          <div className="calling flex gap-2 ">
            <img src="/Image/socialMedia/call-calling.svg" alt="call" />
            <div className="">
              <h1 className="text-sm font-normal  text-white ">
                {" "}
                Call us know{" "}
              </h1>
              <h1 className="text-sm font-bold text-white"> 8080713777</h1>
            </div>
          </div>

          <div className="location flex gap-2">
            <img src="/Image/socialMedia/location.svg" alt="call" />
            <div>
              <h1 className="text-sm font-normal  text-white "> Location</h1>
              <h1 className="text-sm font-bold text-white">
                {" "}
                Club Aquaria Mumbai
              </h1>
            </div>
          </div>
          <div className="calender flex gap-2">
            <img src="/Image/socialMedia/calendar.svg" alt="call" />
            <div>
              <h1 className="text-sm font-normal   text-white ">
                Monday-Wednesday-Friday
              </h1>
              <h1 className="text-sm font-bold text-white">
                {" "}
                06:00PM - 09:00PM
              </h1>
            </div>
          </div>
        </div>

        <div className="socialmedia flex justify-between gap-6 ">
        {SocialMediaIcon.map((data, id) => (
        <a
          key={id}
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"   
        >
          <img src={`/Image/socialMedia/${data.image}`} alt={data.name}  />
        </a>
      ))}
        </div>
      </header>
    </>
  );
};
export default NavbarUp;
