import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Sider from "../static/Sider";

const Layout = () => {
  return (
    <div className="flex">
      <div className=" justify-end w-full ">
        <Sider />
        <div className="flex justify-end">
          <div className=" w-[calc(100vw-72px)] max-sm:w-full fixed  flex flex-col">
            <Header />
          </div>
         
        </div>
        <div className="flex justify-end">
          <div className=" w-[calc(100vw-79px)] max-sm:w-full  flex flex-col">
            <Outlet />
          </div>
         
        </div>
       
      </div>
    </div>
  );
};

export default Layout;
