import styled from "styled-components";

export const StyledPokeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 50%;
  margin: 0 auto;
  background-color: var(--color-grey-2);
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
  .btn-more{
    margin: none;
    border: none;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    background-color: var(--color-grey-3);
    
    transition: 500ms;
  }
  .btn-more:hover{
    background-color: var(--color-grey-hover);
  }

`;
