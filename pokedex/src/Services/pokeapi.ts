import React from 'react';
import axios from 'axios';

export const allpokes = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0",
    timeout: 6000,
})
