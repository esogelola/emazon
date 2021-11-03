import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
// Components
import Header from "./components/Header";

import { routes, RouteWithSubRoutes } from "./routes";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
