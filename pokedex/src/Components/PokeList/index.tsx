import { useContext } from 'react'
import { PokeListContext } from '../../Context/pokesList'
import CardPoke from '../CardPoke'
import { StyledPokeList } from './style'


const PokeList = () => {
  const { pokesList } = useContext(PokeListContext)
  return (
    <StyledPokeList>
      {pokesList ? (
        pokesList.map((poke) => (
          <CardPoke key={poke.name} name={poke.name} address={poke.url} />
        ))
      ) : (
        <p> Carregando... </p>
      )}
    </StyledPokeList>
  )
}

export default PokeList
