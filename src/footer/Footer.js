import "./footer.css";
export default function Footer({ posterURL, title, sessionTime }) {
  return (
    <footer>
      <div className="footer-card">
        <img src={posterURL} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>{sessionTime}</h2>
      </div>
    </footer>
  );
}
