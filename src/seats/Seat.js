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
  return (
    <div
      id={id}
      className={style}
      onClick={() =>
        isAvailable
          ? updateSelectedSeats({ id: id, number: name })
          : alert("Esse assento não está disponível!")
      }
    >
      <spam>{name}</spam>
    </div>
  );
}
