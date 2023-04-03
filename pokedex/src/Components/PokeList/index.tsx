import { useContext } from 'react'
import { PokeListContext } from '../../Context/pokesList'
import CardPoke from '../CardPoke'
import { StyledPokeList } from './style'
import {AiOutlinePlusSquare} from 'react-icons/ai'


const PokeList = () => {
  const { filteredPokes, pokeLimit, setPokeLimit } = useContext(PokeListContext)

  const morePokes = () => {
    setPokeLimit(pokeLimit + 20);
  };

  return (
    <StyledPokeList>
      {filteredPokes ? (
        filteredPokes.map((poke) => (
          <CardPoke key={poke.name} name={poke.name} address={poke.url} />
        ))
      ) : (
        <p> Carregando... </p>
      )}
      
      <button onClick={()=>morePokes()} className='btn-more'> <AiOutlinePlusSquare size={30} color='aliceblue'/> </button>
      
    </StyledPokeList>
  )
}

export default PokeList
