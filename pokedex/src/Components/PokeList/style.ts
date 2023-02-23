import styled from "styled-components";

export const StyledPokeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  

  li {
    width: 10rem;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
  }
  li p{
    text-transform: capitalize;
  }
  .poke-type{
    text-transform: capitalize;
    display: flex;
    position: absolute;
    top: 0;
    right: 0
  }

`;
