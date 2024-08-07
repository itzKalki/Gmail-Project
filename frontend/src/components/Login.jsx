import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setAuthUser } from '../redux/appSlice.js';

const Login = () => {
  const [input,setInput]=useState({
    email:"",
    password:""
  });
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const changeHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log(input);
    try {
      const res=await axios.post("http://localhost:3000/api/v1/user/login",input,{
        headers:{
          'Content-Type':"application/json"
        },
        withCredentials:true
      })
      if(res.data.success){
        dispatch(setAuthUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        
    }
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <form onSubmit={submitHandler} className="flex flex-col gap-3 bg-white p-4 w-full max-w-sm sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]"
      >
        <h1 className="font-bold text-3xl">Login</h1>
        <input onChange={changeHandler}
        value={input.email}
        name="email" 
          type="email"
          placeholder="Email"
          className="border border-gray-200 rounded-md px-2 py-2"
        />
        <input onChange={changeHandler}
        value={input.password}
        name="password"
          type="password"
          placeholder="password"
          className="border border-gray-200 rounded-md px-2 py-2"
        />
        <button className="bg-blue-600 text-white my-2 rounded-md p-2">Login</button>
        <p>
          Don't Have an Account? <Link to={"/signup"} className="text-blue-800">Click Here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
