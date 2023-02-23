import styled from "styled-components";

interface pokeTypes {
  pokeTypes: string[];
}

export const StyledCardPoke = styled.li<pokeTypes>`
  font-family: "Roboto", sans-serif;
  height: 1rem;
  margin: 1rem auto;

  display: flex;
  gap: 1rem;

  padding: 1rem;
  color: aliceblue;
  background-color: ${({ pokeTypes }) =>
    (pokeTypes[0] === "fire" && "#9d031f") ||
    (pokeTypes[0] === "water" && "#2C63D1") ||
    (pokeTypes[0] === "ground" && "#7B3F00") ||
    (pokeTypes[0] === "grass" && "green") ||
    (pokeTypes[0] === "bug" && "#90EE90") ||
    (pokeTypes[0] === "rock" && "#3E3A3E") ||
    (pokeTypes[0] === "electric" && "#F4EE41") ||
    (pokeTypes[0] === "psychic" && "#CB7CC9") ||
    (pokeTypes[0] === "water" && "blue") ||
    (pokeTypes[0] === "fighting" && "#d87822") ||
    (pokeTypes[0] === "normal" && "#DAA06D") ||
    (pokeTypes[0] === "ice" && "#2CD1CB") ||
    (pokeTypes[0] === "dragon" && "#D12C5E") ||
    (pokeTypes[0] === "poison" && "#BC2CD1") ||
    (pokeTypes[0] === "fairy" && "#FF0CF7") ||
    (pokeTypes[0] === "steel" && "#CDC3CD") ||
    (pokeTypes[0] === "dark" && "#39527D") ||
    (pokeTypes[0] === "ghost" && "#350D52") ||
    "grey"};
  img {
    object-fit: contain;
    width: 5rem;
  }
  .pb-btn {
    position: relative;
    cursor: pointer;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pb-btn img{
    object-fit: cover;
    border-radius: 360px;
    width: 2rem;
  }
  .pb-btn:hover {
    filter: brightness(1.35);
    color: var(--color-grey-0);
  }
  button {
    border: none;
    background-color: transparent;

    font-family: "Roboto", sans-serif;
    font-weight: 900;
  }

  .link {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    text-decoration: none;
    color: black;
    transition: 600ms;
  }
  .link:hover {
    color: azure;
  }
`;
