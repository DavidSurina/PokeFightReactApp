// App.js
import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
/* components */
import InputForm from "./components/InputForm";
import FightBar from "./components/FightBar";
import PokemonFight from "./components/PokemonFight";
import Footer from "./components/Footer";
/* views */
import ViewAllPokemons from "./views/ViewAllPokemons"

/* Logo */
import logo from "./img/pokefight_logo.png";
/* styles */
import './App.css';

function App() {
  //Search input
  let [input, setInput] = useState("");
  //Selected pokemon for fight
  let [pokeFightSel, setPokeFightSel] = useState([]);

  return (
    <div className="App">
      <header className="header">
          <div className="logo-wrapper">
              <img className="pokefight-logo" src={logo} alt="pokefight-logo" />
          </div>
          <InputForm input={input} setInput={setInput}/>
      </header>
      <main className="main">
        <Switch>
          <Route path="/pokemons/fight">
            <PokemonFight fightingPoke={pokeFightSel}/>
          </Route>
          <Route path={["/","/pokemons"]}>
            {/*all pokemon*/}
            <FightBar fightingPoke={pokeFightSel} reset={setPokeFightSel}/>
            <div className="dividing-line"></div>
            <ViewAllPokemons setFightPokemon={setPokeFightSel} fightPokemon={pokeFightSel}/>
            
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
