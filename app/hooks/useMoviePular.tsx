import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import {
  MovieDBPopular,
  MovieDBNowResponse,
} from "../interfaces/movieinterface";

interface MovieState {
  popular: MovieDBPopular[];
}

export const useMoviesPopular = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MovieState>({
    popular: [],
  });

  const getMovies = async () => {
    const moviesArray = movieDB("/popular");
    const response = await Promise.all([moviesArray]);
    // console.log(response[0].data.results);
    setMoviesState({ popular: response[0].data.results });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
