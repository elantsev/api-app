import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { BeerCardSmall } from "./BeerCardSmall";

import Search from "./Search";
import withFechedData from "./../HOC/withFechedData";

function Shop({ items, isLoading }) {
  return (
    <>
      <h1 className="h1">Shop Page</h1> <Search />
      {isLoading && (
        <img
          className="shopPreloader"
          src="https://avtopartner102.ru/assets/images/system/loader.gif"
          alt="img"
        />
      )}
      {!isLoading && (
        <div>
          <div className="beerContainer">
            {items.map(beer => (
              <BeerCardSmall beer={beer} key={beer.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

export default compose(
  withFechedData,
  connect(mapStateToProps)
)(Shop);
