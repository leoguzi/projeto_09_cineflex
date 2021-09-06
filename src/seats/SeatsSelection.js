import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Footer from "../footer/Footer";
import Seat from "./Seat";
import Info from "./Info";
import "./seatsSelection.css";
import { getSeats, validCpf } from "../api";
import SeatForm from "./SeatForm";
export default function SeatsSelection({ finishOrder }) {
  const { sessionID } = useParams();
  const [sessionInfo, setSessionInfo] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const history = useHistory();

  useEffect(
    () => getSeats(sessionID).then((re) => setSessionInfo(re.data)),
    []
  );

  function updateSelectedSeats(seat) {
    let deletionConfirmation = false;
    let exists = false;
    selectedSeats.map((selectedSeat) => {
      if (selectedSeat.id === seat.id) {
        if (selectedSeat.buyer || selectedSeat.cpf) {
          deletionConfirmation = window.confirm(
            `Deseja apagar os dados inseridos no assento ${seat.number}?`
          );
        } else {
          deletionConfirmation = true;
        }
        if (deletionConfirmation) {
          setSelectedSeats(
            selectedSeats.filter((selected) => selected.id !== seat.id)
          );
        } else {
          exists = true;
        }
      }
    });
    if (!deletionConfirmation && !exists) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }

  function isChekoutReady() {
    return selectedSeats.length > 0
      ? selectedSeats.every((seat) => validCpf(seat.cpf) && seat.buyer)
      : false;
  }

  function handleCheckoutButton() {
    if (isChekoutReady()) {
      finishOrder({
        movie: sessionInfo.movie.title,
        session: sessionInfo.day.weekday + " " + sessionInfo.name,
        seats: selectedSeats,
      });
      history.push("/sucess");
    } else {
      alert("Verifique os dados do pedido.");
    }
  }

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
                isSelected={selectedSeats.some(
                  //tests if this id exists in the list of selected seats
                  (selectedSeat) => selectedSeat.id === seat.id
                )}
                updateSelectedSeats={updateSelectedSeats}
              />
            ))
          ) : (
            <p>Carregando informações...</p>
          )}
        </div>
        <Info />
        {selectedSeats.map((seat, index) => (
          <SeatForm key={index} seat={seat} />
        ))}
        <button className="checkout" onClick={() => handleCheckoutButton()}>
          Reservar Assento(s)
        </button>
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
