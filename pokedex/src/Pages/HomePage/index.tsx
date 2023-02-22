import { useContext } from 'react'
import CardPoke from '../../Components/CardPoke'
import { PokeListContext } from '../../Context/pokesList'

const HomePage = () => {
  const { pokesList } = useContext(PokeListContext)

  return (
    <div>
      {pokesList ? (
        pokesList.map((poke) => (
          <CardPoke key={poke.name} name={poke.name} address={poke.url} />
        ))
      ) : (
        <p> Carregando... </p>
      )}
    </div>
  )
}

export default HomePage
