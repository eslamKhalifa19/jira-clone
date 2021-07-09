import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./sass/main.scss";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import LoadingPage from "./LoadingPage/LoadingPage";
const PageError = lazy(() => import("./PageError/PageError"));
const About = lazy(() => import("./pages/About"));
const ProjectSettings = lazy(() => import("../src/pages/ProjectSettings"));
const CreateIssue = lazy(() => import("./pages/CreateIssue"));
const DrawerSearch = lazy(() => import("./DrawerSearch/DrawerSearch"));
const KanbanBoard = lazy(() => import("../src/pages/KanbanBoard"));
function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
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
    </Suspense>
  );
}

export default App;
