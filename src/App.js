import Header from "./header/Header";
import Main from "./main/Main";
import Sessions from "./sessions/Sessions";
import Seats from "./seats/SeatsSelection";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/sessions/:movieID" exact>
          <Sessions />
        </Route>
        <Route path="/seats/:sessionID" exact>
          <Seats />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
