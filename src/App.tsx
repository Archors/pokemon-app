import React, { FunctionComponent, useEffect, useState } from "react";
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

const App: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
      setPokemons(POKEMONS);
  }, []);
  return <h1>Il y a {pokemons.length} Pokemons !</h1>;
};

export default App;
