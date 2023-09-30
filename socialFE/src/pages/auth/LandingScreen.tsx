import picture from "../../assets/welcome-bg.jpg"
const LandingScreen = () => {
  return (
  <div>
      <div className="w-full h-auto flex justify-center bg-purple-600">
      <div className="mt-16 w-[95%] h-auto flex  flex-col container">
        <div className="flex justify-center items-center relative w-full min-h-[85vh] max-sm:min-h-[30vh] bg-purple-300">
          <img src={picture} alt="" className="w-full h-full object-contain"/>
          <div className="absolute w-full h-full bg-purple-600 opacity-80">hello</div>
        </div>
      </div>
    </div>
    <div>Hello World</div>
  </div>
  );
};

export default LandingScreen;
