import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../Services/pokeapi";
import { IChildrenProps } from "./pokesList";

interface IType {
  name: string;
  url: string;
}
interface IPokeTypes {
  slot: number;
  type: IType;
}
interface IStat {
  name: string;
  url: string;
}
interface IPokeStats {
  base_stat: number;
  effort: number;
  stat: IStat;
}
interface IPokeSprites {
  back_default: null | string;
  back_female: null | string;
  back_shiny: null | string;
  back_shiny_female: null | string;
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
}
interface IPokeSpecies {
  name: string;
  url: string;
}
interface IPokeInfo {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  order: 1;
  species: IPokeSpecies;
  sprites: IPokeSprites;
  stats: IPokeStats[];
  types: IPokeTypes[];
  weight: 69;
}
interface IFlavorText {
  flavor_text: string;
  language: object;
  version: object;
}
interface IPokeVariety {
  is_default: boolean;
  pokemon: {
    name: string;
    url: string;
  };
}
interface IPokeDescription {
  base_happiness: number;
  capture_rate: number;
  evolution_chain: object;
  flavor_text_entries: IFlavorText[];
  forms_switchable: boolean;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  varieties: IPokeVariety[];
}

interface IPokeContext {
    poke: IPokeInfo;
    pokeTypes:string[];
    pokeImg:string;
    description:IPokeDescription;
    changePokeImg:(clickedVariety: string) =>void;
    pokeUrl:string | number;
    pokeVarieties:IPokeVariety[];
}

export const PokePageContext = createContext({} as IPokeContext);

export const PokePageProvider = ({ children }: IChildrenProps) => {
  const { pokeUrl } = useParams();

  const [poke, setPoke] = useState({} as IPokeInfo);
  const [pokeTypes, setPokeTypes] = useState([] as string[]);
  const [description, setDescription] = useState({} as IPokeDescription);
  const [pokeImg, setPokeImg] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeUrl}.png` as string
  );

  useEffect(() => {
    const getPoke = async () => {
      try {
        const response = await baseURL.get(`/pokemon/${pokeUrl}`);
        setPoke(response.data);
        const types = response.data.types;
        const typesArray = types.map((type: IPokeTypes) => type.type.name);
        setPokeTypes(typesArray);
      } catch (error) {
        console.log(error);
      }
    };
    getPoke();
  }, []);

  useEffect(() => {
    const getDescription = async () => {
      try {
        const response = await baseURL.get(`/pokemon-species/${pokeUrl}`);
        setDescription(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDescription();
  }, []);
  const pokeVarieties = description.varieties;

  const changePokeImg = (clickedVariety: string) => {
    
    const variety = pokeVarieties.find(
      (variety) => variety.pokemon.name == clickedVariety
    );
    const varietyUrl = variety?.pokemon.url;
    const varietyId = varietyUrl?.slice(34).replace("/", "");
    if (clickedVariety === `Shiny ${poke.name}`) {
      setPokeImg(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokeUrl}.png`
      );
    } else {
      setPokeImg(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${varietyId}.png`
      );
    }
  };

  return (
    <PokePageContext.Provider value={{ poke, pokeTypes, pokeImg, description, changePokeImg,pokeUrl,pokeVarieties }}>
      {children}
    </PokePageContext.Provider>
  );
};
