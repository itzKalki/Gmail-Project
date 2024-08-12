import React, { useState, useEffect } from "react";
// import {GitHamburgerMenu } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setSearchText } from "../redux/appSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [text, setText] = useState("");
  const { user } = useSelector(store => store.app);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const logoutHandler=async()=>{
    try {
      const res=await axios.get("http://localhost:3000/api/v1/user/logout",
        {
          withCredentials:true
        }
      )
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      navigate("/login");
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    dispatch(setSearchText(text));
}, [text]);
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <GiHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="Gmail"
          />
          <h1 className="text-1xl text-gray-500 font-medium-500">Gmail</h1>
        </div>
      </div>

      {user && (
        <>
          <div className="w-[50%] mr-64">
            <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
              <CiSearch size={24} className="text-gray-700" />
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Search Mail"
                className="rounded-full w-full bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <FaQuestion />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <IoIosSettings />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <TbGridDots />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <button onClick={logoutHandler}
              className="underline cursor-pointer"
              >Logout</button>
              <Avatar
                src="https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg"
                size="40"
                round={true}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
