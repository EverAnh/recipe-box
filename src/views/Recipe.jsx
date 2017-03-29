import React from 'react';
import Ingredient from './Ingredient';

class Recipe extends React.Component {

  constructor (props) {
    super(props);
    this.state = {expanded: false};
  }

  ingredientList (props) {
    return (
      <ul>
        {this.props.ingredientList.map((ingredient) => (
          <li><Ingredient ingredient={ingredient} /></li>
        ))}
      </ul>
    );
  }

  recipeButtons (props) {
    return (
      <div className="button-group">
        <button type="button" className="alert button" name="Delete">
          Delete
        </button>
        <button type="button" className="button" name="Edit">
          Edit
        </button>
      </div>
    );
  }

  render () {

    let buttons = null;
    let ingredientList = null;
    if (this.state.expanded) {
      ingredientList = this.ingredientList();
      buttons = this.recipeButtons();
    }

    return (
      <div>
        <h2><a type="button">{this.props.recipeName}</a></h2>
        {ingredientList}
        {buttons}
      </div>
    );
  }
}

export default Recipe;
