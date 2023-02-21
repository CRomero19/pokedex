import { useEffect, useState } from "react";
import CardPoke from "./Components/CardPoke";
import Header from "./Components/Header";
import { iPokeList } from "./Context/@Types/types";
import { allpokes } from "./Services/pokeapi";
import "./Styles/index.css";
import { AppRoutes } from "./Routes/routes";

function App() {
  const [pokesList, setPokesList] = useState([] as iPokeList[]);

  useEffect(() => {
    const getAllPokes = async () => {
      try {
        const reponse = await allpokes.get("");
        setPokesList(reponse.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokes();
  }, []);

  return (
    <div>
      <Header />

      {pokesList ? (
        pokesList.map((poke) => (
          <CardPoke key={poke.name} name={poke.name} address={poke.url} />
        ))
      ) : (
        <p> Carregando... </p>
      )}

      <AppRoutes/>
    </div>
  );
}

export default App;
