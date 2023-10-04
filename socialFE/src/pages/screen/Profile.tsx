import Blog from "../../components/private/Blog";
import pix from "../../assets/react.svg";
// import pix2 from "../../assets/bg.jpg"
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";


const Profile = () => {
  return (
    <div className=" h-[100%] mt-[68px]    ">
      <div className=" h-full justify-between  flex ">
        
        <div className="min-h-[100vh]  min-w-[400px] ml-[10px] flex justify-end ">
          <div className="w-[1050px] h-[655px]  max-sm:w-[400px]">
            <div className="w-[1050px] h-[570px] border-[4px] rounded-[10px]  max-sm:w-[400px] ">
              <div className="w-full h-[48%] border flex justify-center items-end bg-blue-500  relative z-[-20] max-sm:w-[400px] ">
                <div className="w-[170px] h-[170px] border rounded-[50%] mb-[-50px] relative flex items-end justify-center object-cover  ">
                  <img src={pix} alt="" className="absolute w-full h-full" />
                  <div className="w-[80px] h-[30px] text-white mb-[-10px] flex items-end justify-center bg-blue-600 rounded z-50">
                    Admin
                  <div className="w-[20px] h-[20px] border rounded-[50%] absolute top-0 right-9 bg-green-600 z-50"></div>
                </div>
                  </div>
              </div>
              <div className="w-full  mt-[70px] flex justify-center">
                <div className="flex flex-col justify-center items-center w-[250px]  text-gray-500">
                  <div className="text-[30px] text-black  font-serif">John</div>
                  <div className="flex items-center my-2">
                    @john{" "}
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-black mx-2"></div>{" "}
                    joined Oct 12 2023
                  </div>
                  <div className="flex justify-between w-[200px]">
                    <div>
                    <span className="text-black font-bold">13</span> followers
                    </div>
                    <div>
                    <span className="text-black font-bold">16</span>  following
                    </div>
                  </div>
                  <div className="flex mt-6 text-white">
                    <div className="w-[30px] h-[30px] rounded-[50%] border mx-2 flex justify-center items-center text-xl bg-gray-900 hover:cursor-pointer">
                      <BsFacebook />
                    </div>
                    <div className="w-[30px] h-[30px] rounded-[50%] border mx-2 flex justify-center items-center text-xl bg-gray-900 hover:cursor-pointer">
                      <BsYoutube />
                    </div>
                    <div className="w-[30px] h-[30px] rounded-[50%] border mx-2 flex justify-center items-center text-xl bg-gray-900 hover:cursor-pointer">
                      <BsTwitter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1050px] h-[85px] bg-red-00 flex justify-between items-center max-sm:w-[400px]">
              <div>Timeline</div>
              <div className="border-b-2  border-red-600 pb-2 mt-3 max-sm:hidden">
                Profile
              </div>
              <div className="flex justify-center items-center text-[17 px] hover:cursor-pointer">
                <div className="hover:text-red-600 max-sm:hidden">connections</div>
                <div className="w-[20px] h-[20px] border ml-1.5 flex justify-center items-center text-[10px] font-bold">
                  12
                </div>
              </div>
              <div className="flex justify-center items-center text-[17 px] hover:cursor-pointer">
                <div className="hover:text-red-600">Groups</div>
                <div className="w-[20px] h-[20px] border ml-1.5 flex justify-center items-center text-[10px] font-bold">
                  14
                </div>
              </div>
              
              <div className="flex justify-center items-center text-[17 px] hover:cursor-pointer">
                <div className="hover:text-red-600 max-sm:hidden" >Courses</div>
                <div className="w-[20px] h-[20px] border ml-1.5 flex justify-center items-center text-[10px] font-bold">
                  26
                </div>
              </div>
              <div className="flex justify-center items-center text-[17 px] hover:cursor-pointer">
                <div className="hover:text-red-600 max-sm:hidden">Documents</div>
              </div>
              <div className="flex justify-center items-center text-[17 px] hover:cursor-pointer">
                <div className="hover:text-red-600 max-sm:hidden">Photos</div>
                <div className="w-[20px] h-[20px] border ml-1.5 flex justify-center items-center text-[10px] font-bold">
                  44
                </div>
              </div>
              <div className="flex justify-center items-center text-[17 px] hover:cursor-pointer">
                <div className="hover:text-red-600">Videos</div>
                <div className="w-[20px] h-[20px] border ml-1.5 flex justify-center items-center text-[10px] font-bold">
                  1
                </div>
              </div>
              <div className="text-[30px] hover:cursor-pointer mr-4">
                <BsThreeDots />
              </div>
            </div>
            <div className="w-[1050px] h-[420px] border-[5px] rounded-[10px] flex items-center flex-col max-sm:w-[400px]
            ">
              <div className="w-[98%] h-[75px] border-b-2 flex justify-between items-center ">
                <div className="font-bold">General Information</div>
                <div className="w-[80px] h-[40px] border flex justify-center items-center rounded-[7px] hover:cursor-pointer">
                  Edit
                </div>
              </div>
              <div className="w-[98%]  ">
                <div className="flex flex-col">
                  <div className="flex my-5">
                    <div className="mr-[150px] max-sm:mr-[40px]">First Name</div>
                    <div>John</div>
                  </div>
                  <div className="flex my-5">
                    <div className="mr-[150px] max-sm:mr-[40px]">Last Name</div>
                    <div>Smith</div>
                  </div>
                  <div className="flex my-5">
                    <div className="mr-[150px] max-sm:mr-[40px]">Nick Name</div>
                    <div>George</div>
                  </div>
                  <div className="flex my-5">
                    <div className="mr-[160px] max-sm:mr-[40px]">Birth Date</div>
                    <div>September 15, 2023</div>
                  </div>
                  <div className="flex my-5">
                    <div className="mr-[180px] max-sm:mr-[60px]">Gender</div>
                    <div>Male</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1050px] h-[200px] border-[5px] rounded-[10px] flex items-center flex-col mt-[50px] max-sm:w-[400px]">
              <div className="w-[98%] h-[95px] border-b-2 flex justify-between items-center">
                <div className="font-bold">Work Experience</div>
                <div className="w-[80px] h-[40px] border flex justify-center items-center rounded-[7px] hover:cursor-pointer ">
                  Edit
                </div>
              </div>
              <div className="w-[98%]">
              <div className="flex my-8">
                  <div className="mr-[150px]">Job Title</div>
                    <div>Manager</div>
                  </div>
              </div>
            </div>
            <div className="w-[1050px] min-h-[270px] border-[5px] rounded-[10px] flex items-center flex-col mt-[50px] max-sm:w-[400px]">
              <div className="w-[98%] h-[98%px] border-b-2 flex justify-between items-center">
                <div className="font-bold">Biography</div>
                <div className="w-[80px] h-[40px] border flex justify-center items-center rounded-[7px] hover:cursor-pointer">
                  Edit
                </div>
              </div>
              <div className="w-[98%]">
              <div className="flex my-8">
                  <div className="mr-[150px] ">Biography</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam sed mollitia laudantium, quos repellendus enim incidunt fugit harum quam consequuntur obcaecati suscipit quo ea esse perspiciatis atque iusto dicta saepe!</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="max-h-[460px] w-[290px] max-sm:hidden mr-11 "> */}
        <div className="max-sm:hidden max-md:hidden h-full ">
          <Blog />
          <Blog stick="sticky top-[90px] z-[-50]" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Profile;
