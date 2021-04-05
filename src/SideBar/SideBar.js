import React from "react";
import SideNav from "../SideNav/SideNav";
import "../sass/main.scss";
import "./sidebar.scss";

function SideBar() {
  return (
    <div className="sidebar">
      <SideNav />
    </div>
  );
}

export default SideBar;
