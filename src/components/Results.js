import React from "react";

const Results = (props) => {
  return (
    <>
      {props.drinkList.map((drink, index) => {
        return <div key={index}>{drink.strDrink}</div>;
      })}
    </>
  );
};

export default Results;
