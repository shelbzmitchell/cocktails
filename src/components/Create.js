import React, { Component } from "react";
import Results from "../components/Results";
import axios from "axios";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedI: { value: "" },
      //   selectedC: { value: "" },
      //   selectedG: { value: "" },
      //   selectedA: { value: "" },
      isSubmitted: false,
    };
  }

  handleIngredientChange = (event) => {
    let chosenIngredient = event.target.value;
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${chosenIngredient}`
      )
      .then((response) => {
        console.log(response.data.drinks);
        this.setState({
          ingredientDrinkList: response.data.drinks,
          selectedI: { value: chosenIngredient },
        });
      });
  };

  handleSubmit = (event) => {
    event.preventdefault();
    this.setState({
      isSubmitted: true,
    });
  };

  render() {
    console.log(this.state);

    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleIngredientChange}
        >
          <select value={this.state.value}>
            {this.props.ingredient.map((ingredient) => {
              return (
                <option value={ingredient.strIngredient1}>
                  {ingredient.strIngredient1}
                </option>
              );
            })}
          </select>
          <input type="submit" value="Submit" />
        </form>

        {this.state.isSubmitted && <Results />}
      </>
    );
  }
}

export default Create;
