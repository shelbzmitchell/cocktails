import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "./components/Create";
import Results from "./components/Results";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doneLoading: false,
      ingredient: [],
      category: [],
      glass: [],
      alcoholic: [],
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        ),
        axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        ),
        axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
        ),
        axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
        ),
      ])
      .then((response) => {
        console.log(response);
        this.setState({
          doneLoading: true,
          ingredient: response[0].data,
          category: response[1].data,
          glass: response[2].data,
          alcoholic: response[3].data,
        });
      });
  }

  //   handleFormSubmit = event => {
  //         event.preventDefault();
  //         //axios request for cocktail list that match parameters
  // }

  render() {
    console.log(this.state.ingredient.drinks);
    if (this.state.doneLoading === true) {
      return (
        <>
          <Router>
            <Route path="/">
              <Create ingredient={this.state.ingredient.drinks} />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
          </Router>
        </>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
