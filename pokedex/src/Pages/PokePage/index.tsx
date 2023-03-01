import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StyledPokePage } from "./style";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
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

const PokePage = () => {
  const navigate = useNavigate();
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
    console.log(clickedVariety);
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
    <StyledPokePage pokeTypes={pokeTypes}>
      <div className="poke__header">
        <button onClick={() => location.reload()}>
          <Link to={`http://localhost:5174/home/poke/${Number(pokeUrl) - 1}`}>
            {" "}
            <FaAngleDoubleLeft color="var(--color-grey-0)" />{" "}
          </Link>
        </button>
        <h1>
          {" "}
          {poke.name} <span> Nº{poke.id} </span>{" "}
        </h1>
        <div className="types">
          {poke.types != undefined ? (
            poke.types.map((type) => <p key={uuidv1()}>{type.type.name}</p>)
          ) : (
            <p> carregando...</p>
          )}
        </div>

        <button onClick={() => location.reload()}>
          <Link to={`http://localhost:5174/home/poke/${Number(pokeUrl) + 1}`}>
            {" "}
            <FaAngleDoubleRight color="var(--color-grey-0)" />{" "}
          </Link>
        </button>
      </div>
      <main>
        <figure>
          <img src={pokeImg} alt="" />

          {pokeVarieties && (
            <select
              name=""
              id=""
              onChange={(event) => changePokeImg(event.target.value)}
            >
              {pokeVarieties.map((variety) => (
                <option key={variety.pokemon.name} value={variety.pokemon.name}>
                  {variety.pokemon.name.replaceAll("-", " ")}
                </option>
              ))}
              <option value={`Shiny ${poke.name}`}> Shiny {poke.name} </option>
            </select>
          )}
        </figure>
        <div className="container__info">
          <h1> General information </h1>
          {description.base_happiness != undefined ? (
            <div>
              <p>
                {description.flavor_text_entries[1].flavor_text.replaceAll(
                  `\f` || "\n",
                  " "
                )}
              </p>
              <p>
                {description.flavor_text_entries[3].flavor_text.replaceAll(
                  `\f` || "\n",
                  " "
                )}
              </p>
            </div>
          ) : (
            <p> </p>
          )}
        </div>

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
      </main>
      <PokeEvolutions />
    </StyledPokePage>
  );
};

export default PokePage;
