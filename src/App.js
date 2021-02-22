// App.js
import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// Import api functionality
import Api from './api/index';
/* components */
import InputForm from './components/InputForm';
import FightBar from './components/FightBar';
import Footer from './components/Footer';

/* views */
import ViewAllPokemons from './views/ViewAllPokemons';
import ViewSearch from './views/ViewSearch';
import ViewFight from './views/ViewFight';

/* Logo */
import logo from './img/pokefight_logo.png';
/* styles */
import './App.css';

function App() {
  //All pokemon
  const [pokemonList, setPokemonList] = useState();
  //Search input
  let [searchInput, setSearchInput] = useState('1');
  //Selected pokemon for fight
  let [pokeFightSel, setPokeFightSel] = useState([]);
  //Fight History
  const [fightHistory, setFightHistory] = useState([]);

  useEffect(() => {
    Api.getAllPokemons()
      .then((res) => {
        setPokemonList(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    Api.getFightHistory()
      .then((res) => {
        setFightHistory(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="logo-wrapper">
          <Link
            to="./pokemons"  >
            <img className="pokefight-logo" src={logo} alt="pokefight-logo" />
          </Link>
        </div>
        <InputForm pokemonList={pokemonList} input={searchInput} setInput={setSearchInput} />
      </header>
      <main className="main">
        <Switch>
          {/*----Pokefigth Route----*/}
          <Route path="/pokemons/fight">
            <ViewFight
              fightingPoke={pokeFightSel}
              fightHistory={fightHistory}
            />
          </Route>

          {/*----PokeSearch Route----*/}
          <Route path="/pokemons/search">
            <FightBar fightingPoke={pokeFightSel} reset={setPokeFightSel} />
            <div className="dividing-line"></div>
            <h1 className="grid-heading">Search : {searchInput}</h1>
            <ViewSearch
              pokemonList={pokemonList}
              searchInput={searchInput}
              setFightPokemon={setPokeFightSel}
              fightPokemon={pokeFightSel}
            />
          </Route>

          {/*----Route displaying all pokemon----*/}
          <Route path={['/', '/pokemons']}>
            <FightBar fightingPoke={pokeFightSel} reset={setPokeFightSel} />
            <div className="dividing-line"></div>
            <h1 className="grid-heading">All Pokemons</h1>
            <ViewAllPokemons
              pokemonList={pokemonList}
              setFightPokemon={setPokeFightSel}
              fightPokemon={pokeFightSel}
            />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
