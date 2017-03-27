import React from 'react';
import RecipeList from './RecipeList';
import '../css/App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recipes: {
        "Pumpkin Pie": [
          "Pumpkin Puree",
          "Sweetened Condensed Milk",
          "Eggs",
          "Pumpkin Pie Spice",
          "Pie Crust"
        ],
        "Spaghetti": [
          "Noodles",
          "Tomato Sauce",
          "(Optional) Meatballs"
        ],
        "Onion Pie": [
          "Onion",
          "Pie Crust",
          "Sounds Yummy right?"
        ]
      }
    };
  }
  render() {
    return (
      <div className="row">
        <div className="small-12 columns">
          <div className="bordered">
            <h1>Anh's Recipe Box</h1>
            <RecipeList
              state={this.state}
            />
            <button
              type="button"
              className="success button"
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
