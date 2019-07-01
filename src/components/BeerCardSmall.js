import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function BeerCardSmall({ beer }) {
  return (
    <div className="BeerCardSmall">
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>{`abv: ${beer.abv} %`}</p>

      <Link to={`/shop/${beer.id}`}>
        <img height={"200px"} src={beer.image_url} alt="img_small" />
      </Link>
    </div>
  );
}

BeerCardSmall.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string,
    tagline: PropTypes.string,
    abv: PropTypes.number,
    id: PropTypes.number
  })
};
BeerCardSmall.defaultProps = {
  beer: PropTypes.shape({
    name: "",
    tagline: "",
    abv: "",
    id: ""
  })
};
