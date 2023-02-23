import styled from "styled-components";

export const StyledPokeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    width: 10rem;
    height: fit-content;
    border: 1px solid blue;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: grey;

    position: relative;
  }
  li p{
    text-transform: capitalize;
  }
  .poke-title{
    text-transform: capitalize;
    background-color: red;
    display: flex;
    position: absolute;
    top: 0;
    right: 0
  }

`;
