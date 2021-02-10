import { Switch, Route } from 'react-router-dom';
/* views */
import ViewAllPokemons from "./views/ViewAllPokemons"

/* styles */
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/pokemons/:id/:info"></Route>
        <Route path="/pokemons/:id"></Route>
        <Route path="/pokemons">
          <ViewAllPokemons />
        </Route>
        <Route path="/">
          <h1>PokeFight</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
