import "./seat.css";
export default function Seat({
  id,
  isAvailable,
  name,
  isSelected,
  updateSelectedSeats,
}) {
  let style = "";
  if (isSelected) {
    style = "seat selected";
  } else {
    isAvailable ? (style = "seat") : (style = "seat occupied");
  }

  function handleSeatClick() {
    isAvailable
      ? updateSelectedSeats({
          id: id,
          number: name,
          buyer: "",
          cpf: "",
        })
      : alert("Esse assento não está disponível!");
  }

  return (
    <div id={id} className={style} onClick={() => handleSeatClick()}>
      <spam>{name}</spam>
    </div>
  );
}
