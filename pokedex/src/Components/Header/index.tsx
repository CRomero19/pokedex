import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import gifPokeball from "../../assets/all-balls.gif";
import { useContext } from "react";
import { PokeListContext } from "../../Context/pokesList";

const Header = () => {

  const {setFilter} = useContext(PokeListContext)
  return (
    <StyledHeader>
      <div className="gif-ball">
        <img src={gifPokeball} alt="" className="gif-ball" />
      </div>

      <nav>
        <Link to={"/home"}> Pokedex </Link>
        
      </nav>
      {/* <div>
        <input type="text" placeholder="Pesquisar por um pokemon..." onChange={(event)=>setFilter(event.target.value)}/>
      </div> */}
    </StyledHeader>
  );
};

export default Header;
