import { Link } from "react-router-dom";
import { StyledHeader } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Link to={'/home'}> Pokedex </Link>
        <Link to={'/home/poketeam'}> PokeTeam </Link>
        <Link to={'/feedback'}> Feedback </Link>
      </nav>
    </StyledHeader>
  )
}

export default Header
