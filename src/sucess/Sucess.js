import "./sucess.css";
import { useHistory } from "react-router-dom";
export default function Sucess({ order, clearOrder }) {
  const { movie, session, seats } = order;
  const history = useHistory();
  function handleHomeButton() {
    history.push("/");
    clearOrder();
  }
  return (
    <div className="sucess-container">
      <h1>Pedido feito com sucesso!</h1>
      <h2>Filme e sessão</h2>
      <spam>{movie}</spam>
      <spam>{session}</spam>
      <h2>Ingressos: </h2>
      {seats.map((seat, index) => {
        return (
          <div key={index}>
            <spam>Assento {seat.number}</spam>
            <spam>Nome: {seat.buyer} </spam>
            <spam>CPF: {seat.cpf} </spam>
          </div>
        );
      })}
      <button className="back-to-home" onClick={() => handleHomeButton()}>
        Voltar para Home
      </button>
    </div>
  );
}
