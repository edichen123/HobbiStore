import React from "react";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";

const MainSwiper = () => {
  return (
    <div className=" w-full h-screen flex relative p-3 overflow-hidden border border-green-300">
      <div className=" border border-red-600 w-12 h-12 bg-slate-50 rounded-[50%] flex items-center justify-center absolute top-0 bottom-0 left-2 m-auto cursor-pointer opacity-50 z-[2]">
        <ArrowLeftOutlinedIcon />
      </div>

      <div className=" h-full flex transition-all border border-yellow-300">
        <div className=" w-screen h-screen flex items-center border border-purple-600">
          <div className=" flex-1 h-full border border-cyan-400">
            <div className=" h-4/5 border border-black">
              <img
                src={
                  "https://4.img-dpreview.com/files/p/articles/2447647693/top_camera_backpacks_2020.jpeg"
                  //   "https://www.cycletogo.com/wp-content/uploads/2016/07/brompton_bike_logo_black.jpg"
                }
                alt={"backpack"}
              />
            </div>
          </div>

          <div className=" flex-1 p-12">
            <div className=" text-7xl">Title</div>
            <div className=" my-12 mx-0 text-xl font-medium tracking-[3px]">
              Description
            </div>
            <button className=" p-2 text-xl cursor-pointer bg-transparent border border-slate-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className=" border border-red-600 w-12 h-12 bg-slate-50 rounded-[50%] flex items-center justify-center absolute top-0 bottom-0 right-0 m-auto cursor-pointer opacity-50 z-[2]">
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default MainSwiper;
