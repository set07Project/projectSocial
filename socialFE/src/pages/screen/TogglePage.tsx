import { ImCancelCircle } from "react-icons/im";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changedToggle } from "../../global/GlobalFile";

const TogglePage = () => {
    const dispatch = useDispatch();
//   const toggle = useSelector((state: any) => state.toggle);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "rgba( 255, 255, 255, 0.15 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
      }}
      className="fixed w-full h-[100vh] top-0 left-0 flex  justify-center flex-col"
    >
      <div className="w-full flex flex-col h-screen items-center ">
        <div className="z-[600]  right-0 w-full h-[100px] flex items-center justify-center " onClick={()=>{
            dispatch(changedToggle())
        }}>
          <ImCancelCircle className="text-3xl max-sm:text-xl"/>
        </div>
        <div className="max-w-[500px] min-h-[400px] bg-green-300 z-[600] flex items-center flex-col">
          <div className="min-w-[450px] mt-[10px] h-[250px] bg-red-600">
            Helo
          </div>
        </div>
      </div>
    </div>
  );
};

export default TogglePage;
