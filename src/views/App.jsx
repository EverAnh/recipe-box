import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import Recipe from './Recipe';
import FormModal from './FormModal';
import '../css/App.css';

class App extends React.Component {
  constructor (props) {

    super(props);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.addNewRecipe = this.addNewRecipe.bind(this);

    let stateBuilder = {
      formIsOpen: false,
      editMode: false,
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
    const lsRecipes = localStorage.getItem("_anhhn1_recipes");
    if (lsRecipes) {
      stateBuilder.recipes = JSON.parse(lsRecipes);
    }
    this.state = stateBuilder;
  }

  addNewRecipe(nameIn, ingredientsIn) {
    let ingredientsArr = ingredientsIn.split(",");
    ingredientsArr = ingredientsArr.map((s) => {
      return s.trim();
    });
    let recipesState = this.state.recipes;
    recipesState[nameIn] = ingredientsArr;
    this.setState({recipes: recipesState});
    const lsRecipes = JSON.stringify(recipesState);
    localStorage.setItem("_anhhn1_recipes", lsRecipes);
  }

  closeForm() {
    this.setState({formIsOpen: false});
  }

  openForm(mode) {
    this.setState({formIsOpen: true});
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
            <Button bsStyle="primary" onClick={() => {this.openForm("add")}}>Add Recipe</Button>
            <FormModal
              isOpen={this.state.formIsOpen}
              close={this.closeForm}
              addNewRecipe={this.addNewRecipe}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
