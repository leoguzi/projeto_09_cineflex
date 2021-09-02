import Header from "./Header";
import Main from "./Main";
import Sessions from "./Sessions";
import Spots from "./Spots";
import Footer from "./Footer";
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
      {/*<Footer></Footer>*/}
    </BrowserRouter>
  );
}
