import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/pokemon/:id/:info"></Route>
        <Route path="/pokemon/:id"></Route>
        <Route path="/pokemon"></Route>
        <Route path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
