import { useState } from "react";
import { SiQuantconnect } from "react-icons/si";
import {RxHamburgerMenu} from "react-icons/rx"

const FirstHeader = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    setScroll(!scroll);
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);

  return (
    <div>
     {
      scroll?  <div className="w-full h-[60px] bg-white  shadow-sm transition-all duration-300 flex justify-center items-center text-white fixed ">
      <div className="flex justify-between items-center w-[95%]  ">
        <div className=" flex items-center">
          <SiQuantconnect className="text-3xl text-purple-600 max-sm:text-2xl" />
        </div>
        <div className="flex">
        <div className="hidden max-sm:flex text-2xl max-sm:text-purple-600 cursor-pointer hover:scale-100 hover:text-purple-400 duration-500"><RxHamburgerMenu/></div>

          <button className="mr-7 px-4 py-2 bg-purple-600 flex items-center rounded-lg text-white font-medium max-sm:hidden">
            Get Started
          </button>
          <button className=" px-4 py-2 bg-purple-600  text-white flex items-center rounded-lg max-sm:hidden">
            Contact
          </button>
        </div>
      </div>
    </div> :  <div className="w-full h-[60px] bg-purple-600 flex justify-center items-center 
    transition-all duration-300 text-white fixed ">
        <div className="flex justify-between items-center w-[95%]  ">
          <div className=" flex items-center">
            <SiQuantconnect className="text-3xl max-sm:text-2xl" />
          </div>
          <div className="flex">
          <div className="hidden max-sm:flex text-3xl max-sm:text-white cursor-pointer hover:scale-100 hover:text-purple-400 duration-500"><RxHamburgerMenu/></div>
            <button className="mr-7 px-4 py-2 bg-white flex items-center rounded-lg text-purple-600 font-medium max-sm:hidden">
              Get Started
            </button>
            <button className=" px-4 py-2 bg-white  text-purple-600 flex items-center rounded-lg max-sm:hidden ">
              Contact
            </button>
          </div>
        </div>
      </div>
     }
    </div>
  );
};

export default FirstHeader;
