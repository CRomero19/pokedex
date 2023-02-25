import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledPokePage } from "./style";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { v1 as uuidv1 } from "uuid";
import { baseURL } from "../../Services/pokeapi";
import PokeEvolutions from "../../Components/PokeEvolutions";

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
interface IPokeDescription {
  base_happiness: number;
  capture_rate: number;
  evolution_chain: object;
  flavor_text_entries: IFlavorText[];
  forms_switchable: boolean;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
}

const PokePage = () => {
  const { pokeUrl } = useParams();

  const [poke, setPoke] = useState({} as IPokeInfo);
  const [isShiny, setIsShiny] = useState(true);
  const [description, setDescription] = useState({} as IPokeDescription);

  useEffect(() => {
    const getPoke = async () => {
      try {
        const response = await baseURL.get(`/pokemon/${pokeUrl}`);
        setPoke(response.data);
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

  console.log(poke.types);
  console.log(description);

  return (
    <StyledPokePage>
      <div className="poke__header">
        <button>
          {" "}
          <FaAngleDoubleLeft color="var(--color-grey-0)" />{" "}
        </button>
        <h1>
          {" "}
          {poke.name} <span> Nº{poke.id} </span>{" "}
        </h1>
        <button>
          {" "}
          <FaAngleDoubleRight color="var(--color-grey-0)" />{" "}
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
          <h1> General information </h1>
          {description.base_happiness != undefined ? (
            <div>
              <p>
                {description.flavor_text_entries[0].flavor_text.replace(
                  `\f` || "\n",
                  " "
                )}
              </p>
              <p>
                {description.flavor_text_entries[2].flavor_text.replace(
                  `\f` || "\n",
                  " "
                )}
              </p>
            </div>
          ) : (
            <p> </p>
          )}

          <div className="types">
            {poke.types != undefined ? (
              poke.types.map((type) => <p key={uuidv1()}>{type.type.name}</p>)
            ) : (
              <p> carregando...</p>
            )}
          </div>
        </div>
      </div>
      <div className="container__aside">
        <div className="container__status">
          <h2> Battle Attributes </h2>
          {poke.id != undefined ? (
            poke.stats.map((stat) => (
              <p key={uuidv1()}>
                {" "}
                {stat.stat.name.charAt(0).toUpperCase() +
                  stat.stat.name.slice(1)}
                : {stat.base_stat}
              </p>
            ))
          ) : (
            <p> carregando...</p>
          )}
        </div>
        <div className="container__other">
          <h2> Poke Nature </h2>
          <p> Weight: {(poke.weight * 0.1).toFixed(1)}kg </p>
          <p> Height: {(poke.height * 0.1).toFixed(2)}m</p>
          <p> Base happiness: {description.base_happiness}</p>
          <p> Capture rate: {description.capture_rate}</p>
        </div>
      </div>

      <PokeEvolutions />
    </StyledPokePage>
  );
};

export default PokePage;
