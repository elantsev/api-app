import React, { useEffect } from "react";
import { BeerCardSmall } from "./BeerCardSmall";
import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import "./App.css";
import queryString from "query-string";
import Search from "./Search";
import { itemsFetchData } from "./../actions/itemsFetchData";

function Shop({ fetchData, items, location, isLoading }) {
  useEffect(() => {
    fetchData(`https://api.punkapi.com/v2/beers${location.search}`);
    console.log(queryString.parse(location.search));
  }, [location.search]);

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
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
