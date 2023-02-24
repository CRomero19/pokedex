import styled from "styled-components";

export const StyledPokePage = styled.div`
    width: 50%;
    margin: 0 auto;
    .note{
        position: absolute;
        opacity: 0.3;
        bottom: 0;
        right: 20%;
        
        cursor: pointer;

        display: flex;
        align-content: center;
        justify-content: center;
    }
    .poke__header{
        display: flex;
        justify-content: space-between;
    }
    .poke__header button{
        border: none;
        background-color: transparent;
        /* background-color: aliceblue;
        border-radius: 180px;
        width: 1.5rem;
        height: 1.5rem;
        line-height: 210%; */
    }
    .poke__header{
        font-size: var(--font-title-medium);
        text-transform: capitalize;
        color: var(--color-grey-0);
        width: 100%;
        text-align: center;
        background-color: var(--color-grey-3);
        border-radius: 8px 8px 0px 0px;
        margin-bottom: 0.5rem;
    }
    figure{
        position: relative;
        cursor: pointer;
        background-color: var(--color-grey-1);
        border-radius: 8px;
        padding: 0.5rem;
    }
    figure img{
        margin: 1rem;
        width: 95%;
    }
    .container__main{
        display: flex;
    }
    .container__info{
        width: 95%;
        background-color: red;
        border-radius: 8px;
        margin-left: 0.5rem;
        height: 20rem;
    }


    .container__aside{
        display: flex;
        margin-top: 0.5rem;
    }
    .container__status{
        background-color: yellow;
        border-radius: 8px;
        padding: 1rem;
        width: 50%;
    }
    .container__other{
        background-color: blue;
        border-radius: 8px;
        margin-left: 0.5rem;
        padding: 1rem;
        width: 50%;
    }

`