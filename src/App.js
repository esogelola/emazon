import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./redux/actions";

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

function App(props) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.Product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [products]);

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
