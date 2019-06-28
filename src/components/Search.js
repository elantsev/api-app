import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import style from "./Search.module.css";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import queryString from "query-string";
import { compose } from "redux";

function Search(route) {
  let currentSearchStr = route.location.search;
  let currentSearchStrObj = queryString.parse(currentSearchStr);
  console.log(currentSearchStrObj);

  //   const [date, setDate] = useState({
  //     startDate: new Date(),
  //     endDate: new Date()
  //   });
  //   const handleChangeStartDate = startDate => setDate({ ...date, startDate });
  //   const handleChangeEndDate = endDate => setDate({ ...date, endDate });

  let initialSearchData = {
    abv_gt: "",
    abv_lt: "",
    ibu_gt: "",
    ibu_lt: "",
    ebc_gt: "",
    ebc_lt: "",
    beer_name: "",
    yeast: "",
    hops: "",
    malt: "",
    food: "",
    ids: ""
  };
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(initialSearchData);

  const handleChange = ({ target: { value, id } }) => {
    setSearchData({ ...searchData, [id]: value });
    setSearchFull({ ...searchData, [id]: value }, currentSearchStrObj);
  };

  const handleClear = () => {
    setSearchData(initialSearchData);
    setSearch("");
  };

  function setSearchFull(searchData, currentSearchStrObj) {
    let data = { ...searchData, ...currentSearchStrObj };
    let result = "?";
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] !== "") {
          result += `${key}=${data[key]}&`;
        }
      }
    }
    result = result.slice(0, -1);
    setSearch(result);
    return result;
  }

  return (
    <>
      <form>
        <h2 className={style.h2}>Search form:</h2>
        <div className={style.hidedDiv}>
          <p>Filter by:</p>
          <label htmlFor="abv_gt">ABV:</label>
          <input
            type="number"
            id="abv_gt"
            min="0"
            placeholder="greater than"
            value={searchData.abv_gt}
            onChange={handleChange}
          />
          <input
            type="number"
            id="abv_lt"
            min="0"
            placeholder="less than"
            value={searchData.abv_lt}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="ibu_gt">IBU:</label>
          <input
            type="number"
            id="ibu_gt"
            min="0"
            placeholder="greater than"
            value={searchData.ibu_gt}
            onChange={handleChange}
          />
          <input
            type="number"
            id="ibu_lt"
            min="0"
            placeholder="less than"
            value={searchData.ibu_lt}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="ebc_gt">EBC:</label>
          <input
            type="number"
            id="ebc_gt"
            min="0"
            placeholder="greater than"
            value={searchData.ebc_gt}
            onChange={handleChange}
          />
          <input
            type="number"
            id="ebc_lt"
            min="0"
            placeholder="less than"
            value={searchData.ebc_lt}
            onChange={handleChange}
          />
          <br />
          {/* <label htmlFor="brewed_after">brewed from:</label>
      <DatePicker
        id="brewed_after"
        selected={date.endDate}
        selectsEnd
        startDate={date.startDate}
        endDate={date.endDate}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        onChange={handleChangeEndDate}
      />
      <label htmlFor="brewed_before">to:</label>
      <DatePicker
        id="brewed_before"
        selected={date.startDate}
        selectsStart
        startDate={date.startDate}
        endDate={date.endDate}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        onChange={handleChangeStartDate}
      />
      <br /> */}
          <p>Search by:</p>
          <input
            type="text"
            id="beer_name"
            placeholder="name"
            value={searchData.beer_name}
            onChange={handleChange}
          />
          <input
            type="text"
            id="yeast"
            placeholder="yeast name"
            value={searchData.yeast}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            id="hops"
            placeholder="hops name"
            value={searchData.hops}
            onChange={handleChange}
          />
          <input
            type="text"
            id="malt"
            placeholder="malt name"
            value={searchData.malt}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            id="food"
            placeholder="food"
            value={searchData.food}
            onChange={handleChange}
          />
          <input
            type="text"
            id="ids"
            placeholder="ID"
            value={searchData.ids}
            onChange={handleChange}
          />
          <br />
          <Link to={{ pathname: "/shop", search }}>
            <input type="submit" value="Search" />
          </Link>
          <input type="button" value="Clean form" onClick={handleClear} />
        </div>
      </form>
    </>
  );
}

export default compose(withRouter)(Search);
