import React from "react";

const ANNOUNCEMENT_MESSAGE = "Free Shipping Above $50 SGD";
const Announcement = () => {
  return (
    <div className=" h-8 bg-blue-100 flex items-center justify-center text-sm font-bold">
      <h3>{ANNOUNCEMENT_MESSAGE}</h3>
    </div>
  );
};

export default Announcement;
