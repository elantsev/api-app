import React, { useEffect } from "react";
import { BeerCardSmall } from "./BeerCardSmall";
import { connect } from "react-redux";
// import "./App.css";
import { itemsFetchData } from "./../actions/itemsFetchData";

function Shop({ fetchData, items, isLoading }) {
  useEffect(() => {
    fetchData("https://api.punkapi.com/v2/beers/");
  }, []);

  return (
    <>
      {isLoading && (
        <img src="https://avtopartner102.ru/assets/images/system/loader.gif" />
      )}
      {!isLoading && (
        <div>
          <h1 className="h1">Shop Page</h1>
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
