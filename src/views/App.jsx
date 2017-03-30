import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import Recipe from './Recipe';
import FormModal from './FormModal';
import '../css/App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.addRecipe = this.addRecipe.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.state = {
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
  }

  addRecipe() {

  }

  openForm(mode) {
    this.setState({ formIsOpen: true });
    console.log(mode + " " + this.state.formIsOpen);
  }

  closeForm() {
    this.setState({ formIsOpen: false });
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
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
