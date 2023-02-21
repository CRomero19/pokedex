import React, { createContext, useEffect, useState } from "react";
/* import { allpokes } from "../Services/pokeapi";
import { iPokeList } from "./@Types/types";

interface IPokelistContext {
  children: React.ReactNode;
  pokesList: object;
}

export const pokeListContext = createContext<IPokelistContext | null>(null);

export const pokeListProvider = ({ children }) => {
  const [pokesList, setPokesList] = useState([] as iPokeList[]);

  useEffect(() => {
    const getAllPokes = async () => {
      try {
        const reponse = await allpokes.get("");
        setPokesList(reponse.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokes();
  }, []);

  return (
    <pokeListContext.Provider value={{ pokesList }}>
      {children}
    </pokeListContext.Provider>
  );
}; */
