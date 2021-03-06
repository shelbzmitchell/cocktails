import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "./components/Create";

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
        this.setState({
          doneLoading: true,
          ingredient: response[0].data,
          category: response[1].data,
          glass: response[2].data,
          alcoholic: response[3].data,
        });
      });
  }

  render() {
    console.log(this.state.category);
    if (this.state.doneLoading === true) {
      return (
        <>
          <Router>
            <Route path="/">
              <Create
                ingredient={this.state.ingredient.drinks}
                category={this.state.category.drinks}
              />
            </Route>
          </Router>
        </>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
