import React from 'react';
import { Button, ButtonToolbar, Panel } from 'react-bootstrap';

class Recipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div>
        <Panel header={this.props.recipeName} collapsible expanded={this.state.open} onSelect={ ()=> this.setState({ open: !this.state.open })}>
          <ul>
            {this.props.ingredientList.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <ButtonToolbar>
            <Button bsStyle="danger" bsSize="small" onClick={() => {this.props.deleteRecipe(this.props.recipeName)}}>Delete</Button>
            <Button bsSize="small" onClick={() => {this.props.openForm("edit", this.props.recipeName)}}>Edit</Button>
          </ButtonToolbar>
        </Panel>
      </div>
    );
  }
}

export default Recipe;
