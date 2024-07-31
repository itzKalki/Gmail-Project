import React from "react";
import { MdCropSquare } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
const mails=[
    {
        name:"Rachna",
        content:"I am good how are you ",
        days:5,
    },
    {
        name:"Divita",
        content:"I do not know you ",
        days:10,
    },
    {
        name:"Kalki",
        content:"Self mail",
        days:15,
    },
    {
        name:"Lord Shree Ram",
        content:"Bless you son ",
        days:20,
    }
]
const Email = () => {
  return (
    mails.map((items,index)=>{
        return (
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 hover:cursor-pointer ">
            <div className="flex items-center gap-2">
              <div>
                <MdCropSquare></MdCropSquare>
              </div>
              <div>
                <MdOutlineStarBorder></MdOutlineStarBorder>
              </div>
              <div>
                <h1>{items.name}</h1>
              </div>
            </div>
            <div className="flex-1 ml-4">
              <p>
              {items.content}
              </p>
            </div>
            <div className="flex-none text-gray text-sm">{items.days} days ago</div>
          </div>
        )
    })
   
  );
};

export default Email;
