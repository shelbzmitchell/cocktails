import React, { Component } from "react";
import Results from "../components/Results";
import axios from "axios";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedI: { value: "" },
      selectedC: { value: "" },
      selectedG: { value: "" },
      selectedA: { value: "" },
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
        this.setState({
          drinkList: response.data.drinks,
          selectedI: { value: chosenIngredient },
        });
      });
  };

  handleCategoryChange = (event) => {
    let chosenCategory = event.target.value;
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
      .then((response) => {
        console.log(response);
      });
  };

  //onchange event activates axios call with selected ingredient
  //returns list of drinks with selected alcohol
  //sets selectedI state to value of chosen ingredient
  //if selectedI has a value, next form dropdown is shown
  //next form shows cocktail categories, based on ingredients.
  //categories onchange event handler sets selectedC to event.target.value
  //activates axios call to get drinks of chosen category
  // if drinkID of drinkList = drinkID of categorylist, SHOW

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isSubmitted: true,
    });
    event.target.reset();
  };

  render() {
    console.log(this.state.drinkList);

    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleIngredientChange}
        >
          <select value={this.state.value}>
            {this.props.ingredient.map((ingredient, index) => {
              return (
                <option key={index} value={ingredient.strIngredient1}>
                  {ingredient.strIngredient1}
                </option>
              );
            })}
          </select>
          <input type="submit" value="Submit" />
        </form>
        {/* {this.state.selectedI.value &&
          this.state.ingredientDrinkList.map((drink, index) => {
            return (
              <form onChange={this.handleCategoryChange}>
                <select value={this.state.value}>
                  <option key={index} value={} />
                </select>
              </form>
            );
          })} */}
        {this.state.isSubmitted && <Results drinkList={this.state.drinkList} />}
      </>
    );
  }
}

export default Create;
