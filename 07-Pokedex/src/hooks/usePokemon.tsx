import React, { useState } from 'react'
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { useEffect } from 'react';
import { pokemonApi } from '../api/PokemonApi';


export const usePokemon = (id:string) => {
    const [isLoading, setisLoading] =  useState(true);
    const [pokemon, setpokemon] = useState<PokemonFull>({} as PokemonFull);

    const loadPokemon =async () => {
        const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setpokemon(resp.data);
        setisLoading(false);
    }

    useEffect(() => {
        loadPokemon();

    }, []);
    

    return{
        isLoading,
        pokemon,
    }
}
