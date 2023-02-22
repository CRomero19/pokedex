import { Link } from "react-router-dom";
import { StyledHeader } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Link to={'/home'}> HOME</Link>
        <Link to={'/home/poketeam'}> POKETEAM</Link>
        <Link to={'/feedback'}> FEEDBACK </Link>
      </nav>
    </StyledHeader>
  )
}

export default Header
