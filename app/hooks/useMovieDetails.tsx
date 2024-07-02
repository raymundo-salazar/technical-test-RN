import { useState, useEffect } from "react";
import movieDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieinterface";
import { CreditsResponse, Cast } from "../interfaces/creditsInterface";

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  console.log(movieId);

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`
    );

    const [movieDetailsResp, CastPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);
    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: CastPromiseResp.data.cast,
    });

    // console.log(resp.data.overview)
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
