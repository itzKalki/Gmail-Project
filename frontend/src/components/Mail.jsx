import React from "react";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";


const Mail = () => {
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <BiArchiveIn size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineReport size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
            <span>1 to 100</span>
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex justify-between bg-white items-center gap-1">
            <div className="flex items-center gap-2">
                <h1 className="text-xl font-medium">Subject</h1>
                <span className="text-sm bg-gray-200 rounded-md px-2 hover:cursor-pointer">inbox</span>
            </div>
            <div className="flex-none text-gray-400 my-5 text-sm"> 
                <p>12 days ago</p>
            </div>
        </div>
        <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt consectetur fugiat totam odio laborum, optio dolores eius, molestiae fuga alias voluptatibus debitis rem. Voluptatum cumque odit dolores veniam minima, facere nisi voluptate recusandae? Quibusdam, amet adipisci excepturi magnam error nostrum est quo ratione vel eos illum repellat deserunt similique atque enim consectetur voluptas quia doloribus pariatur natus illo possimus, minus facere? Nobis magnam pariatur, atque voluptates sed consectetur enim odit molestiae veritatis eveniet animi mollitia quibusdam asperiores maxime vero omnis iure modi ab! Molestiae, corrupti repellendus deserunt labore ratione perferendis illo debitis possimus quaerat harum iure voluptates quidem? Cumque, sunt.</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
