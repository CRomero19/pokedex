import React from 'react'
import { Link } from 'react-router-dom';
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
      <Link to={`/home/poke/${address.slice(34)}`}>  More... </Link>
    </StyledCardPoke>
  )
}

export default CardPoke
