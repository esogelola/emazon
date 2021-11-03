import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { routes, RouteWithSubRoutes } from "./routes";
import { Route } from "react-router";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => {
          console.log(route, i);
          return <RouteWithSubRoutes key={i} {...route} />;
        })}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
