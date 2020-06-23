import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import NewRecipeForm from './components/NewRecipeForm';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= "/" component= {Recipes}/>
        <Route path="/recipes/new" exact component= {NewRecipeForm}/>
        <Route path= "/recipes/:id" component={RecipeDetails}/>
      </Switch>
      </div>
       </BrowserRouter>
  );
}

export default App;
