import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/sessions.css";
import { getSessions } from "../api";
export default function Sessions() {
  const [sessions, setSessions] = useState({});
  //const params = useParams();
  useEffect(() => {
    getSessions(2).then((response) => setSessions(response.data));
  }, []);

  console.log(sessions);

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
