import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={'/home'}> HOME</Link>
        <Link to={'/home/poketeam'}> POKETEAM</Link>
        <Link to={'/feedback'}> FEEDBACK </Link>
      </nav>
    </header>
  )
}

export default Header
