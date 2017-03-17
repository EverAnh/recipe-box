import React from 'react';
import RecipeList from './RecipeList';
import '../css/App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recipes: [
        "Pumpkin Pie",
        "Spaghetti",
        "Onion Pie"
      ]
    };
  }
  render() {
    return (
      <div className="row">
        <div className="small-12 columns">
          <div className="bordered">
            <h1>Anh's Recipe Box</h1>
            <RecipeList />
            <button
              type="button"
              className="button"
              name="Add Recipe"
            >
              Add Recipe
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
