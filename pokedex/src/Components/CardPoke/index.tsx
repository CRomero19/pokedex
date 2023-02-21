import React from 'react'
import { StyledCardPoke } from './style';

interface ICardPokeProps{
    name:string
    address:string;
}

const CardPoke = ({name, address}:ICardPokeProps) => {
  return (
    <StyledCardPoke>
      <p> {name} </p>
      <p> {address} </p>
    </StyledCardPoke>
  )
}

export default CardPoke
