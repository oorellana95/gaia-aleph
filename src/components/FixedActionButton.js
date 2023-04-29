import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

function FixedActionButton() {
  return (
    <>
      <div className="fixed-actions-bottom">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqFg62bWBCeo2Vdj1zwJynnf5LAQt0YR83iy-eR58vn6IYmQ/viewform" type="button" target="_blank" className="fixed-action-btn">
          <FontAwesomeIcon icon={faFileAlt} size="2x" />
          <span>Formulário</span>
        </a>
      </div>
    </>
  );
}

export default FixedActionButton;