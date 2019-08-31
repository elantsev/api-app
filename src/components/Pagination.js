// id: 325;

import React from "react";
import queryString from "query-string";
import style from "./Pagination.module.css";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import { withRouter } from "react-router";
import { useState } from "react";
import { PropTypes } from "prop-types";

function Pagination(route) {
  const [perPage, setPerPage] = useState(80);
  let items = 325;
  let currentQueryString = route.location.search;
  // const per_page = queryString.parse(currentQueryString).per_page;
  // if (perPage !== per_page) setPerPage(per_page);

  let pages = Math.ceil(items / perPage);
  let numbersOfPages = getNumbersOfPages(pages);
  let currentPage = queryString.parse(currentQueryString).page;
  console.log(perPage);

  const handlePerPage = ({ target: { value } }) => {
    setPerPage(value);
  };

  return (
    <ul className={style.ul}>
      <li className={style.li}>
        <a> &#60; </a>
      </li>
      {numbersOfPages.map(number => (
        <li key={number} className={style.li}>
          <NavLink
            className={currentPage == number ? "currentPage" : null}
            to={`/shop?${getQueryString(currentQueryString, number, perPage)}`}
          >
            {number}
          </NavLink>
        </li>
      ))}
      <li className={style.li}>
        <a> &#62; </a>
      </li>

      <li className={style.li}>
        <select
          className={style.select}
          value={perPage}
          onChange={handlePerPage}
        >
          <option value="5">5 items per page</option>
          <option value="10">10 items per page</option>
          <option value="20">20 items per page</option>
          <option value="50">50 items per page</option>
          <option value="80">80 items per page</option>
        </select>
      </li>
    </ul>
  );

  function getQueryString(currentQueryString, number, perPage) {
    let currentQueryStringObj = queryString.parse(currentQueryString);
    let newQueryStringObj = {
      ...currentQueryStringObj,
      page: number,
      per_page: perPage
    };
    let newQueryString = queryString.stringify(newQueryStringObj);
    return newQueryString;
  }

  function getNumbersOfPages(pages) {
    let numbersOfPages = [];
    for (let index = 1; index <= pages; index++) {
      numbersOfPages.push(index);
    }
    return numbersOfPages;
  }
}

export default compose(withRouter)(Pagination);

Pagination.propTypes = {
  route: PropTypes.object
};
Pagination.defaultProps = {
  route: {}
};
