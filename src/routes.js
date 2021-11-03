import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Products from "./pages/Product/Products";
import ProductDetails from "./pages/Product/Details";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/products/:id",
    children: ProductDetails,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "*",
    component: Error,
  },
];
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export { routes, RouteWithSubRoutes };
