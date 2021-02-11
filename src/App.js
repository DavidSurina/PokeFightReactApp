// App.js
import React from 'react';
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
        <Route path="/pokemons/:id">
          {/*Pokemon info by id*/}
        </Route>
        <Route path="/pokemons/fight">
          {/*Pokemon Fight*/}
        </Route>
        <Route path={["/","/pokemons"]}>
          {/*all pokemon*/}
          <ViewAllPokemons />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
