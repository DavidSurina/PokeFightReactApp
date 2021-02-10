import { Switch, Route } from 'react-router-dom';
/* styles */
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/pokemon/:id/:info"></Route>
        <Route path="/pokemon/:id"></Route>
        <Route path="/pokemon"></Route>
        <Route path="/">
          <h1>PokeFight</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
