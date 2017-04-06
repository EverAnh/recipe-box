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
    this.submitRecipe = this.submitRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);

    let stateBuilder = {
      formIsOpen: false,
      editMode: false,
      recipeToEdit: "",
      ingredientsToEdit: "",
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

  closeForm() {
    this.setState({formIsOpen: false});
  }

  deleteRecipe(name) {
    if(confirm("Are you sure you want to delete \"" + name + "\"?")) {
      let updatedState = this.state;
      delete(updatedState.recipes[name]);
      this.setState(updatedState);
      this.saveToLocalStorage();
    }
  }

  openForm(mode, name) {
    let updatedState = {formIsOpen: true};
    updatedState.editMode = (mode === "edit");
    if (name && name !== "") {
      updatedState.recipeToEdit = name;
      updatedState.ingredientsToEdit = this.state.recipes[name].join(", ");
    }
    else {
      updatedState.recipeToEdit = "";
      updatedState.ingredientsToEdit = "";
    }
    this.setState(updatedState);
  }

  saveToLocalStorage() {
    const lsRecipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("_anhhn1_recipes", lsRecipes);
  }

  submitRecipe(nameIn, ingredientsIn) {
    let updatedRecipes = this.state.recipes;
    updatedRecipes[nameIn] = ingredientsIn;
    if (this.state.editMode && nameIn !== this.state.recipeToEdit) {
      delete(updatedRecipes[this.state.recipeToEdit]);
    }
    this.setState({recipes: updatedRecipes});
    this.saveToLocalStorage();
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
                deleteRecipe={this.deleteRecipe}
                openForm={this.openForm}
              />
            ))}
            <Button bsStyle="primary" onClick={() => {this.openForm("add", "")}}>Add Recipe</Button>
            <FormModal
              isOpen={this.state.formIsOpen}
              editMode={this.state.editMode}
              recipeToEdit={this.state.recipeToEdit}
              ingredientsToEdit={this.state.ingredientsToEdit}
              close={this.closeForm}
              submitRecipe={this.submitRecipe}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
