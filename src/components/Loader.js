import React from "react";
import PropTypes from "prop-types";

const Loader = ({ info }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{info || "Loading..."}</div>
    </div>
  );
};

Loader.propTypes = {
  info: PropTypes.string,
};
export default Loader;
