import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./sessionsSelection.css";
import { getSessions } from "../api";
import Footer from "../footer/Footer";
export default function Sessions() {
  const { movieID } = useParams();
  const [sessionsData, setSessionsData] = useState(null);
  useEffect(
    () =>
      getSessions(movieID).then((response) => setSessionsData(response.data)),
    []
  );
  return (
    <>
      <div className="sessions-container">
        <h1>Selecione o horário</h1>
        {sessionsData
          ? sessionsData.days.map((day, index) => (
              <div key={index}>
                <h2>
                  {day.weekday} - {day.date}
                </h2>
                <div className="showtimes-container">
                  {sessionsData
                    ? day.showtimes.map((time, index) => (
                        <Link key={index} to={`/seats/${time.id}`}>
                          <div className="time">{time.name}</div>
                        </Link>
                      ))
                    : "Carregando informações..."}
                </div>
              </div>
            ))
          : "Carregando informaçãoes..."}
      </div>
      <Footer
        title={sessionsData ? sessionsData.title : " "}
        posterURL={sessionsData ? sessionsData.posterURL : " "}
      />
    </>
  );
}
