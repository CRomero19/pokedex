import React, { createContext, useEffect, useState } from "react";
import { baseURL } from "../Services/pokeapi";

export interface IChildrenProps {
  children: React.ReactNode;
}
interface IPoke {
  name: string;
  url: string;
}
interface IPokesContext {
  pokesList: IPoke[];
  setPokesList: React.Dispatch<React.SetStateAction<IPoke[]>>;
  pokeLimit: number;
  setPokeLimit:React.Dispatch<React.SetStateAction<number>>;
  filteredPokes:IPoke[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const PokeListContext = createContext({} as IPokesContext);

export const PokeListProvider = ({ children }: IChildrenProps) => {
  const [pokesList, setPokesList] = useState([] as IPoke[]);
  const [filter, setFilter] = useState("")
  const [pokeLimit, setPokeLimit] = useState<number>(20);

  useEffect(() => {
    const getAllPokes = async () => {
      try {
        const response = await baseURL.get(`pokemon?limit=${pokeLimit}}&offset=0`);
        setPokesList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokes();
  }, [pokeLimit]);

  const filteredPokes = pokesList.filter(poke =>
    poke.name.toLowerCase().includes(filter.toLowerCase()) 
    /* || poke.type[0].toLowerCase().includes(filter.toLowerCase()) */
    /* || poke?.type?[1].toLowerCase().includes(filter.toLowerCase()) */)

  return (
    <PokeListContext.Provider value={{ pokesList, setPokesList, pokeLimit, setPokeLimit, filteredPokes, setFilter}}>
      {children}
    </PokeListContext.Provider>
  );
};
