import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/apiCall";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleUser = (event) => {
    return setUsername(event.target.value);
  };
  // console.log(username);

  const handlePassword = (event) => {
    return setPassword(event.target.value);
  };
  // console.log(password);

  const handleEmail = (event) => {
    return setEmail(event.target.value);
  };
  // console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Account Created");
    register(dispatch, { username, password, email });
  };

  return (
    <div className=" w-screen h-4/5 flex justify-center py-24 ">
      <div className=" ">
        <h1 className=" text-2xl font-light">Create Account</h1>
        <form className=" flex flex-col">
          <div className=" flex flex-wrap">
            <p>Username: </p>
            <input
              onChange={handleUser}
              className=" px-2 border bg-white rounded"
              placeholder="Onyx "
            ></input>
          </div>
          <div className=" flex flex-wrap">
            <p>Password: </p>
            <input
              type="password"
              onChange={handlePassword}
              className=" px-2 border bg-white rounded"
              placeholder="Shush!"
            ></input>
          </div>
          {/* <div className=" flex flex-wrap">
            <p>Confirm Password: </p>
            <input
              className=" px-2 border bg-white rounded"
              placeholder="Key in above once more"
            ></input>
          </div> */}
          <div className=" flex flex-wrap">
            <p>Email: </p>
            <input
              onChange={handleEmail}
              className=" px-2 border bg-white rounded"
              placeholder="abc@abc.com?"
            ></input>
          </div>
          {/* <div className=" flex flex-wrap">
            <p>Name: </p>
            <input className=" px-2 border bg-white rounded" placeholder="Elon Musk"></input>
          </div> */}
          <span className=" text-sm my-5 mx-0">
            By Registering an account, you agree with the terms and condition of
            this website.
          </span>
          <button
            onClick={handleSubmit}
            className=" text-base p-1 border-none bg-slate-200 "
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
