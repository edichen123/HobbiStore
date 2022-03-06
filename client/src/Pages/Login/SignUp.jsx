import React from "react";

const SignUp = () => {
  return (
    <div className=" w-screen h-4/5 flex justify-center py-24 border border-yellow-400">
      <div className=" ">
        <h1 className=" text-2xl font-light">Create Account</h1>
        <form className=" flex flex-col">
          <div className=" flex flex-wrap">
            <p>Username: </p>
            <input className=" px-2 border bg-white rounded" placeholder="Onyx "></input>
          </div>
          <div className=" flex flex-wrap">
            <p>Password: </p>
            <input className=" px-2 border bg-white rounded" placeholder="Shush!"></input>
          </div>
          <div className=" flex flex-wrap">
            <p>Confirm Password: </p>
            <input
              className=" px-2 border bg-white rounded"
              placeholder="Key in above once more"
            ></input>
          </div>
          <div className=" flex flex-wrap">
            <p>Email: </p>
            <input className=" px-2 border bg-white rounded" placeholder="abc@abc.com?"></input>
          </div>
          <div className=" flex flex-wrap">
            <p>Name: </p>
            <input className=" px-2 border bg-white rounded" placeholder="Elon Musk"></input>
          </div>
          <span className=" text-sm my-5 mx-0">
            By Registering an account, you agree with the terms and condition of
            this website.
          </span>
        </form>
        <button className=" text-base p-1 border-none bg-slate-200 ">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
