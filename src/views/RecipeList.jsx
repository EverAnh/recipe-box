import React from 'react';
import Recipe from './Recipe';

const RecipeList = (props) => {
    return (
      <div className="bordered">
        {Object.keys(props.state.recipes).map((recipeName) => (
          <Recipe
            recipeName={recipeName}
            ingredientList={props.state.recipes[recipeName]}
          />
        ))}
      </div>
    );
}

export default RecipeList;
