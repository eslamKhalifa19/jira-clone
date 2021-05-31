import React from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import DrawerSearch from "./DrawerSearch/DrawerSearch";
import "./sass/main.scss";
import KanbanBoard from "../src/pages/KanbanBoard";
import ProjectSettings from "../src/pages/ProjectSettings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import CreateIssue from "./pages/CreateIssue";
import PageError from "./PageError/PageError";
function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <Header />
          <div className="content">
            <SideBar />
            <div className="page-view">
              <Switch>
                <Route exact path="/" component={KanbanBoard} />
                <Route
                  exact
                  path="/project-settings"
                  component={ProjectSettings}
                />
                <Route path="/about" component={About} />
                <Route path="/create-issue" component={CreateIssue} />
                <Route path="/search-issue" component={DrawerSearch} />
                <Route render={() => <PageError />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
