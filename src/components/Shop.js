import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { BeerCardSmall } from "./BeerCardSmall";

import Search from "./Search";
import withFechedData from "./../HOC/withFechedData";
import Pagination from "./Pagination";
import { PropTypes } from "prop-types";

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
      <Pagination />
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

Shop.propTypes = {
  items: PropTypes.array,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool
};
Shop.defaultProps = {
  items: [],
  hasErrored: true,
  isLoading: false
};
