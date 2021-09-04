import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Seat from "./Seat";
import Info from "./Info";
import "./seatsSelection.css";
import { getSeats } from "../api";

export default function SeatsSelection({ updateOrder }) {
  const { sessionID } = useParams();
  const [sessionInfo, setSessionInfo] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  let isChekoutReady = name && cpf && selectedSeats.length > 0;
  function updateSelectedSeats(seat) {
    selectedSeats.includes(seat)
      ? setSelectedSeats(selectedSeats.filter((selected) => selected !== seat))
      : setSelectedSeats([...selectedSeats, seat]);
  }
  useEffect(
    () => getSeats(sessionID).then((re) => setSessionInfo(re.data)),
    []
  );

  return (
    <>
      <div className="seats-page-container">
        <h1>Selecione o(os) assentos(s)</h1>
        <div className="seats-container">
          {sessionInfo ? (
            sessionInfo.seats.map((seat, index) => (
              <Seat
                key={index}
                id={seat.id}
                isAvailable={seat.isAvailable}
                name={seat.name}
                isSelected={selectedSeats.includes(seat.id)}
                updateSelectedSeats={updateSelectedSeats}
              />
            ))
          ) : (
            <p>Carregando informações...</p>
          )}
        </div>
        <Info />
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
        <Link to={isChekoutReady ? "/sucess" : `/seats/${sessionID}`}>
          <button
            className="checkout"
            onClick={() =>
              updateOrder({
                movie: sessionInfo.movie.title,
                session: sessionInfo.day.weekday + " " + sessionInfo.name,
                seats: selectedSeats,
                buyer: name,
                cpf: cpf,
              })
            }
          >
            Reservar Assento(s)
          </button>
        </Link>
      </div>
      <Footer
        title={sessionInfo ? sessionInfo.movie.title : ""}
        posterURL={sessionInfo ? sessionInfo.movie.posterURL : ""}
        sessionTime={
          sessionInfo ? sessionInfo.day.weekday + " - " + sessionInfo.name : ""
        }
      />
    </>
  );
}
