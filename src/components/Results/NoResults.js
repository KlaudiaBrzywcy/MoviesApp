import React from "react";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoResults = () => {
  return (
    <section className="results-undefined">
      <p>
        {" "}
        Couldn't find any movie. Please search again using another search
        criteria.
      </p>
      <p className="p-icon">
        <FontAwesomeIcon icon={faGhost} />
      </p>
    </section>
  );
};

export default NoResults;
