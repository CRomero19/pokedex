import styled from "styled-components";

export const StyledHeader = styled.header`
    font-family: 'Roboto', sans-serif;
    height: 5vh;

    box-shadow: 0px 5px 30px rgb(0,0,0,0.5);
    background-color: #FFF;

    margin-bottom: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap:1rem;

    nav{
        display: flex;
        gap:1rem;

        width: fit-content;

        a{
            text-decoration: none;
        }
    }
    .gif-ball{
        height: 5vh;
    }
`