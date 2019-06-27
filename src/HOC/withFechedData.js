import React from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../actions/itemsFetchData";
import { withRouter } from "react-router";
import { compose } from "redux";

export default function withFechedData(Component) {
  function withFechedDataComponent({ fetchData, location }) {
    let pathname = location.pathname.slice(5);
    fetchData(`https://api.punkapi.com/v2/beers${pathname}${location.search}`);
    return <Component />;
  }

  const mapDispatchToProps = dispatch => {
    return {
      fetchData: url => dispatch(itemsFetchData(url))
    };
  };

  return compose(
    withRouter,
    connect(
      null,
      mapDispatchToProps
    )
  )(withFechedDataComponent);
}
