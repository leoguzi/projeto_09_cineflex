import "./seat.css";
export default function Seat({ id, isAvailable, name }) {
  return (
    <div id={id} className={isAvailable ? "seat" : "seat occupied"}>
      <spam>{name}</spam>
    </div>
  );
}
