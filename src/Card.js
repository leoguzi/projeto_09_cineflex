import "./styles/card.css";
export default function Card({ posterURL, title }) {
  return (
    <div className="card">
      <img src={posterURL} alt={title}></img>
    </div>
  );
}
