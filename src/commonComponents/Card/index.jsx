import React from "react";

// styles
import "./styles.css";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Card = ({ icon, title, description, index }) => {
  return (
    <div className="card-container d-flex justify-content-center mb-4" key={index}>
      <div className="card-content">
        <div className="d-flex justify-content-center">
          <div className="card-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
        <h3 className="card-title text-center mt-3">{title}</h3>
        <small className="mt-3">{description}</small>
      </div>
    </div>
  );
};

export default Card;
