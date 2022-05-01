import React from 'react'
import { useEffect, useRef,useState } from 'react';
import { pokemonApi } from '../api/PokemonApi';
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

export const UsePokemonPaginated = () => {
    const [setIsloading, setsetIsloading] = useState(true)
    const [simplePokemonList, setsimplePokemonList] = useState<SimplePokemon[]>([]);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

    const loadPokemons = async() => {
        setsetIsloading(true);
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        //carga la siguiente pagina
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results);
    }

    const mapPokemonList = (pokemonList:Result[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name,url})=>{
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length-2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            return{id,picture,name};
        });

        setsimplePokemonList([...simplePokemonList,...newPokemonList]);
        setsetIsloading(false);
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    return{
        setIsloading,
        simplePokemonList,
        loadPokemons
    }
  
}
