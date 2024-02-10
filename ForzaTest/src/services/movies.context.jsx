import React, {createContext, useState} from 'react';
import { getPopularMovies } from './movies.service';

export const MoviesContext = createContext();

export const MoviesContextProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const moviesInfo = async() => {
        setIsLoading(true);
        setMovies([]);
        await getPopularMovies().then((M) => {
            setMovies(M);
            setError(false);
            setIsLoading(false);
        }).catch(() => {
            setError(true);
            setIsLoading(false);
        })
    }

    return(
        <MoviesContext.Provider
        value={{
            movies,
            error,
            isLoading,
            moviesInfo
        }}>
            {children}
        </MoviesContext.Provider>
    )
}