import React, { useEffect, useState } from "react";
import UserServices from "./services/user.services";
import NavMenu from "./components/nav_menu";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => UserServices.getUser().then(user => setUser(user)), []);

  return (
    <div className="site-container">
      <NavMenu user={user} />
      <div className="content-container">
        <p>Hello world!</p>
      </div>
    </div>
  );
};

export default App;
