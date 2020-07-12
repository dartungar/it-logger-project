import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");

  const onChange = (e) => {
    searchLogs(text.current.value);
  };

  return (
    <nav className="blue" style={{ marginBottom: "30px" }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              ref={text}
              placeholder={"search logs..."}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
