import React, { useState } from "react";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from "react-icons/go";
import Emails from "./Emails";
const mailType = [
  {
    icon: <MdInbox />,
    text: "Primary",
  },
  {
    icon: <GoTag />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends />,
    text: "Social",
  },
];
const Inbox = () => {
  const [select, setSelect] = useState(0);
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <MdCropSquare></MdCropSquare>
            <FaCaretDown></FaCaretDown>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdRefresh></IoMdRefresh>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdMore></IoMdMore>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>1 to 50</span>
          <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
          <MdKeyboardArrowRight></MdKeyboardArrowRight>
        </div>
      </div>
      <div className="h-90vh overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setSelect(index);
                }}
                className={`${
                  select === index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-4 border-b-transparent"
                } flex items-center gap-5 p-4 w-52 hover:bg-gray-200`}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
        <Emails></Emails>
      </div>
    </div>
  );
};

export default Inbox;
