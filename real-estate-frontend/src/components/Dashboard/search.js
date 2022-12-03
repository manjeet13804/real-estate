import { BsSearch, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import axios from "axios";
import "./search.css";
const Search = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleTextSearch = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      <div className="seracharea">
        <div class="searchbtn">
          <input
            type="text"
            placeholder="Search ppd id"
            className="isearch"
            name="id"
            id="id"
            onChange={handleTextSearch}/>

          <button type="submit" className="isearchbtn">
            <BsSearch className="btncolor" />
          </button>
        </div>
        <Link to="">
          <button type="sumbit" className="addbtn">
            <BsPlus /> Add Property
          </button>
        </Link>
      </div>
    </>
  );
};
export default Search;
