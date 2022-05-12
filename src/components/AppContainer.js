import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ContainerClassSearch from "./ContainerClassSearch";
import Top100 from "./Top100";

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
          <div className="app-container">
            <Switch>
              <Route exact path={"/"}>
                <Home/>
              </Route>
              <Route path={"/search"}>
                <ContainerClassSearch/>
              </Route>
              <Route path={"/top"}>
                <Top100/>
              </Route>
            </Switch>
          </div>
        )
    }
}

export default AppContainer;
