export default function Info() {
  return (
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
  );
}
