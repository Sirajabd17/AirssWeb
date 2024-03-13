import { useState } from "react";
import { NavbarName } from "../constants/SocialMediaIcon";
 
const NavbarDown=()=>{
    const [activeSection, setActiveSection] = useState(null);
    const handleNavClick=(id)=>{
        setActiveSection(id)
     const element=document.getElementById(id)
     if(element){
        element.scrollIntoView({behavior:"smooth"})
     }
    }
    return(
        <>
        <header className="  ">
           <div className=" flex  justify-between ">
              <img  className="ml-[72px] mt-2" src="/Image/siteLogo/AirssLogo.svg" alt="site logo "/>
             <nav className=" flex  ">
                {
                    NavbarName.map((data)=>(
                        <a key={data.id}
                          href={`#${data.id}`}
                          onClick={() => handleNavClick(data.id)}
                          className={`cursor-pointer  p-7 font-cairo font-bold text-base border-r-[1px] border-gray-300 ${activeSection===data.id ?'bg-Navbarhover text-white':''}`}
                        >
                        {data.content}
                        </a>
                    ))
                }

             </nav>

              
           </div>
        </header>
        </> 
    )
}
export default NavbarDown;