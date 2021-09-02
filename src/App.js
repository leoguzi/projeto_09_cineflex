import Header from "./components/Header";
import Main from "./components/main/Main";
import Sessions from "./components/Sessions";
import Spots from "./components/Spots";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Main></Main>
        </Route>
        <Route path="/sessions" exact>
          <Sessions></Sessions>
        </Route>
        <Route path="/assentos" exact>
          <Spots></Spots>
        </Route>
      </Switch>
      {/*<Footer></Footer>*/}
    </BrowserRouter>
  );
}
