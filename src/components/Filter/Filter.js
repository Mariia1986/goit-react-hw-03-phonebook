import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ filter, search }) => {
  return (
    <label  className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        name="filter"
        value={filter}
        onChange={search}
        type="text"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};

export default Filter;
