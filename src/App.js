import Header from "./header/Header";
import Main from "./main/Main";
import Sessions from "./sessions/SessionsSelection";
import SeatsSelection from "./seats/SeatsSelection";
import Sucess from "./sucess/Sucess";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const orderTeamplate = {
    movie: "",
    session: "",
    seats: [],
    buyer: "",
    cpf: "",
  };
  const [order, setOrder] = useState(orderTeamplate);
  function updateOrder(order) {
    console.log(order);
    setOrder(order);
    return <Redirect to="/sucess" />;
  }
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
          <SeatsSelection updateOrder={updateOrder} />
        </Route>
        <Route path="/sucess">
          <Sucess order={order} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
