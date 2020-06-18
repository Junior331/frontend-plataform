/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  /* PLOP_ROUTE_IMPORT */
  Home,
  SignIn,
} from "./";
import { Layout, Menu } from "../components/modules";

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Menu />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
