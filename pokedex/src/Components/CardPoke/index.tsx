import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokeTeamContext } from "../../Context/poketeam";
import { StyledCardPoke } from "./style";
import { v1 as uuidv1 } from "uuid";

interface ICardPokeProps {
  name: string;
  address?: string;
}
interface IType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const CardPoke = ({ name, address }: ICardPokeProps) => {
  const { pokeTeam, setPokeTeam, addToTeam, removeFromTeam } =
    useContext(PokeTeamContext);

  const [pokeType, setPokeType] = useState([] as IType[]);

  const number = address?.slice(34);
  const pokeId = address?.slice(34).replace("/", "");

  useEffect(() => {
    const pokeType = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        );
        const types = response.data.types;
        const typesArray = types.map((type: IType) => type.type.name);
        setPokeType(typesArray);
      } catch (error) {
        error;
      }
    };
    pokeType();
  }, []);

  return (
    <StyledCardPoke>
      <p>{name} </p>

      <div className="poke-title">
        {pokeType.map((type) => (
          <span key={uuidv1()}> {type} </span>
        ))}
      </div>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`}
        alt=""
      />
      <Link to={`/home/poke/${pokeId}`}> More... </Link>
      <button type="button" onClick={() => addToTeam(name)}>
        {" "}
        AddToTeam{" "}
      </button>
    </StyledCardPoke>
  );
};

export default CardPoke;
