import axios from 'axios';

export const baseURL = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    timeout: 6000,
})

export const searchPokemon = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
    timeout: 6000,
})

