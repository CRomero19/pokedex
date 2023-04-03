import styled from "styled-components";


export const StyledPokePageHeader = styled.div`
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

  button {
    border: none;
    background-color: transparent;
  }
`;
