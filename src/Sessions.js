import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles/sessions.css";
import { getSessions } from "./api";
export default function Sessions() {
  const { movieID } = useParams();
  const [sessions, setSessions] = useState({});

  useEffect(
    () => getSessions(movieID).then((response) => setSessions(response.data)),
    []
  );

  return (
    <div className="sessions-container">
      <h1>Selecione o horário</h1>
      {sessions.days.map((day) => (
        <h2>
          {day.weekday} - {day.date}
        </h2>
      ))}
    </div>
  );
}
