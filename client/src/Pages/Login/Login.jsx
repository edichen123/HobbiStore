import React from 'react'

const Login = () => {
  return (
    <div className=" w-screen h-4/5 flex justify-center py-24 border border-yellow-400">
      <div className="">
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
         
        </form>
        <button className=" text-base p-1 border-none bg-slate-200 ">
          Log in
        </button>
        <div className='flex justify-between'>
        <a href=''>Forget pw?</a>
        <a href=''>Create Account</a>
        </div>
      </div>
    </div>
  )
}

export default Login