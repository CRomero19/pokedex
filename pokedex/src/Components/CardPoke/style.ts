import styled from "styled-components";
import { getTypeColor } from "../../utils/getTypeColor";

interface pokeTypes {
  pokeTypes: string[];
}

export const StyledCardPoke = styled.li<pokeTypes>`
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  font-family: "Roboto", sans-serif;
  height: 1rem;
  margin: 1rem auto;

  display: flex;
  
  gap: 1rem;

  padding: 1rem;
  color: aliceblue;
  cursor: pointer;
  background-color: ${({ pokeTypes }) => getTypeColor(pokeTypes[0])};
  transition: 600ms;
  &&:hover {
    filter: brightness(1.2);
  }
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
  .pb-btn img {
    object-fit: cover;
    border-radius: 360px;
    width: 2rem;
  }
  .pb-btn img:hover {
    filter: brightness(1.35);
    animation: shake 0.5s;
    animation-iteration-count: infinite;
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
