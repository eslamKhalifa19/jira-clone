import React from "react";
import SideNav from "../SideNav/SideNav";
import Drawer from "../Drawer/Drawer";
import "./sidebar.scss";

function SideBar() {
  return (
    <div className="sidebar">
      <SideNav />
      <Drawer />
    </div>
  );
}

export default SideBar;
