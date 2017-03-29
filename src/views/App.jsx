import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import Recipe from './Recipe';
import '../css/App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.addRecipe = this.addRecipe.bind(this);
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

  addRecipe() {
    alert("hello");

  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>My Recipe Box</h1>
            {Object.keys(this.state.recipes).map((recipeName) => (
              <Recipe
                recipeName={recipeName}
                ingredientList={this.state.recipes[recipeName]}
              />
            ))}
            <Button bsStyle="primary">Add Recipe</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
