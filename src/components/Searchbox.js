import React from "react";
import "./sb.css";
const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--white bg-black"
        id="searchbox"
        type="search"
        placeholder="search robot"
        onChange={searchChange}
      />
    </div>
  );
};
export default Searchbox;
