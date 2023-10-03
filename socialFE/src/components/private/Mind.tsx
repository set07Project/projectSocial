import { BsFillCameraFill, BsPencilSquare } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'

const Mind = () => {
  return (
    <div>
          <div className="px-[20px] text-3xl font-black text-black max-sm:text-xs">
            Activity Feed
          </div>
          <div className="px-2 py-2 border border-gray-400 rounded-md mt-3 bg-white max-sm:px-1 max-sm:py-1">
            <div className="flex items-center ">
              <img
                src=""
                alt=""
                className="max-sm:w-[25px] max-sm:h-[25px] w-[40px] h-[40px] rounded-[50%] bg-green-400 mr-3"
              />

              <input
                type="text"
                placeholder="Share what is on your mind user?.username"
                className="w-[90%] outline-none text-[14px] max-sm:placeholder:text-[10px] max-sm:text-[10px]"
              />
            </div>
            <div className="">
              <hr className="mt-[15px] border-[1px] text-gray-700 max-sm:mt-[7px]"/>
              <div className="flex text-gray-500 w-auto mt-2">
                <div>
                  <BsFillCameraFill className="text-lg mr-[15px] cursor-pointer" />
                </div>
                <div>
                  <FaVideo className="text-lg mr-[15px] cursor-pointer" />
                </div>
                <div>
                  <BsPencilSquare className="text-lg mr-[15px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
         {/* <div className="flex justify-between mt-[20px] items-center">
          <div className="flex">
          <div className="text-[13px] mr-[50px] cursor-pointer">All Update</div>
          <div className="text-[13px] cursor-pointer">Likes</div>
          </div>
          <div className="relative flex items-center">
            <div className="absolute"><RiSearch2Line className="text-xl ml-1 text-gray-700"/></div>
            <input type="text" className="border border-[gray] rounded-[4px] outline-none pl-7 placeholder:text-[12px] text-[12px] py-2 
            " placeholder="Search"/>
          </div>
         </div> */}
          {/* <div className="mt-6 max-h-[900px] bg-green-400 rounded-md">
            <div className="w-[20px] h-[900px] "></div>
          </div> */}
    </div>
  )
}

export default Mind