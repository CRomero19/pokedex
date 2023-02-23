import React, { createContext, useEffect, useState } from "react";

interface IChildrenProps {
  children: React.ReactNode;
}

interface IPokesContext{
  pokeTeam: string[];
  setPokeTeam: React.Dispatch<React.SetStateAction<string[]>>;
  addToTeam:(newPoke:string)=>void;
  removeFromTeam:(newPoke:string)=>void;
}

export const PokeTeamContext = createContext({} as IPokesContext);  

export const PokeTeamProvider = ({ children }:IChildrenProps) => {

  const [pokeTeam, setPokeTeam] = useState([] as string[]);
  
  const addToTeam = (newPoke:string)=>{
    pokeTeam.length <= 6 ?
    setPokeTeam([...pokeTeam, newPoke])
    :
    alert('Maximo de 6 pokemons')
  }
    
  const removeFromTeam = (newPoke:string)=>{
    const newTeam = pokeTeam.filter(poke => poke.toLowerCase() != newPoke.toLowerCase())
    setPokeTeam(newTeam)
  } 

  useEffect(()=>{
    console.log(pokeTeam)
  },[pokeTeam])


  
  return (
    <PokeTeamContext.Provider value={{ pokeTeam, setPokeTeam, addToTeam, removeFromTeam  }}>
      {children}
    </PokeTeamContext.Provider>
  );
};  
 