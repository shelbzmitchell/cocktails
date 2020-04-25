import React from "react";

const Create = (props) => {
  console.log(props.ingredient[0]);
  return (
    <>
      <form onSubmit={this.props.handleFormSubmit}>
        {props.ingredient.map((ingredient) => {
          return <div>{ingredient.strIngredient1}</div>;
        })}
      </form>
    </>
  );
};

export default Create;
