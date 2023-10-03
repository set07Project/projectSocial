
import {BsFillCameraFill} from "react-icons/bs"
const RegisterScreen = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-purple-300">
      <div className="min-w-[500px] min-h-[400px] bg-white flex items-center flex-col rounded-xl shadow-lg">
        <div className="mt-4 min-w-[100px] min-h-[100px] rounded-[50%] border flex items-center border-black justify-center  relative">
          <img src="" alt="" className="w-[100px] h-[100px] object-cover overflow-hidden rounded-[50%]"/>
          <input type="file" id="img" className="hidden"/>
          <label className="absolute bg-white mt-16 ml-16 hover:text-gray-500 transition-all duration-500 cursor-pointer px-2 py-2 border rounded-[50%]" htmlFor="img"><BsFillCameraFill className="text-2xl "/></label>
        </div>
       <div className="mt-5 flex flex-col">
       <div className="relative flex py-2 px-1 border rounded-md border-black ">
          <div className="text-[14px] font-semibold mt-[-19px] ml-[10px] bg-white">Email: </div>
          <div className="min-w-[300px] h-[20px] ">
            <input type="text" className="w-full h-full outline-none " placeholder="example@email.com"/>
          </div>
        </div>
          <div className="flex justify-end items-center text-[11px] text-red-400 font-semibold">Please provide a valid email address</div>
       </div>
       <div className="mt-5 flex flex-col">
       <div className="relative flex py-2 px-1 border rounded-md border-black ">
          <div className="text-[14px] font-semibold mt-[-19px] ml-[10px] bg-white">Name: </div>
          <div className="min-w-[300px] h-[20px] ">
            <input type="text" className="w-full h-full outline-none " placeholder="John Doe"/>
          </div>
        </div>
          <div className="flex justify-end items-center text-[11px] text-red-400 font-semibold">Errors</div>
       </div>
       <div className="mt-5 flex flex-col">
       <div className="relative flex py-2 px-1 border rounded-md border-black ">
          <div className="text-[14px] font-semibold mt-[-19px] ml-[10px] bg-white">Name: </div>
          <div className="min-w-[300px] h-[20px] ">
            <input type="text" className="w-full h-full outline-none " placeholder="John Doe"/>
          </div>
        </div>
          <div className="flex justify-end items-center text-[11px] text-red-400 font-semibold">Errors</div>
       </div>
       <div className="mt-5 flex flex-col">
       <div className="relative flex py-2 px-1 border rounded-md border-black ">
          <div className="text-[14px] font-semibold mt-[-19px] ml-[10px] bg-white">Name: </div>
          <div className="min-w-[300px] h-[20px] ">
            <input type="text" className="w-full h-full outline-none " placeholder="John Doe"/>
          </div>
        </div>
          <div className="flex justify-end items-center text-[11px] text-red-400 font-semibold">Errors</div>
       </div>
      </div>
    </div>
  )
}

export default RegisterScreen