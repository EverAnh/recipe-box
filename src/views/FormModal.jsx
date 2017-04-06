import React from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class FormModal extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.handleSubmitRecipe = this.handleSubmitRecipe.bind(this);
    this.state = {
      nameVal: '',
      ingredientsVal: ''
    };
  }

  handleChangeName(event) {
    this.setState({nameVal: event.target.value});
  }

  handleChangeIngredients(event) {
    this.setState({ingredientsVal: event.target.value});
  }

  handleSubmitRecipe(event) {
    this.props.close();
    let ingredientsArr = this.state.ingredientsVal.split(",");
    ingredientsArr = ingredientsArr.map((s) => {
      return s.trim();
    });
    if (this.props.editMode) {
      this.props.editRecipe(this.state.nameVal, ingredientsArr);
    }
    else {
      this.props.addNewRecipe(this.state.nameVal, ingredientsArr);
    }
    this.setState({
      nameVal: '',
      ingredientsVal: ''
    });
  }

  componentWillReceiveProps(nextProps) {
    let stateBuilder = {};
    stateBuilder.nameVal = nextProps.editMode ? nextProps.recipeToEdit : "";
    stateBuilder.ingredientsVal = nextProps.editMode ? nextProps.ingredientsToEdit : "";
    this.setState(stateBuilder);
  }

  render() {

    const modalTitle = this.props.editMode ? <Modal.Title>Edit Recipe</Modal.Title> : <Modal.Title>Add A Recipe</Modal.Title>;
    const submitButton = this.props.editMode ?
      <Button type="submit" onClick={this.handleSubmitRecipe} bsStyle="primary">Submit Edit</Button>
      : <Button type="submit" onClick={this.handleSubmitRecipe} bsStyle="primary">Add Recipe</Button>;

    return (
      <Modal show={this.props.isOpen} onHide={this.props.close}>
        <Modal.Header closeButton onClick={this.props.close}>
          {modalTitle}
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="fcName">
              <ControlLabel>Recipe Name</ControlLabel>
              <FormControl type="text" value={this.state.nameVal} onChange={this.handleChangeName} />
            </FormGroup>
            <FormGroup controlId="fcIngredients">
              <ControlLabel>Ingredients</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Enter ingredients, separated by commas."
                value={this.state.ingredientsVal}
                onChange={this.handleChangeIngredients}
              />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {submitButton}
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FormModal;
