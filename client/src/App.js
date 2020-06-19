import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= "/" component= {Recipes}/>
        <Route path= "/recipes/:id" component={RecipeDetails}/>
      </Switch>
      </div>
       </BrowserRouter>
  );
}

export default App;
