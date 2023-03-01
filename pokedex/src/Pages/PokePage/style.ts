import styled from "styled-components";

interface pokeTypes {
  pokeTypes: string[];
}

export const StyledPokePage = styled.div`
  width: 55%;
  margin: 0 auto;
  
  .poke__header {
    font-size: var(--font-title-medium);
    text-transform: capitalize;
    color: var(--color-grey-0);
    width: 100%;
    text-align: center;
    background-color: var(--color-grey-3);
    border-radius: 8px 8px 0px 0px;
    margin-bottom: 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 0.3rem;
  }
  .poke__header button {
    border: none;
    background-color: transparent;
  }
  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .types {
    display: flex;
    width: fit-content;
    gap: 1rem;
  }
  .types p {
    color: var(--color-grey-0);
    border-radius: var(--radius-default);
    padding: 0.2rem 0.6rem;
    text-transform: capitalize;
    font-size: 1rem;
    background-color: ${({ pokeTypes }) =>
    (pokeTypes[0] === "fire" && "#fd7d24") ||
    (pokeTypes[0] === "water" && "#4593c4") ||
    (pokeTypes[0] === "ground" && "#aa9941") ||
    (pokeTypes[0] === "grass" && "green") ||
    (pokeTypes[0] === "bug" && "#729f40") ||
    (pokeTypes[0] === "rock" && "#a38c22") ||
    (pokeTypes[0] === "electric" && "#eed435") ||
    (pokeTypes[0] === "psychic" && "#f466ba") ||
    (pokeTypes[0] === "water" && "blue") ||
    (pokeTypes[0] === "fighting" && "#BF5C1E") ||
    (pokeTypes[0] === "normal" && "#DAA06D") ||
    (pokeTypes[0] === "ice" && "#2CD1CB") ||
    (pokeTypes[0] === "dragon" && "#D12C5E") ||
    (pokeTypes[0] === "poison" && "#b881c4") ||
    (pokeTypes[0] === "fairy" && "#fdb9ea") ||
    (pokeTypes[0] === "steel" && "#9db8b7") ||
    (pokeTypes[0] === "dark" && "#707070") ||
    (pokeTypes[0] === "ghost" && "#7a649e") ||
    (pokeTypes[0] === "flying" && "#350D52")
}
}

  figure {
    position: relative;
    background-color: var(--color-grey-1);
    border-radius: 8px;
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: var(--radius-box-1)
  }
  figure img {
    margin: 1rem;
    width: 95%;
  }
  select{
    text-transform: capitalize;
    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
    border-radius: 8px;
    padding: 0.5rem;
  }
  option{
    text-transform: capitalize;
  }

  .container__info {
    background-color: var(--color-grey-0);
    border-radius: 8px;
    border-radius: var(--radius-box-2);
    background-color: pink;
    padding: 1rem;
  }

  .container__status {
    background-color: var(--color-grey-0);
    border-radius: var(--radius-box-2);
    padding: 1rem;
    width: 100%;
    background-color: green;
  }
  .container__other {
    background-color: var(--color-grey-0);
    border-radius: var(--radius-box-1);
    padding: 1rem;
    width: 100%;
    background-color: yellow;
  }

  @media (max-width: 1024px) {
    width: 98%;

    figure img {
      margin: 1rem;
      width: 95%;
      margin: 0 auto;
    }
  }
`;
