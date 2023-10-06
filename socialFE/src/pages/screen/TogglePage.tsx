import { ImCancelCircle } from "react-icons/im";

const TogglePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "rgba( 255, 255, 255, 0.15 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
      }}
      className="fixed w-full h-[100vh] top-0 left-0 flex items-center justify-center flex-col"
    >
      <div className="z-[600]">
        <ImCancelCircle />
      </div>

      <div>Hello World</div>
    </div>
  );
};

export default TogglePage;
