import React from "react";
import Sidebar from "./Sidebar";
import Inbox from "./Inbox";
import {Outlet} from "react-router-dom"
const Body = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default Body;
