import React from "react";

// styles
import "./styles.css";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div class="skill-card">
      <div class="skill-card-icon">
        <FontAwesomeIcon icon={faEnvelope} fontSize={40} />
      </div>
      <h3 class="card-title">Bootstrap</h3>
    </div>
  );
};

export default Card;
