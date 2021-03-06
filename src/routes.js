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
import Orders from "./pages/Orders";
import Login from "./pages/Login";
const routes = [
  {
    exact: true,
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
    exact: true,
    path: "/products",
    component: Products,
  },
  {
    path: "/products/:id",
    children: <ProductDetails />,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/login",
    component: Login,
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
      children={route.children}
      exact={route.exact}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export { routes, RouteWithSubRoutes };
