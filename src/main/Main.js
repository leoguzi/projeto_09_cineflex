import "./main.css";
import Card from "./Card";
import { getMovies } from "../api";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then((response) => setMovies(response.data));
  }, []);
  return (
    <main>
      <h1>Selecione o filme</h1>
      <div className="thumbs-container">
        {movies.map((movie, index) => (
          <Link key={index} to={`/sessions/${movie.id}`}>
            <Card posterURL={movie.posterURL} title={movie.title}></Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
