import { Switch, Route } from 'react-router-dom';
/* styles */
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/pokemon/:id/:info"></Route>
        <Route path="/pokemon/:id">
          {/*Pokemon info by id*/}
        </Route>
        <Route path="/pokemon/fight">
          {/*Pokemon Fight*/}
        </Route>
        <Route path={["/","/pokemon"]}>
          {/*all pokemon*/}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
