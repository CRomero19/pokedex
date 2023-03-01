import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PokeTeamContext } from "../../Context/poketeam";
import { StyledCardPoke } from "./style";
import pb from '../../assets/pbicon.png'

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
  const { addToTeam } = useContext(PokeTeamContext);

  const navigate = useNavigate()
  
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

  const goToPokePage = () =>{
    navigate(`/home/poke/${pokeId}`)
  }

  return (
    <StyledCardPoke pokeTypes={pokeTypes} onClick={()=>goToPokePage()}>
      <p>{name} </p>

      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`}alt=""/>
      
      
      <div className="pb-btn" onClick={() => addToTeam(name)}>
        <img src={pb} alt="" />
        {/* pokeTeam.includes(poke) && <p>Gotcha!!</p> */}
      </div>
    </StyledCardPoke>
  );
};

export default CardPoke;
