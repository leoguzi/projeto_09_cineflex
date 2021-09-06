import { useState } from "react";
import "./seatForm.css";
export default function SeatForm({ seat }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  seat.buyer = name;
  seat.cpf = cpf;
  return (
    <div className="seat-form">
      <h2>Assento {seat.number}</h2>
      <div className="buyer-form-field">
        <label>Nome do comprador:</label>
        <input
          value={name}
          placeholder="Digite seu nome..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="buyer-form-field">
        <label>CPF do comprador:</label>
        <input
          value={cpf}
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
    </div>
  );
}
