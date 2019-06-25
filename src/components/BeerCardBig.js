import React, { useEffect } from "react";
import { itemsFetchData } from "./../actions/itemsFetchData";
import { connect } from "react-redux";

function BeerCardBig({ fetchData, beer, match }) {
  useEffect(() => {
    fetchData(`https://api.punkapi.com/v2/beers/${match.params.id}`);
  }, []);
  console.log(beer);
  if (beer !== undefined) beer = beer[0];
  if (beer === undefined) return "";

  return (
    <div className="beerCardBig">
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>
        boil volume: {beer.boil_volume.value} {beer.boil_volume.unit}
      </p>
      <p>
        volume: {beer.volume.value} {beer.volume.unit}
      </p>
      <p>brewers tips: {beer.brewers_tips}</p>
      <p>contributed by: {beer.contributed_by}</p>
      <p>description: {beer.description}</p>
      <p>first brewed: {beer.first_brewed}</p>
      <p>food pairing:</p>
      <ul>
        {beer.food_pairing.map((item, i) => (
          <li key={i}>
            <p>{item}</p>
          </li>
        ))}
      </ul>

      <img className="beerCardBig__img" src={beer.image_url} alt="img_big" />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    beer: state.items,
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
)(BeerCardBig);
