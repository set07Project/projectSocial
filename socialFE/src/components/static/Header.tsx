import { TiMessages } from "react-icons/Ti";
import { FaUserFriends, FaStore } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { FcAdvertising } from "react-icons/fc";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <div className="flex justify-between px-[35px] py-4 bg-white ">
        {/* {logo side} */}
        <div className="leading-4 italic max-sm:text-[12px]">
          <Link to="/chat">
          <div className="px-1 py-1">Aj</div>
          </Link>
          <div className="hidden max-sm:flex">
            <AiOutlineDown />
          </div>
        </div>
        {/* {Navigation side} */}
        <div className="flex items-center justify-center max-md:hidden max-sm:flex">
          <div className="px-1 py-[1px] rounded-[4px] mr-[45px] max-md:mr-[35px] transition-all duration-300 cursor-pointer  hover:bg-gray-300 max-sm:mr-2 max-sm:ml-[5px] max-sm:text-xs ">
            <HiHome className="text-3xl p-1 max-sm:text-xl" />
          </div>
          <div className="flex justify-center items-center px-2  relative py-[2px] rounded-[4px] mr-[45px] max-md:mr-[35px] transition-all duration-300 cursor-pointer  hover:bg-gray-300 max-sm:text-xs max-sm:mr-3">
            <div>
              <TiMessages className="text-3xl p-1 max-sm:text-xl" />
            </div>
            <div className="w-[15px] h-[15px] items-center justify-center flex text-[11px] absolute text-white ml-4 mt-[-5px] bg-red-500 rounded-[50%]">
              2
            </div>
          </div>
          <div className="flex justify-center items-center px-2  max-md:mr-[35px] relative py-[2px] rounded-[4px] mr-[45px] max-sm:mr-3 transition-all duration-300 cursor-pointer  hover:bg-gray-30 max-sm:text-xs ">
            <div>
              <FaUserFriends className="text-3xl p-1 max-sm:text-xl" />
            </div>
            <div className="w-[15px] h-[15px] items-center justify-center flex text-[11px] absolute text-white ml-4 mt-[-5px] bg-red-500 rounded-[50%]">
              2
            </div>
          </div>
          <div className="px-1 py-[1px] rounded-[4px] max-md:mr-[35px] mr-[45px]  transition-all duration-300 cursor-pointer  hover:bg-gray-300 max-sm:text-xs max-sm:mr-3">
            <FaStore className="text-3xl p-1 max-sm:text-xl" />
          </div>
          <div className="px-1 py-[1px] rounded-[4px] mr-[45px] max-md:mr-[35px] max-sm:text-xs transition-all duration-300 cursor-pointer  hover:bg-gray-300 max-sm:mr-3">
            <FcAdvertising className="text-3xl p-1 text-black max-sm:text-xl" />
          </div>
          <div className="flex">
            <div className="flex justify-center max-md:mr-[35px] items-center px-1 max-sm:text-xs relative py-[1px] rounded-[4px] mr-[45px]  transition-all duration-300 cursor-pointer  hover:bg-gray-300 max-sm:mr-3">
              <div>
                <IoMdNotifications className="text-3xl p-1 max-sm:text-xl" />
              </div>
              <div className="w-[15px] h-[15px] items-center justify-center flex text-[11px] absolute text-white ml-4 mt-[-5px] bg-red-500 rounded-[50%]">
                1
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-2 rounded-md py-1 items-center hover:bg-slate-300 cursor-pointer duration-300 transition-all max-sm:hidden">
          <div className="py-[2px] px-[2px] font-Poppin text-[14px] mr-2 font-semibold max-sm:text-[12px]">
            John
          </div>
          <div>
            <img
              src=""
              alt="Profile"
              className="w-[35px] h-[35px] rounded-[50%] bg-white max-sm:w-[25px] max-sm:h-[25px] max-sm:rounded-[50%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
