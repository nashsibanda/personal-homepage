import React, { useEffect, useState } from "react";
import ApiService from "./services/api_service";
import Footer from "./components/footer/footer_main";
import Homepage from "./components/homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import ProjectsIndex from "./components/projects/projects_index";
import ProjectShow from "./components/projects/project_show";
import AboutPage from "./components/about";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRouteSwitch = withRouter(({ location, user, projects }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route path="/projects/:projectSlug">
          {projects && <ProjectShow projects={projects} />}
        </Route>
        <Route path="/projects">
          <ProjectsIndex projects={projects} />
        </Route>
        <Route path="/blog">
          <Homepage user={user} />
        </Route>
        <Route path="/about">{user && <AboutPage user={user} />}</Route>
        <Route path="/">
          <Homepage user={user} />
        </Route>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

const App = () => {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(
    () =>
      ApiService.projects.getProjects().then(projects => setProjects(projects)),
    []
  );
  useEffect(() => ApiService.users.getUser().then(user => setUser(user)), []);

  return (
    <Router>
      <AnimatedRouteSwitch user={user} projects={projects} />
      <Footer user={user} />
    </Router>
  );
};

export default App;
