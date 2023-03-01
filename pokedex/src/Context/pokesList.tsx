import React, { createContext, useEffect, useState } from "react";
import { baseURL } from "../Services/pokeapi";

interface IChildrenProps {
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
}

export const PokeListContext = createContext({} as IPokesContext);

export const PokeListProvider = ({ children }: IChildrenProps) => {
  const [pokesList, setPokesList] = useState([] as IPoke[]);

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

  return (
    <PokeListContext.Provider value={{ pokesList, setPokesList, pokeLimit, setPokeLimit}}>
      {children}
    </PokeListContext.Provider>
  );
};
