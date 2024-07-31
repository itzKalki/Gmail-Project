import React from "react";
// import {GitHamburgerMenu } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";
const Navbar = () => {
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
      <div className="w-[50%] mr-64">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <CiSearch size={24} className="text-gray-700" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Mail"
            className="rounded-full w-full bg-transparent"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <FaQuestion></FaQuestion>
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <IoIosSettings />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <TbGridDots />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <Avatar src="https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" size="40" round={true} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
