import React from 'react';
import { Button, ButtonToolbar, Panel } from 'react-bootstrap';
import Ingredient from './Ingredient';

class Recipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div>
        <Panel header={this.props.recipeName} collapsible expanded={this.state.open} onClick={ ()=> this.setState({ open: !this.state.open })}>
          <ul>
            {this.props.ingredientList.map((ingredient) => (
              <li><Ingredient ingredient={ingredient} /></li>
            ))}
          </ul>
          <ButtonToolbar>
            <Button bsStyle="danger" bsSize="small">Delete</Button>
            <Button bsSize="small">Edit</Button>
          </ButtonToolbar>
        </Panel>
      </div>
    );
  }
}

export default Recipe;
