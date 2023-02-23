import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokeTeamContext } from "../../Context/poketeam";
import { StyledCardPoke } from "./style";
import { v1 as uuidv1 } from 'uuid';
import pb from '../../assets/pbicon.png'
import { TiPlusOutline } from 'react-icons/ti';

interface ICardPokeProps {
  name: string;
  address?: string;
}
interface IType{
  slot: number;
  type: {
    name: string;
    url: string
  }
}

const CardPoke = ({ name, address }: ICardPokeProps) => {
  const { pokeTeam, setPokeTeam, addToTeam, removeFromTeam } =
    useContext(PokeTeamContext);
  
  const [pokeTypes, setPokeTypes] = useState([]as string[])  

  const pokeId = address?.slice(34).replace("/", "");

  useEffect(() => {
    const pokeTypes = async () => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        const types = response.data.types
        const typesArray = types.map((type:IType) => type.type.name)
        setPokeTypes(typesArray)
      }
    catch (error) {
      error
    }}
    pokeTypes();
  }, []);

  return (
    <StyledCardPoke pokeTypes={pokeTypes}>
      <p>{name} </p>
      
      {/* <div className="poke-type">
      {
      pokeTypes.map(type=> 
        <span key={uuidv1()}> {type} </span>
        )
      }
      </div> */}

      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`}alt=""/>
      <Link to={`/home/poke/${pokeId}`} className='link'> <TiPlusOutline/> </Link>
      
      <div className="pb-btn">
        <img src={pb} alt="" />
        <button type="button" onClick={() => addToTeam(name)}> Catch! </button>
      </div>
    </StyledCardPoke>
  );
};

export default CardPoke;
