import "./sucess.css";
import { Link } from "react-router-dom";
export default function Sucess({ order }) {
  const { movie, session, seats, buyer, cpf } = order;

  return (
    <div className="sucess-container">
      <h1>Pedido feito com sucesso!</h1>
      <h2>Filme e sessão</h2>
      <spam>{movie}</spam>
      <spam>{session}</spam>
      <h2>Ingressos</h2>
      {seats.map((seat, index) => (
        <spam key={index}>Assento {seat.number}</spam>
      ))}
      <h2>Comprador</h2>
      <spam>Nome: {buyer} </spam>
      <spam>CPF: {cpf} </spam>
      <Link to="/">
        <button className="back-to-home">Voltar para Home</button>
      </Link>
    </div>
  );
}
