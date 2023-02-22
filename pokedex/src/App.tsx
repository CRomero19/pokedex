import { useContext, useEffect, useState } from "react";
import CardPoke from "./Components/CardPoke";
import Header from "./Components/Header";
import "./Styles/index.css";
import { AppRoutes } from "./Routes/routes";
import { PokeListContext } from "./Context/pokesList";


function App() {
  
  return (
    <div>
      <Header />

      <AppRoutes/>
    </div>
  );
}

export default App;
