import React from "react";
import { useSelector } from "react-redux";

const Logout = () => {
  const name = useSelector((state) => state.user);
  // console.log(name.currentUser.username);
  const displayUsername = name.currentUser.username
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{displayUsername}</p>
      <button className="border rounded border-black p-2 hover:transform hover:bg-black hover:text-white">
        Logout
      </button>
    </div>
  );
};

export default Logout;
