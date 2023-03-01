import styled from "styled-components";
import { getTypeColor } from "../../utils/getTypeColor";

interface textType {
    pokeTypes: string;
}
  
export const StyledTagType = styled.div`
    background-color: ${({ textType }:any) => getTypeColor(textType)};
    padding: 0.2rem 0.6rem;

    font-size: 0.9rem;
    border-radius: 4px;
`