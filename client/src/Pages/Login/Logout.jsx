import React from "react";
import { useSelector } from "react-redux";

const Logout = () => {
  const name = useSelector((state) => state.user);
  console.log(name);
  return (
    <div className="flex justify-center items-center">
      <button className="border rounded border-black p-2 hover:transform hover:bg-black hover:text-white">
        Logout
      </button>
    </div>
  );
};

export default Logout;
