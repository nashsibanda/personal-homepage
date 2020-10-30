import React, { useEffect, useState } from "react";
import UserServices from "./services/user.services";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => UserServices.getUser().then(user => setUser(user)), []);

  return user ? (
    <Router>
      <Switch>
        <Route path="/">
          <Homepage user={user} />
        </Route>
        <Route path="/projects">
          <Homepage user={user} />
        </Route>
        <Route path="/blog">
          <Homepage user={user} />
        </Route>
      </Switch>
      <Footer user={user} />
    </Router>
  ) : null;
};

export default App;
