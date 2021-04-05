import React from "react";
import SideBar from "./SideBar/SideBar";
import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <header className="header"></header>
      <div className="content">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
