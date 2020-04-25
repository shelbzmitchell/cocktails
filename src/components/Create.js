import React, { Component } from "react";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedI: { value: "" },
      //   selectedC: { value: "" },
      //   selectedG: { value: "" },
      //   selectedA: { value: "" }
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.state.handleFormSubmit}>
          <select>
            {this.props.ingredient.map((ingredient) => {
              return <option>{ingredient.strIngredient1}</option>;
            })}
          </select>
          <button type="submit">Create</button>
        </form>
      </>
    );
  }
}

export default Create;
