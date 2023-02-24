import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledPokePage } from "./style";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { v1 as uuidv1 } from "uuid";

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
    const getPoke = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeUrl}`
        );
        setPoke(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPoke();
  }, []);

  console.log(poke);

  return (
    <StyledPokePage>
      <div className="poke__header">
        <button>
          {" "}
          <FaAngleDoubleLeft color='var(--color-grey-0)' />{" "}
        </button>
        <h1>
          {" "}
          {poke.name} <span> Nº{poke.id} </span>
        </h1>
        <button>
          {" "}
          <FaAngleDoubleRight color='var(--color-grey-0)'/>{" "}
        </button>
      </div>

      <div className="container__main">
        <figure onClick={() => setIsShiny(!isShiny)}>
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
          <p className="note">
            {" "}
            Try clicking on the img! <CiFaceSmile />{" "}
          </p>
        </figure>
        <div className="container__info">
          <h1> informações</h1>
        </div>
      </div>
      <div className="container__aside">
        <div className="container__status">
          <p> Weight = {poke.weight} </p>
          {poke.id != undefined ? (
            poke.stats.map((stat) => (
              <p key={uuidv1()}>
                {" "}
                {stat.stat.name.toUpperCase()} = {stat.base_stat}
              </p>
            ))
          ) : (
            <p> carregando...</p>
          )}
        </div>
        <div className="container__other">
            <p>other info</p>
        </div>
      </div>
    </StyledPokePage>
  );
};

export default PokePage;
