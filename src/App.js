import React from "react";
import SideBar from "./SideBar/SideBar";
import "./sass/main.scss";
import KanbanBoard from "../src/pages/KanbanBoard";
import ProjectSettings from "../src/pages/ProjectSettings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <header className="header"></header>
        <div className="content">
          <SideBar />
          <Switch>
            <Route exact path="/" component={KanbanBoard} />
            <Route exact path="/project-settings" component={ProjectSettings} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
