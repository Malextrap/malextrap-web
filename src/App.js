import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home/"
import Components from "./pages/components/"
import Documentation from "./pages/documentation/"

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} component={Home} exact />
      <Route path={"/documentation/:component"} component={Components} />
      <Route path={"/documentation"} component={Documentation} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
)
