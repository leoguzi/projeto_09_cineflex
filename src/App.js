import Header from "./Header";
import Main from "./main/Main";
import Sessions from "./sessions/Sessions";
import Spots from "./Spots";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Main></Main>
        </Route>
        <Route path="/sessions/:movieID" exact>
          <Sessions></Sessions>
        </Route>
        <Route path="/spots" exact>
          <Spots></Spots>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
