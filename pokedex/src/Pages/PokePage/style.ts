import styled from "styled-components";

export const StyledPokePage = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: red;
  padding: 0.3rem;
  .types{
    display: flex;
    width: fit-content;
    gap: 1rem;
  }
  .types p {
    color: var(--color-grey-0);
    background-color: var(--color-grey-3);
    border-radius: 8px;
    padding: 0.1rem 0.4rem;
    text-transform: capitalize;
  }
  .note {
    position: absolute;
    opacity: 0.3;
    bottom: 0;
    width: 100%;
    right: 0.5%;
    text-align: center;

    cursor: pointer;

    display: flex;
    align-content: center;
    justify-content: center;
  }
  .poke__header {
    display: flex;
    justify-content: space-between;
  }
  .poke__header button {
    border: none;
    background-color: transparent;
  }
  .poke__header {
    font-size: var(--font-title-medium);
    text-transform: capitalize;
    color: var(--color-grey-0);
    width: 100%;
    text-align: center;
    background-color: var(--color-grey-3);
    border-radius: 8px 8px 0px 0px;
    margin-bottom: 0.5rem;
  }
  figure {
    position: relative;
    cursor: pointer;
    background-color: var(--color-grey-1);
    border-radius: 8px;
    padding: 0.5rem;
  }
  figure img {
    margin: 1rem;
    width: 95%;
  }
  .container__main {
    display: flex;
  }
  .container__info {
    background-color: var(--color-grey-0);
    border-radius: 8px;
    margin-left: 0.5rem;
    padding: 1rem;
  }

  .container__aside {
    display: flex;
    margin-top: 0.5rem;
    gap: 0.5rem;
  }
  .container__status {
    background-color: var(--color-grey-0);
    border-radius: 15px 0px 15px 0px;
    padding: 1rem;
    width: 50%;
  }
  .container__other {
    background-color: var(--color-grey-0);
    border-radius: 0px 15px 0px 15px;
    padding: 1rem;
    width: 50%;
  }


  @media (max-width:1024px) {
    width: 98%;

    figure img {
    margin: 1rem;
    width: 95%;
    margin: 0 auto;
  }


  } 
`;
