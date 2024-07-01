import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieDBResponse } from "../interfaces/movieinterface";

export const useMoviesPopular = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MovieDBResponse>([]);

  const getMovies = async () => {
    const moviesArray = movieDB.get<MovieDBResponse>("/popular");
    const responses = await Promise.resolve(moviesArray);
    // console.log(responses);
    setMoviesState(responses);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesState,
  };
};
