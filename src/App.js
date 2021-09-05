import Header from "./header/Header";
import Main from "./main/Main";
import Sessions from "./sessions/SessionsSelection";
import SeatsSelection from "./seats/SeatsSelection";
import Sucess from "./sucess/Sucess";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { postOrder } from "./api";

export default function App() {
  const [order, setOrder] = useState({});
  function finishOrder(order) {
    setOrder(order);
    postOrder({
      ids: order.seats.map((seat) => seat.id),
      name: order.buyer,
      cpf: order.cpf,
    });
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
          <SeatsSelection finishOrder={finishOrder} />
        </Route>
        <Route path="/sucess">
          <Sucess order={order} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
