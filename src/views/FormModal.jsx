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
    console.log("button clicked");
    this.props.addNewRecipe(this.state.nameVal, this.state.ingredientsVal);
    this.setState({
      nameVal: '',
      ingredientsVal: ''
    });
    this.props.close();
  }

  render() {
    return (
      <Modal show={this.props.isOpen} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="fcName">
              <ControlLabel>Recipe Name</ControlLabel>
              <FormControl type="text" value={this.props.value} onChange={this.handleChangeName} />
            </FormGroup>
            <FormGroup controlId="fcIngredients">
              <ControlLabel>Ingredients</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Enter ingredients, separated by commas."
                value={this.props.value}
                onChange={this.handleChangeIngredients}
              />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={this.handleSubmitRecipe} bsStyle="primary">Add Recipe</Button>
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FormModal;
