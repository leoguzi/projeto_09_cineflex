import "./footer.css";
export default function Footer({ posterURL, title, sessionInfo }) {
  return (
    <footer>
      <div className="footer-card">
        <img src={posterURL} />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>{sessionInfo}</h2>
      </div>
    </footer>
  );
}
