import { useEffect, useState } from 'react';
import movidedb from "../api/MovieDB";
import { MoviesResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState{       
    now_playing: Movie[];
    popular: Movie[];
    top_rated: Movie[];
    upcoming: Movie[];
}

export const UseMovies = () => {
  
    const [isLoading, setisLoading] = useState(true);
    const [movieState, setMovieState] = useState<MoviesState>({
        now_playing: [],
        popular: [],
        top_rated: [],
        upcoming: []
    });

    const getMovies = async() =>{
        const now_playingPromise = movidedb.get<MoviesResponse>('/now_playing');
        const popularPromise     = movidedb.get<MoviesResponse>('/popular');
        const top_ratedPromise   = movidedb.get<MoviesResponse>('/top_rated');
        const upcomingPromise    = movidedb.get<MoviesResponse>('/upcoming');

        const response = await Promise.all([now_playingPromise,popularPromise,top_ratedPromise,upcomingPromise]);

        setMovieState({
            now_playing: response[0].data.results,
            popular: response[1].data.results,
            top_rated: response[2].data.results,
            upcoming: response[3].data.results
        });

        setisLoading(false);
    }

    useEffect(() => {
        //now playing
        getMovies();
      }, []);
  
    return {
        ...movieState,
        isLoading
    }
}
