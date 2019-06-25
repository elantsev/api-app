import React from "react";
import { Link } from "react-router-dom";
export function BeerCardSmall({ beer }) {
  return (
    <div className="BeerCardSmall">
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>

      <Link to={`/shop/${beer.id}`}>
        <img height={"200px"} src={beer.image_url} alt="img_small" />
      </Link>
    </div>
  );
}
