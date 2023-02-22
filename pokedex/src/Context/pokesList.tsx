import React, { createContext, useEffect, useState } from "react";
import { allpokes } from "../Services/pokeapi";

interface IChildrenProps {
  children: React.ReactNode;
}

interface IPoke{
  name:string;
  url:string;
}

interface IApiResponse{
  config: object;
  data : object;
  headers : object;
  request : object;
  status : number;
  statusText: string;
  results: Array<IPoke>;
}
interface pokesList{
  pokesList: Array<IPoke>;
}

interface IPokesContext{
  pokesList: Array<IPoke>;
  /* pokeList: IPoke; */
  setPokeList: React.Dispatch<React.SetStateAction<pokesList>>;
  getAllPokes: ()=> void;
}

export const PokeListContext = createContext({} as IPokesContext);  

export const PokeListProvider = ({ children }:IChildrenProps) => {

  const [pokesList, setPokesList] = useState([] as IPoke[]);

  useEffect(() => {
    const getAllPokes = async () => {
      try {
        const response = await allpokes.get<IApiResponse>("");
        setPokesList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokes();
  }, []);
  
  return (
    <PokeListContext.Provider value={{ pokesList }}>
      {children}
    </PokeListContext.Provider>
  );
};  
 