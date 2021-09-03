import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Seat from "./Seat";
import "./seatsSelection.css";
import { getSeats } from "../api";

export default function Seats() {
  const { sessionID } = useParams();
  const [title, setTitle] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [sessionSeats, setSessionSeats] = useState([]);
  const [posterURL, setPosterURL] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  useEffect(
    () =>
      getSeats(sessionID).then((re) => {
        setSessionSeats(re.data.seats);
        setTitle(re.data.movie.title);
        setSessionTime(re.data.day.weekday + " - " + re.data.name);
        setPosterURL(re.data.movie.posterURL);
      }),
    []
  );
  return (
    <>
      <div className="seats-page-container">
        <h1>Selecione o(os) assentos(s)</h1>
        <div className="seats-container">
          {sessionSeats.map((seat, index) => (
            <Seat
              key={index}
              id={seat.id}
              isAvailable={seat.isAvailable}
              name={seat.name}
            />
          ))}
        </div>
        <div className="info-container">
          <div>
            <div className="seat selected" />
            <spam>Selecionado</spam>
          </div>
          <div>
            <div className="seat" />
            <spam>Disponível</spam>
          </div>
          <div>
            <div className="seat occupied" />
            <spam>Indisponível</spam>
          </div>
        </div>
        <div className="buyer-form-field">
          <label>Nome do comprador:</label>
          <input placeholder="Digite seu nome..." />
        </div>
        <div className="buyer-form-field">
          <label>CPF do comprador:</label>
          <input placeholder="Digite seu CPF..." />
        </div>
        <button className="checkout">Reservar Assento(s)</button>
      </div>
      <Footer title={title} posterURL={posterURL} sessionTime={sessionTime} />
    </>
  );
}
