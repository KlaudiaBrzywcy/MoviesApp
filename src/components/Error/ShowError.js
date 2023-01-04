import React from "react";
import "./ShowError.css";

const ShowErr = ({ errMsg }) => {
  return (
    <div className="error-div">
      <p className="error-info">Something went wrong!</p>
      <p className="error-detailed-info">{errMsg}</p>
    </div>
  );
};

export default ShowErr;
