import React from 'react';
import Recipe from './Recipe';

class RecipeList extends React.Component {
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
      <div className="bordered">
        {this.state.recipes.map((recipeName) => (
          <Recipe recipeName={recipeName} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
