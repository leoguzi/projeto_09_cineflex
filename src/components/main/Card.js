import "../../styles/card.css";
export default function Card({ id, posterURL, title }) {
  return (
    <div id={id} className="card">
      <img src={posterURL} alt={title}></img>
    </div>
  );
}
