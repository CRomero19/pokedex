import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledPokePage } from "./style";

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

const PokePage = () => {
  const { pokeUrl } = useParams();

  const [poke, setPoke] = useState({} as IPokeInfo);
  const [isShiny, setIsShiny] = useState(true);

  useEffect(() => {
    const getAllPokes = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeUrl}`
        );
        setPoke(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokes();
  }, []);

  return (
    <StyledPokePage>
      <figure onClick={() => setIsShiny(!isShiny)}>
        {isShiny ? <h1>{poke.name}</h1> : <h1>Shiny {poke.name}</h1>}

        {isShiny ? (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeUrl}.png`}
            alt=""
          />
        ) : (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokeUrl}.png`}
            alt=""
          />
        )}
      </figure>
    </StyledPokePage>
  );
};

export default PokePage;
