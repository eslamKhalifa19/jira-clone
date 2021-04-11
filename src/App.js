import React from "react";
import SideBar from "./SideBar/SideBar";
import DrawerSearch from "./DrawerSearch/DrawerSearch";
import "./sass/main.scss";
import KanbanBoard from "../src/pages/KanbanBoard";
import ProjectSettings from "../src/pages/ProjectSettings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import CreateIssue from "./pages/CreateIssue";
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
            <Route path="/about" component={About} />
            <Route path="/create-issue" component={CreateIssue} />
            <Route path="/search-issue" component={DrawerSearch} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
