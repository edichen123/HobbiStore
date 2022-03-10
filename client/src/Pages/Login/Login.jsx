// import { useState } from "react";
// import { loggingin } from "../../redux/apiCall";

// import { useDispatch } from "react-redux";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();

//   const handleUser = (event) => {
//     return setUsername(event.target.value);
//   };
//   // console.log(username);

//   const handlePassword = (event) => {
//     return setPassword(event.target.value);
//   };
//   // console.log(password);

//   const handleClick = (event) => {
//     event.preventDefault();
//     // console.log("clicked")
//     loggingin(dispatch, { username, password });
//   };

//   return (
//     <div className=" w-screen h-screen flex justify-center py-24">
//       <div className="">
//         <h1 className=" text-2xl font-light">Sign in</h1>
//         <form className=" flex flex-col">
//           <div className=" flex flex-wrap">
//             <p>Username: </p>
//             <input
//               className=" px-2 border bg-white rounded"
//               placeholder="Onyx "
//               onChange={handleUser}
//             ></input>
//           </div>
//           <div className=" flex flex-wrap">
//             <p>Password: </p>
//             <input
//               className=" px-2 border bg-white rounded"
//               placeholder="Shush!"
//               type="password"
//               onChange={handlePassword}
//             ></input>
//           </div>
//         </form>
//         <div className="flex justify-center items-center">
//           <button
//             onClick={handleClick}
//             className=" text-base p-1 border-none bg-slate-200 "
//           >
//             Log in
//           </button>
//         </div>
//         <div className="flex justify-between">
//           <a href="">Forget pw?</a>
//           <a href="">Create Account</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { loggingin } from "../../redux/apiCall";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userRedux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const handleUser = (event) => {
    return setUsername(event.target.value);
  };
  // console.log(username);

  const handlePassword = (event) => {
    return setPassword(event.target.value);
  };
  // console.log(password);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setLoggedIn(true);
    // console.log("clicked")
    // console.log(loggedIn);
    // loggingin(
    //   dispatch(
    //     login({
    //       name: username,
    //       password: password,
    //       loggedIn: true,
    //     })
    //   )
    // );

    loggingin(dispatch, { username, password });
    dispatch(login({
      loggedIn:true
    }))
  };

  return (
    <div className=" w-screen h-screen flex justify-center py-24">
      <div className="">
        <h1 className=" text-2xl font-light">Sign in</h1>
        <form onSubmit={handleSubmit} className=" flex flex-col">
          <div className=" flex flex-wrap">
            <p>Username: </p>
            <input
              className=" px-2 border bg-white rounded"
              placeholder="Onyx "
              onChange={handleUser}
            ></input>
          </div>
          <div className=" flex flex-wrap">
            <p>Password: </p>
            <input
              className=" px-2 border bg-white rounded"
              placeholder="Shush!"
              type="password"
              onChange={handlePassword}
            ></input>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className=" text-base p-1 border-none bg-slate-200 "
            >
              Log in
            </button>
          </div>
        </form>
        <div className="flex justify-between">
          <a href="">Forget pw?</a>
          <a href="">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
