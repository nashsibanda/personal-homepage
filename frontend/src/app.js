import React, { useEffect, useState } from "react";
import UserServices from "./services/user.services";
import NavMenu from "./components/nav_menu";
import Homepage from "./components/homepage";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => UserServices.getUser().then(user => setUser(user)), []);

  return user ? (
    <div className="site-container">
      {/* <header>
      </header> */}
      <Homepage user={user} />
      <footer>
        <NavMenu user={user} />
      </footer>
    </div>
  ) : null;
};

export default App;
