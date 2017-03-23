import React from 'react';
import Ingredient from './Ingredient';

const Recipe = (props) => {
  return (
    <div>
      <h2>{props.recipeName}</h2>
      <ul>
        {props.ingredientList.map((ingredient) => (
          <li><Ingredient ingredient={ingredient} /></li>
        ))}
      </ul>
      <button
        type="button"
        className="alert button"
        name="Delete"
      >
        Delete
      </button>
      <button
        type="button"
        className="secondary button"
        name="Edit"
      >
        Edit
      </button>
    </div>
  );
}

export default Recipe;
