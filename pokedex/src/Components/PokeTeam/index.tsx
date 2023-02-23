import { useContext } from 'react'
import { PokeTeamContext } from '../../Context/poketeam'
import CardPoke from '../CardPoke'


const PokeTeam = () => {
  const { pokeTeam } = useContext(PokeTeamContext)
  return (
    <div>
      {pokeTeam ? (
        pokeTeam.map((poke) => (
          <CardPoke key={poke} name={poke} />
        ))
      ) : (
        <p> No poke added </p>
      )}
    </div>
  )
}

export default PokeTeam
