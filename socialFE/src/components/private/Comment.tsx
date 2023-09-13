const Comment = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[10px]">
      <div className="w-[95%]">
        <div className="flex ">
          <div className="border w-[30px] h-[30px] rounded-[50%] mr-[10px]">
            <img src="" alt="" />
          </div>
          <div className="flex  ">
            <div className="mr-[10px] text-[12px]">Francis Uzoigwe</div>
            <div className="text-[10px] font-medium">2 years ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
