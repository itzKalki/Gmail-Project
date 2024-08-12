import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Inbox from "./Inbox";
import {Outlet, useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
const Body = () => {
  const {user}=useSelector(store=>store.app);
  const navigate=useNavigate();
  useEffect(() => {
    if(!user){
      navigate("/login");
    }
  
  }, [user,navigate])
  
  return (
    <>
    <Navbar/>
    <div className="flex">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
    </>
  );
};

export default Body;
