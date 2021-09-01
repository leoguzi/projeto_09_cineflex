import "../../styles/main.css";
import Card from "./Card";
import axios from "axios";
import React from "react";
export default function Main({ apiURL }) {
  const [movies, setMovies] = React.useState([]);
  function getMovies() {
    const promise = axios.get(apiURL);
    promise.then((response) => setMovies(response.data));
  }
  getMovies();
  return (
    <main>
      <h1>Selecione o filme</h1>
      <div className="thumbs-container">
        {movies.map((movie, index) => (
          <Card
            key={index}
            id={movie.id}
            posterURL={movie.posterURL}
            title={movie.title}
          ></Card>
        ))}
      </div>
    </main>
  );
}
