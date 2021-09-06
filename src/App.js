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
    const postObject = {
      ids: order.seats.map((seat) => seat.id),
      compradores: [
        order.seats.map((seat) => ({
          idAssento: seat.id,
          nome: seat.buyer,
          cpf: seat.cpf,
        })),
      ],
    };
    postOrder(postObject);
  }
  function clearOrder() {
    setOrder({});
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
          <Sucess order={order} clearOrder={clearOrder} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
