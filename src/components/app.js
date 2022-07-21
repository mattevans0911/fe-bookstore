import React from "react";
import Home from "./Home";
import Books from "./Books";
import NavBar from "./navigation/NavBar";
import Profile from "./Profile";
import { useRoutes } from "hookrouter";
import "../style/main.scss";

function App() {
  const routes = {
    "/": () => <Home />,
    "/books": () => <Books />,
    "/profile": () => <Profile />,
  };

  const routeResult = useRoutes(routes);

  return (
    <div className="app-wrapper">
      <NavBar />
      {routeResult}
    </div>
  );
}

export default App;
