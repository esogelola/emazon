import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./redux/actions";

// Amplify
import Amplify from "aws-amplify";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Routes
import { routes, RouteWithSubRoutes } from "./routes";

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const users = useSelector((state) => state.Test.users);
  console.log("users", users);
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={i} {...route} />;
        })}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
