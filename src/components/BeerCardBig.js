import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withFechedData from "./../HOC/withFechedData";
import PropTypes from "prop-types";

function BeerCardBig({ beer }) {
  console.log(beer);
  console.log(beer.length);
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
    beer: state.items
  };
};

export default compose(
  withFechedData,
  connect(mapStateToProps)
)(BeerCardBig);

BeerCardBig.propTypes = {
  beer: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      tagline: PropTypes.string,
      boil_volume: PropTypes.object,
      brewers_tips: PropTypes.string,
      contributed_by: PropTypes.string,
      description: PropTypes.string,
      first_brewed: PropTypes.string
    })
  )
};
BeerCardBig.defaultProps = {
  beer: PropTypes.arrayOf(
    PropTypes.shape({
      name: "",
      tagline: "",
      boil_volume: "",
      brewers_tips: "",
      contributed_by: "",
      description: "",
      first_brewed: "",
      image_url: ""
    })
  )
};
