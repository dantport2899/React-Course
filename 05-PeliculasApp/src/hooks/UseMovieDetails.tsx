import { useState, useEffect } from 'react';
import movidedb from '../api/MovieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';
interface MovieDetails{
    isLoading:boolean;
    movieFull?:MovieFull;
    cast: Cast[];
}

export const UseMovieDetails = (movieid:number) => {
    const [state, setstate] = useState<MovieDetails>({
        isLoading:true,
        movieFull:undefined,
        cast:[]
    })

    const getMovieDetails = async() =>{
        const movieDetailsPromise = movidedb.get<MovieFull>(`/`+movieid);
        const castPromise = movidedb.get<CreditsResponse>(`/`+movieid+'/credits');

        const [movieDetailsresponse,castresponse]= await Promise.all([movieDetailsPromise,castPromise]);

        setstate({
            isLoading:false,
            movieFull:movieDetailsresponse.data,
            cast: castresponse.data.cast
        }) 
    }

    useEffect(() => {
        getMovieDetails();

    }, []);
    
    return{
        ...state
    }
}
