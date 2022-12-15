import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import ContainerSearch from "./Search/ContainerSearch";
import Top100 from "./Top 100/Top100";

const AppContainer = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/search"}>
          <ContainerSearch />
        </Route>
        <Route path={"/top"}>
          <Top100 />
        </Route>
      </Switch>
    </div>
  );
};

export default AppContainer;
