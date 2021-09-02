import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./sessions.css";
import { getSessions } from "../api";
import Footer from "../footer/Footer";
export default function Sessions() {
  const { movieID } = useParams();
  const [sessions, setSessions] = useState([]);
  const [title, setTitle] = useState("");
  const [posterURL, setPosterURL] = useState("");
  useEffect(
    () =>
      getSessions(movieID).then((response) => {
        setSessions(response.data.days);
        setTitle(response.data.title);
        setPosterURL(response.data.posterURL);
      }),
    []
  );
  return (
    <div className="sessions-container">
      <h1>Selecione o horário</h1>
      {sessions.map((day, index) => (
        <div key={index}>
          <h2>
            {day.weekday} - {day.date}
          </h2>
          <div className="showtimes-container">
            {day.showtimes.map((time, index) => (
              <Link key={index} to={`/spots/${time.id}`}>
                <div className="time">{time.name}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
      <Footer title={title} posterURL={posterURL} />
    </div>
  );
}
