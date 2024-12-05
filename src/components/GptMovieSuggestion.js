import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResult } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 text-white bg-black bg-opacity-90">
      <div>
        {movieNames.map((movieNames, index) => (
          <MovieList
            key={movieNames}
            title={movieNames}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
