import React from 'react';
import Ingredient from './Ingredient';

const Recipe = (props) => {
  return (
    <div>
      <h2>{props.recipeName}</h2>
      <ul>
        <li><Ingredient /></li>
        <li><Ingredient /></li>
        <li><Ingredient /></li>
        <li><Ingredient /></li>
      </ul>
    </div>
  );
}

export default Recipe;
